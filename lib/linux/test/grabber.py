import re
import sys

def merge_line_by_line(desc_file, link_file, output_file):
    """Merge files line-by-line, preserving all duplicates exactly"""
    
    # First read all lines from both files
    try:
        with open(desc_file, 'r', encoding='utf-8') as f:
            desc_lines = [line.strip() for line in f if line.strip()]
    except UnicodeDecodeError:
        with open(desc_file, 'r', encoding='gb18030') as f:
            desc_lines = [line.strip() for line in f if line.strip()]
    
    try:
        with open(link_file, 'r', encoding='utf-8') as f:
            link_lines = [line.strip() for line in f if line.strip()]
    except UnicodeDecodeError:
        with open(link_file, 'r', encoding='gb18030') as f:
            link_lines = [line.strip() for line in f if line.strip()]

    # Verify files have same number of lines
    if len(desc_lines) != len(link_lines):
        print(f"Warning: Files have different line counts (descriptions: {len(desc_lines)}, links: {len(link_lines)})")
        print("Merging up to the minimum line count")
        line_count = min(len(desc_lines), len(link_lines))
    else:
        line_count = len(desc_lines)

    # Process line by line
    with open(output_file, 'w', encoding='utf-8') as out:
        for i in range(line_count):
            desc_line = desc_lines[i]
            link_line = link_lines[i]
            
            # Extract command and description
            if ' - ' in desc_line:
                cmd_part, desc = desc_line.split(' - ', 1)
                cmd_part = cmd_part.strip()
            else:
                cmd_part = desc_line
                desc = "(no description)"
            
            # Extract URL from markdown link
            match = re.match(r'^\[(`?)(.+?)\1\]\((https?://[^)]+)\)$', link_line)
            if match:
                url = match.group(3)
                # Write merged line
                out.write(f"[{cmd_part}]({url}) - {desc}\n")
            else:
                # Fallback if link format doesn't match
                out.write(f"{cmd_part} - {desc} (invalid link: {link_line})\n")

    print(f"Merged {line_count} lines")
    print(f"Output saved to {output_file}")

if __name__ == "__main__":
    if len(sys.argv) != 4:
        print("Usage: python merge.py descriptions.txt links.txt output.txt")
        sys.exit(1)
    
    merge_line_by_line(sys.argv[1], sys.argv[2], sys.argv[3])