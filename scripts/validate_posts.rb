#!/usr/bin/env ruby

require "yaml"
require "date"

errors = []

Dir["_posts/*.md"].sort.each do |path|
  contents = File.read(path)
  front_matter = contents[/\A---\s*\n(.*?)\n---\s*\n/m, 1]

  unless front_matter
    errors << "#{path}: missing front matter"
    next
  end

  date_line = front_matter[/^date:\s*(.+)$/]
  unless date_line && date_line.match?(/(?:[+-]\d{2}:?\d{2}|Z)\s*$/)
    errors << "#{path}: date must include an explicit timezone offset"
  end

  image_references = []
  metadata = YAML.safe_load(front_matter, permitted_classes: [Date, Time], aliases: true) || {}
  image_references << metadata["image"] if metadata["image"].is_a?(String)
  image_references.concat(contents.scan(/!\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/).flatten)

  image_references.compact.each do |reference|
    next if reference.match?(%r{\A(?:https?:)?//})

    relative_path = reference.sub(%r{\A/}, "")
    asset_path = if relative_path.start_with?("assets/")
                   relative_path
                 else
                   "assets/#{relative_path}"
                 end

    unless File.file?(asset_path)
      errors << "#{path}: image not found at #{asset_path}"
    end
  end
end

Dir["_posts/assets/**/*"].each do |path|
  errors << "#{path}: images must be stored under assets/images/<post-id>"
end

if errors.empty?
  puts "Post validation passed."
else
  warn errors.join("\n")
  exit 1
end
