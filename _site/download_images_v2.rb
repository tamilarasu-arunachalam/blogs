require 'open-uri'
require 'fileutils'
require 'digest'

DIR_POSTS = "C:/Users/Tamilarasu/OneDrive/Documents/Hobby/blogs-1/_posts"
IMG_BASE_DIR = "C:/Users/Tamilarasu/OneDrive/Documents/Hobby/blogs-1/assets/images"

# Helper to determine extension
def get_extension(url, content_type)
  return ".png" if content_type.to_s.include?("image/png")
  return ".jpg" if content_type.to_s.include?("image/jpeg")
  return ".gif" if content_type.to_s.include?("image/gif")
  return ".webp" if content_type.to_s.include?("image/webp")
  return ".svg" if content_type.to_s.include?("image/svg")
  
  if url.downcase.include?(".png")
    return ".png"
  elsif url.downcase.include?(".jpg") || url.downcase.include?(".jpeg")
    return ".jpg"
  elsif url.downcase.include?(".gif")
    return ".gif"
  elsif url.downcase.include?(".webp")
    return ".webp"
  end
  
  ".png" # Default fallback
end

files = Dir.glob(File.join(DIR_POSTS, "*.md"))

# First pass: find max post_id
max_id = 0
files.each do |file|
  content = File.read(file)
  if content =~ /^post_id:\s*"?(\d+)"?$/
    id = $1.to_i
    max_id = id if id > max_id
  end
end

next_id = max_id + 1
total_images = 0

files.each do |file|
  content = File.read(file)
  updated = false
  
  # Ensure post_id exists
  post_id_str = nil
  if content =~ /^post_id:\s*"?(\d+)"?$/
    post_id_str = sprintf("%03d", $1.to_i)
  else
    # inject post_id into frontmatter
    post_id_str = sprintf("%03d", next_id)
    next_id += 1
    # Replace the FIRST occurence of --- to insert post_id below it
    content.sub!(/^---$/, "---\npost_id: \"#{post_id_str}\"")
    updated = true
  end
  
  post_img_dir = File.join(IMG_BASE_DIR, post_id_str)
  # For Jekyll, often it is {{ site.baseurl }}/assets/..., but maybe /assets/... is fine too. Let's use /assets/... to be safe or {{ site.baseurl }}
  base_url = "{{ site.baseurl }}/assets/images/#{post_id_str}"
  
  dir_created = false
  
  # Match 1: <img ... src="http..." ... > or <img src='http...' />
  content.gsub!(/<img\s+[^>]*src=['"](http[^'"]+)['"][^>]*>/i) do |match|
    url = $1
    begin
      unless dir_created
        FileUtils.mkdir_p(post_img_dir)
        dir_created = true
      end
      
      puts "Downloading #{url} to #{post_id_str}..."
      URI.open(url) do |image|
        ext = get_extension(url, image.content_type)
        hash = Digest::MD5.hexdigest(url)[0, 10]
        filename = "img_#{hash}#{ext}"
        filepath = File.join(post_img_dir, filename)
        
        File.binwrite(filepath, image.read) unless File.exist?(filepath)
        total_images += 1
        updated = true
        
        match.sub(url, "#{base_url}/#{filename}")
      end
    rescue => e
      puts "Failed to download #{url}: #{e.message}"
      match # Return original if failed
    end
  end
  
  # Match 2: ![alt](http...)
  content.gsub!(/!\[(.*?)\]\((http[^\)]+)\)/i) do |match|
    alt = $1
    url = $2
    begin
      unless dir_created
        FileUtils.mkdir_p(post_img_dir)
        dir_created = true
      end
      
      puts "Downloading markdown image #{url} to #{post_id_str}..."
      URI.open(url) do |image|
        ext = get_extension(url, image.content_type)
        hash = Digest::MD5.hexdigest(url)[0, 10]
        filename = "img_#{hash}#{ext}"
        filepath = File.join(post_img_dir, filename)
        
        File.binwrite(filepath, image.read) unless File.exist?(filepath)
        total_images += 1
        updated = true
        
        "![#{alt}](#{base_url}/#{filename})"
      end
    rescue => e
      puts "Failed to download #{url}: #{e.message}"
      match
    end
  end
  
  if updated
    File.write(file, content)
    puts "Updated #{File.basename(file)}"
  end
end

puts "Done! Downloaded #{total_images} images."
