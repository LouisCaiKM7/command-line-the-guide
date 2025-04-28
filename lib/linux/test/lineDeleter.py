def delete(file):
    # Read the file
    with open(file, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    # Keep only lines that do NOT have '---'
    new_lines = [line for line in lines if '---' not in line.strip()]

    # Write the cleaned lines back
    with open(file, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)

