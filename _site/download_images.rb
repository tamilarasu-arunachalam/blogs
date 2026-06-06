require 'open-uri'
require 'fileutils'
require 'digest'
require 'net/http'

DIR_POSTS    = "C:/Users/Tamilarasu/OneDrive/Documents/Hobby/blogs-1/_posts"
DIR_ASSETS   = "C:/Users/Tamilarasu/OneDrive/Documents/Hobby/blogs-1/assets/images"
DIR_MIGRATED = "#{DIR_ASSETS}/migrated"
SITE_BASE    = "{{ site.baseurl }}/assets/images"

# ---------------------------------------------------------------------------
# Helper: determine file extension from content-type or URL
# ---------------------------------------------------------------------------
def get_extension(url, content_type)
  return ".png"  if content_type.to_s.include?("image/png")
  return ".jpg"  if content_type.to_s.include?("image/jpeg")
  return ".gif"  if content_type.to_s.include?("image/gif")
  return ".webp" if content_type.to_s.include?("image/webp")
  return ".svg"  if content_type.to_s.include?("image/svg")

  url_down = url.downcase
  return ".png"  if url_down.include?(".png")
  return ".jpg"  if url_down.include?(".jpg") || url_down.include?(".jpeg")
  return ".gif"  if url_down.include?(".gif")
  return ".webp" if url_down.include?(".webp")

  ".png" # fallback
end

# ---------------------------------------------------------------------------
# Helper: download one image and return local filename
# ---------------------------------------------------------------------------
def download_image(url, dest_dir)
  URI.open(url, "User-Agent" => "Mozilla/5.0") do |img|
    ext      = get_extension(url, img.content_type)
    hash     = Digest::MD5.hexdigest(url)[0, 10]
    filename = "img_#{hash}#{ext}"
    filepath = File.join(dest_dir, filename)

    File.binwrite(filepath, img.read) unless File.exist?(filepath)
    return filename
  end
rescue => e
  puts "  [WARN] Failed to download #{url}: #{e.message}"
  nil
end

# ---------------------------------------------------------------------------
# Helper: extract post_id from Jekyll front matter
# ---------------------------------------------------------------------------
def extract_post_id(content)
  if content =~ /^---\s*\n(.*?)\n---/m
    fm = $1
    if fm =~ /^post_id:\s*["']?(\d+)["']?\s*$/
      return $1.rjust(3, "0")   # ensure zero-padded to 3 digits
    end
  end
  nil
end

# ---------------------------------------------------------------------------
# Main processing
# ---------------------------------------------------------------------------
FileUtils.mkdir_p(DIR_MIGRATED)

total_downloaded = 0
total_moved      = 0
files = Dir.glob(File.join(DIR_POSTS, "*.md")).sort

files.each do |file|
  content    = File.read(file)
  basename   = File.basename(file)
  post_id    = extract_post_id(content)
  updated    = false

  if post_id.nil?
    puts "  [SKIP] No post_id found in #{basename}"
    next
  end

  dest_dir = File.join(DIR_ASSETS, post_id)
  FileUtils.mkdir_p(dest_dir)
  puts "\n[#{post_id}] #{basename}"

  # ---- Pass 1: Download external http images that are NOT yet localised ----

  # <img ... src="http..." ...>
  content = content.gsub(/<img\s+[^>]*src=['\"](http[^'\"]+)['\"][^>]*>/i) do |match|
    url = $1
    puts "  Downloading external img tag: #{url[0, 80]}..."
    filename = download_image(url, dest_dir)
    if filename
      total_downloaded += 1
      updated = true
      match.sub(url, "#{SITE_BASE}/#{post_id}/#{filename}")
    else
      match
    end
  end

  # ![alt](http...)
  content = content.gsub(/!\[(.*?)\]\((http[^\)]+)\)/i) do |match|
    alt = $1
    url = $2
    puts "  Downloading markdown image: #{url[0, 80]}..."
    filename = download_image(url, dest_dir)
    if filename
      total_downloaded += 1
      updated = true
      "![#{alt}](#{SITE_BASE}/#{post_id}/#{filename})"
    else
      match
    end
  end

  # ---- Pass 2: Move already-migrated images to the post's own folder ------

  # Matches: /assets/images/migrated/img_XXXXXXXX.ext
  content = content.gsub(%r{#{Regexp.escape(SITE_BASE)}/migrated/(img_[a-f0-9]+\.\w+)}) do |match|
    img_filename = $1
    src_path     = File.join(DIR_MIGRATED, img_filename)
    dst_path     = File.join(dest_dir,     img_filename)

    if File.exist?(src_path)
      FileUtils.cp(src_path, dst_path) unless File.exist?(dst_path)
      total_moved += 1
      updated = true
      puts "  Moved migrated image: #{img_filename} -> #{post_id}/"
    else
      puts "  [WARN] Migrated image not found on disk: #{img_filename}"
    end

    "#{SITE_BASE}/#{post_id}/#{img_filename}"
  end

  if updated
    File.write(file, content)
    puts "  -> Updated #{basename}"
  end
end

puts "\n=== Done ==="
puts "Images downloaded from web : #{total_downloaded}"
puts "Images moved from migrated : #{total_moved}"
