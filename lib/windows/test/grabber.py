import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

# URL of the Concept Index page
url = "https://www.gnu.org/software/coreutils/manual/html_node/Concept-index.html"
base_url = "https://www.gnu.org/software/coreutils/manual/html_node/"

# Configure output directory
base_dir = r"E:\cmd guide\command-line-the-guide\lib\windows"
os.makedirs(base_dir, exist_ok=True)

# Special character to filename mappings
special_mappings = {
    '\\': 'BackSlashSign',
    '/': 'SlashSign',
    '>': 'BiggerSign',
    '<': 'SmallerSign',
    '|': 'OrSign',
    '*': 'StarSign'
}

# Fetch the page content
try:
    response = requests.get(url, timeout=10)
    response.raise_for_status()
except requests.RequestException as e:
    print(f"Failed to retrieve the page: {e}")
    exit()

# Parse the HTML content
soup = BeautifulSoup(response.text, 'html.parser')

# Find the main concept index div
concept_index = soup.find('div', id='Concept-index')
if not concept_index:
    print("Could not find the Concept-index div")
    exit()

# Find all tables within the concept index
tables = concept_index.find_all('table')
if not tables:
    print("Could not find any tables in the Concept-index")
    exit()

grouped_commands = {}

# Process each table
for table in tables:
    # Find all rows in the table body
    rows = table.find_all('tr')
    for row in rows:
        # Get the command cell (second td) and description cell (third td)
        cells = row.find_all('td')
        if len(cells) < 3:
            continue
            
        # Get command name from code tag in second cell
        command_cell = cells[1]
        code_tag = command_cell.find('code')
        if not code_tag:
            continue
        command = code_tag.get_text().strip()
        
        # Get href from anchor tag
        a_tag = command_cell.find('a')
        if not a_tag:
            continue
        href = a_tag.get('href')
        if not href:
            continue
        
        # Construct the full URL
        full_url = urljoin(base_url, href)
        
        # Get description from third cell
        description_cell = cells[2]
        description = description_cell.get_text().strip()
        
        # Determine filename group key
        if command:
            first_char = command[0]
            # Handle special character mappings
            if first_char in special_mappings:
                group_key = special_mappings[first_char]
            else:
                # Uppercase letters, keep others as-is
                group_key = first_char.upper() if first_char.isalpha() else first_char
            
            # Add to grouped commands
            if group_key not in grouped_commands:
                grouped_commands[group_key] = []
            grouped_commands[group_key].append((command, full_url, description))

# Write each group to a separate markdown file
for group_key, entries in grouped_commands.items():
    filename = f"StartsWith{group_key}.md"
    filepath = os.path.join("../"+base_dir, filename)
    
    try:
        with open(filepath, 'w', encoding='utf-8') as f:
            for entry in entries:
                command, link, desc = entry
                f.write(f"- [`{command}`]({link}) - {desc}\n")
    except IOError as e:
        print(f"Failed to write file {filename}: {e}")

print(f"Successfully created {len(grouped_commands)} markdown files in: {base_dir}")