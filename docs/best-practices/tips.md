# Command Line Tips and Best Practices

## Introduction
Effective use of the command line requires knowledge of various tips, tricks, and best practices that can enhance productivity and efficiency.

## General Tips

### Command History
```bash
# Search command history
Ctrl + R

# View command history
history

# Execute previous command
!!

# Execute specific command from history
!number
```

### Tab Completion
- Use Tab for command and file name completion
- Double Tab to show all possibilities
- Works with commands, file paths, and package names

### Directory Navigation
```bash
# Quick home directory access
cd ~

# Previous directory
cd -

# Move up multiple directories
cd ../../

# Create and change to directory
mkdir -p new_dir && cd $_
```

## Efficiency Tricks

### Command Line Shortcuts
```bash
# Beginning of line
Ctrl + A

# End of line
Ctrl + E

# Clear screen
Ctrl + L

# Cut from cursor to end
Ctrl + K

# Paste cut text
Ctrl + Y
```

### Command Substitution
```bash
# Use command output in another command
echo "Today is $(date)"

# Process substitution
diff <(ls dir1) <(ls dir2)
```

### Aliases and Functions
```bash
# Create useful aliases
alias ll='ls -la'
alias update='sudo apt update && sudo apt upgrade'

# Create function
mkcd() {
    mkdir -p "$1" && cd "$1"
}
```

## File Management

### Quick File Operations
```bash
# Create multiple directories
mkdir -p dir1/{sub1,sub2,sub3}

# Find files quickly
find . -name "*.txt" -type f

# Quick file backup
cp file.txt{,.bak}
```

### File Viewing
```bash
# View file with line numbers
cat -n file.txt

# View compressed files
zcat file.gz

# Follow log files
tail -f logfile
```

## Process Management

### Background Processes
```bash
# Run in background
command &

# Detach process
Ctrl + Z
bg

# List jobs
jobs
```

### Process Control
```bash
# Kill process by name
pkill process_name

# Kill all processes of a user
pkill -u username
```

## Text Processing

### Quick Text Manipulation
```bash
# Count lines, words, characters
wc -l file.txt

# Quick column extraction
cut -d',' -f1 file.csv

# Remove duplicate lines
sort file.txt | uniq
```

## Debugging Tips

### Error Handling
```bash
# Show command execution
set -x

# Exit on error
set -e

# Debug script
bash -x script.sh
```

### Troubleshooting
- Check command syntax with `man` or `--help`
- Use `which` to locate commands
- Check system logs for errors
- Monitor resource usage with `top` or `htop`

## Productivity Enhancements

### Command Line Tools
- Use `tmux` for terminal multiplexing
- Try `fzf` for fuzzy finding
- Utilize `ripgrep` for fast searching
- Consider `bat` as a better `cat`

### Time-Saving Techniques
- Use wildcards effectively
- Learn regular expressions
- Create custom scripts for repetitive tasks
- Use keyboard shortcuts

## Best Practices

### Code Organization
- Keep scripts organized
- Use meaningful names
- Document commands and scripts
- Maintain consistent formatting

### Safety Measures
- Always backup important files
- Test commands on sample data
- Use version control
- Review scripts before execution

## Related Topics
- [Shell Scripting](../os/linux/shell-scripting.md)
- [Command Syntax](../fundamentals/command-syntax.md)
- [Automation](./automation.md)

---

**Navigation**
- Previous: [Shell Scripting](../os/linux/shell-scripting.md)
- Next: [Security Best Practices](./security.md)
- [Back to Index](../index.md)