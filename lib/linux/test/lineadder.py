# Function to read file content with a specified encoding
def read_file(file_path, encoding='utf-8'):
    with open(file_path, 'r', encoding=encoding) as file:
        return file.readlines()

# Function to add a line between lines in markdown
def add_lines_between_lines(input_file):
    # Read the content of the file
    try:
        lines = read_file(input_file)
    except UnicodeDecodeError:
        print(f"Error reading the file {input_file}. Trying with 'utf-8' encoding.")
        lines = read_file(input_file, encoding='utf-8')

    # Prepare the new lines with a separator (horizontal rule) between each line
    new_lines = []
    for i, line in enumerate(lines):
        new_lines.append(line.strip())  # Add the original line (strip to avoid multiple spaces)
        
        # Add a horizontal rule after each line except the last one
        if i < len(lines) - 1:
            new_lines.append('---')

    # Write the new content back to the input file
    with open(input_file, 'w', encoding='utf-8') as output:
        output.write("\n".join(new_lines))

    print(f"Added lines between lines in {input_file}")

# Example usage
add_lines_between_lines('StartsWithA.md')
