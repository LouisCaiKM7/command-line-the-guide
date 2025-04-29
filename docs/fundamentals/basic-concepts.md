# Basic Command Line Concepts

This guide covers the fundamental concepts you need to understand when working with the command line interface (CLI).

## Shell

A shell is the program that interprets and executes your commands. It provides the interface between you and the operating system. Common shells include:

- **Bash** - The default shell on most Linux systems and macOS
- **PowerShell** - Microsoft's modern command shell
- **CMD** - Traditional Windows Command Prompt
- **Zsh** - An extended Bourne shell with additional features

## Command Structure

Commands typically follow this basic structure:
```bash
command [options] [arguments]
```

For example:
```bash
ls -l /home/user
```
Here:
- `ls` is the command
- `-l` is an option (flag)
- `/home/user` is the argument

## File System Navigation

### Path Concepts
- **Absolute Path**: Full path from the root directory (e.g., `/home/user/documents`)
- **Relative Path**: Path relative to current location (e.g., `./documents`)
- **Home Directory**: Your user's home folder (`~` in Linux/macOS)
- **Current Directory**: The directory you're currently in (`.`)
- **Parent Directory**: The directory one level up (`..`)

## Input/Output

### Standard Streams
- **stdin (0)**: Standard input - Data fed into the program
- **stdout (1)**: Standard output - Program's normal output
- **stderr (2)**: Standard error - Error messages and diagnostics

### Redirection
```bash
command > file.txt    # Redirect output to file
command >> file.txt   # Append output to file
command < input.txt   # Take input from file
```

## Environment Variables

Environment variables store system-wide or user-specific settings:

- **PATH**: Locations where the system looks for executable files
- **HOME**: Path to current user's home directory
- **USER**: Current username

View variables:
```bash
# Windows
echo %PATH%

# Linux/macOS
echo $PATH
```

## Permissions and Access

### Linux/macOS Permissions
```bash
rw-r--r--  # Example permission string
```
- First three: Owner permissions
- Middle three: Group permissions
- Last three: Others permissions

Where:
- `r`: Read
- `w`: Write
- `x`: Execute

### Windows Permissions
- Read
- Write
- Execute
- Full Control
- Special Permissions

## Process Management

Processes are running instances of programs. Basic process concepts:

- **Foreground Process**: Running in current terminal session
- **Background Process**: Running behind the scenes
- **Process ID (PID)**: Unique identifier for each process
- **Parent Process**: Process that started another process

## Next Steps

Now that you understand the basic concepts, you can:
- Learn about [Command Line Syntax](./command-syntax.md)
- Explore [File System Navigation](../advanced/file-system.md)
- Study [Process Management](../advanced/process-management.md)

## Related Topics

- [Environment Variables](../advanced/environment-variables.md)
- [Security Considerations](../best-practices/security.md)
- [Command Line Tips](../best-practices/tips.md)