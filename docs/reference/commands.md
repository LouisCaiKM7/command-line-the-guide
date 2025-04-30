# Command-Line Reference Guide

## Introduction
This guide provides a comprehensive reference for essential command-line commands across different operating systems. Each command includes a description, common usage patterns, and practical examples.

## File and Directory Operations

### Navigation
```bash
cd [directory]     # Change directory
pwd                # Print working directory
dir                # List directory contents (Windows)
ls                 # List directory contents (Unix)
```

### File Management
```bash
cp [source] [dest] # Copy files/directories
mv [source] [dest] # Move/rename files/directories
rm [file]         # Remove files (Unix)
del [file]        # Delete files (Windows)
mkdir [name]      # Create directory
rmdir [dir]       # Remove directory
```

### File Information
```bash
file [name]       # Display file type
stat [file]       # Display file status
type [file]       # Display file contents (Windows)
cat [file]        # Display file contents (Unix)
```

## System Operations

### Process Management
```bash
ps                # List processes (Unix)
tasklist          # List processes (Windows)
kill [pid]        # Terminate process (Unix)
taskkill [pid]    # Terminate process (Windows)
top               # Monitor processes (Unix)
```

### System Information
```bash
uname -a          # System information (Unix)
systeminfo        # System information (Windows)
df                # Disk space usage
free              # Memory usage (Unix)
```

## Text Processing

### Search and Filter
```bash
grep [pattern]    # Search text patterns
find [path]       # Find files/directories
findstr [string]  # Find strings (Windows)
sort              # Sort text
```

### Text Manipulation
```bash
sed               # Stream editor
awk               # Text processing tool
cut               # Extract text sections
tr                # Translate characters
```

## Network Operations

### Connectivity
```bash
ping [host]       # Test network connectivity
tracert [host]    # Trace route to host
netstat           # Network statistics
ipconfig          # IP configuration (Windows)
ifconfig          # Interface config (Unix)
```

### File Transfer
```bash
scp               # Secure copy
ftp               # File transfer protocol
wget              # Download files (Unix)
curl              # Transfer data
```

## User Management

### User Operations
```bash
whoami            # Display current user
su [user]         # Switch user (Unix)
runas             # Run as different user (Windows)
chmod             # Change permissions (Unix)
icacls            # Change permissions (Windows)
```

## Package Management

### Package Operations
```bash
apt               # Package manager (Debian)
yum               # Package manager (RHEL)
pip               # Python package manager
npm               # Node.js package manager
```

## Advanced Operations

### Shell Scripting
```bash
echo              # Print text
set               # Set variables
export            # Export variables
test              # Evaluate conditions
```

### Job Control
```bash
jobs              # List background jobs
bg                # Background process
fg                # Foreground process
nohup             # Run immune to hangups
```

## Best Practices
1. Always use `--help` or `man` for detailed command information
2. Be cautious with destructive commands (rm, del, format)
3. Use tab completion for efficiency
4. Verify commands before execution
5. Keep command history for reference

## Common Options
- `-h` or `--help`: Display help
- `-v` or `--version`: Display version
- `-f` or `--force`: Force operation
- `-r` or `--recursive`: Recursive operation
- `-i` or `--interactive`: Interactive mode

## Related Topics
- [Shell Configuration](./shell-config.md)
- [Keyboard Shortcuts](./shortcuts.md)
- [Command-Line Glossary](./glossary.md)

---

**Navigation**
- Previous: [Task Automation](../best-practices/automation.md)
- Next: [Command-Line Glossary](./glossary.md)
- [Back to Index](../index.md)