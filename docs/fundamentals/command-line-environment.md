# Command-line Environment

This guide covers essential tools and practices for working effectively in a command-line environment. We'll explore shell features, terminal multiplexers, and various utilities that enhance your command-line workflow.

## Table of Contents

1. [Shell Features](#shell-features)
2. [Terminal Multiplexers](#terminal-multiplexers)
3. [Remote Access](#remote-access)
4. [Job Control](#job-control)
5. [Terminal Customization](#terminal-customization)
6. [Shell Scripting](#shell-scripting)

## Shell Features

### Command History
```bash
history                 # View command history
!n                      # Run command number n from history
!!                      # Run last command
Ctrl + R               # Reverse search through history
```

### Shell Shortcuts
- `Ctrl + A`: Move cursor to beginning of line
- `Ctrl + E`: Move cursor to end of line
- `Ctrl + U`: Clear line before cursor
- `Ctrl + K`: Clear line after cursor
- `Ctrl + W`: Delete word before cursor
- `Alt + F`: Move forward one word
- `Alt + B`: Move backward one word

### Command Line Editing
```bash
set -o vi              # Enable vi mode
set -o emacs           # Enable emacs mode (default)
```

## Terminal Multiplexers

### tmux
Terminal multiplexer for multiple sessions:
```bash
tmux                   # Start new session
tmux new -s name       # Start new named session
tmux ls                # List sessions
tmux attach -t name    # Attach to named session
```

Common tmux shortcuts (after prefix `Ctrl + B`):
- `c`: Create new window
- `%`: Split pane vertically
- `"`: Split pane horizontally
- `arrow keys`: Navigate panes
- `d`: Detach from session

### screen
Alternative terminal multiplexer:
```bash
screen                 # Start new session
screen -S name         # Start new named session
screen -ls             # List sessions
screen -r name         # Reattach to session
```

## Remote Access

### SSH
Secure Shell for remote access:
```bash
ssh user@hostname      # Connect to remote host
ssh -p port user@host  # Connect on specific port
ssh-keygen            # Generate SSH key pair
ssh-copy-id user@host # Copy SSH key to server
```

### SCP and SFTP
Secure file transfer:
```bash
scp file user@host:path  # Copy file to remote host
sftp user@host           # Start SFTP session
```

## Job Control

### Background Processes
```bash
command &              # Start process in background
Ctrl + Z               # Suspend current process
bg                     # Resume suspended process in background
fg                     # Bring background process to foreground
jobs                   # List background jobs
```

### Process Management
```bash
ps aux                 # List all processes
top                    # Interactive process viewer
kill PID               # Terminate process by ID
killall name           # Terminate processes by name
```

## Terminal Customization

### Shell Configuration
```bash
# .bashrc or .zshrc
export PATH="$PATH:/custom/path"  # Add to PATH
alias ll='ls -la'                 # Create alias
```

### Prompt Customization
```bash
# PS1 customization example
export PS1="\u@\h:\w\$ "   # User@Host:Directory$
```

### Color and Formatting
```bash
# Add color to ls output
export CLICOLOR=1
export LSCOLORS=ExFxCxDxBxegedabagacad

# Color prompt
export PS1="\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ "
```

## Shell Scripting

### Basic Script Structure
```bash
#!/bin/bash

# Variables
NAME="World"

# Functions
greet() {
    echo "Hello, $1!"
}

# Main script
greet "$NAME"
```

### Control Structures
```bash
# If statement
if [ "$1" = "test" ]; then
    echo "Test mode"
fi

# For loop
for i in {1..5}; do
    echo "Number $i"
done

# While loop
while read -r line; do
    echo "Line: $line"
done < file.txt
```

### Error Handling
```bash
# Exit on error
set -e

# Error handling function
handle_error() {
    echo "Error on line $1" >&2
    exit 1
}

trap 'handle_error $LINENO' ERR
```

## Tips and Best Practices

1. Use shell history effectively
2. Learn and use keyboard shortcuts
3. Customize your environment for productivity
4. Use version control for configuration files
5. Document your scripts and configurations

## Additional Resources

- [Bash Manual](https://www.gnu.org/software/bash/manual/)
- [tmux Documentation](https://github.com/tmux/tmux/wiki)
- [SSH Documentation](https://www.openssh.com/manual.html)
- [Shell Scripting Guide](https://www.shellscript.sh/)

This guide covers the fundamentals of working in a command-line environment. For related topics, check out the sections on [Data Wrangling](data-wrangling.md) and [Version Control](version-control.md).

---

**Navigation**
- Previous: [Data Wrangling](data-wrangling.md)
- Next: [Debugging and Profiling](debugging-profiling.md)
- [Back to Index](../index.md)