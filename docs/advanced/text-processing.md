# Text Processing

## Introduction
Text processing in the command line provides powerful tools for manipulating and analyzing text data efficiently.

## Basic Text Commands

### cat
Display file contents:
```bash
cat file.txt                # Display entire file
cat -n file.txt             # Display with line numbers
cat file1.txt file2.txt     # Concatenate files
```

### head/tail
View beginning or end of files:
```bash
head -n 10 file.txt         # First 10 lines
tail -n 20 file.txt         # Last 20 lines
tail -f log.txt             # Follow file updates
```

### grep
Search text patterns:
```bash
grep "pattern" file.txt     # Search for pattern
grep -i "pattern" file.txt  # Case-insensitive search
grep -r "pattern" directory # Recursive search
```

## Text Manipulation

### sed
Stream editor for text transformation:
```bash
sed 's/old/new/' file.txt   # Replace first occurrence
sed 's/old/new/g' file.txt  # Replace all occurrences
sed -i 's/old/new/g' file.txt # Edit file in-place
```

### awk
Text processing and pattern scanning:
```bash
awk '{print $1}' file.txt   # Print first column
awk -F, '{print $2}' file.csv # CSV processing
awk 'NR > 1' file.txt       # Skip first line
```

### sort
Sort text files:
```bash
sort file.txt               # Sort lines alphabetically
sort -n file.txt            # Sort numerically
sort -r file.txt            # Reverse sort
```

## Advanced Processing

### cut
Extract sections from lines:
```bash
cut -d, -f1,3 file.csv      # Extract CSV columns
cut -c1-10 file.txt         # Extract characters
```

### tr
Translate or delete characters:
```bash
tr 'a-z' 'A-Z' < file.txt   # Convert to uppercase
tr -d '\r' < file.txt       # Remove carriage returns
```

### uniq
Report or filter repeated lines:
```bash
uniq file.txt               # Remove adjacent duplicates
uniq -c file.txt            # Count occurrences
```

## Text Analysis

### wc
Count lines, words, and characters:
```bash
wc file.txt                 # All counts
wc -l file.txt              # Count lines only
wc -w file.txt              # Count words only
```

### diff
Compare files line by line:
```bash
diff file1.txt file2.txt    # Show differences
diff -u file1.txt file2.txt # Unified format
```

## Regular Expressions

### Basic Patterns
```bash
grep '^start' file.txt      # Lines starting with 'start'
grep 'end$' file.txt        # Lines ending with 'end'
grep '[0-9]' file.txt       # Lines containing digits
```

### Extended Patterns
```bash
grep -E '\b\w+@\w+\.\w+\b' file.txt  # Find email addresses
grep -E '^\s*$' file.txt    # Find empty lines
```

## Best Practices
- Use appropriate tools for specific tasks
- Combine commands with pipes for complex operations
- Test commands on sample data first
- Create backups before in-place editing
- Document complex text processing workflows

## Related Topics
- [File System Navigation](./file-system.md)
- [Shell Scripting](../os/linux/shell-scripting.md)
- [Command Syntax](../fundamentals/command-syntax.md)

## Text Editors

### Vim
Vim is a powerful, modal text editor available on most Unix-like systems and Windows. It's known for its efficiency and extensive customization options.

#### Basic Usage
```bash
vim file.txt               # Open file in Vim
view file.txt              # Open in read-only mode
vim -R file.txt            # Another read-only option
vim file1.txt file2.txt    # Open multiple files
```

#### Navigation
- `h,j,k,l` - Move left, down, up, right
- `w` - Move to next word
- `b` - Move to previous word
- `0` - Move to start of line
- `$` - Move to end of line
- `gg` - Go to first line
- `G` - Go to last line
- `:n` - Go to line n

#### Editing
- `i` - Enter insert mode before cursor
- `a` - Enter insert mode after cursor
- `o` - Open new line below
- `O` - Open new line above
- `x` - Delete character
- `dd` - Delete line
- `yy` - Copy line
- `p` - Paste after cursor
- `P` - Paste before cursor

#### Search and Replace
```vim
/pattern        # Search forward
?pattern        # Search backward
n              # Next match
N              # Previous match
:%s/old/new/g  # Replace all occurrences
```

#### Multiple Files
- `:e file.txt` - Edit another file
- `:bn` - Next buffer
- `:bp` - Previous buffer
- `:ls` - List buffers
- `:sp` - Split window horizontally
- `:vsp` - Split window vertically

#### Configuration
- `~/.vimrc` - Personal configuration file
- `:set number` - Show line numbers
- `:set syntax=python` - Set syntax highlighting
- `:set autoindent` - Enable auto-indentation

---

**Navigation**
- Previous: [File System Navigation](./file-system.md)
- Next: [Process Management](./process-management.md)