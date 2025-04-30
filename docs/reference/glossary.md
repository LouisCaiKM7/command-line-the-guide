# Command-Line Glossary

## Introduction
This glossary provides definitions and explanations for common command-line terms, concepts, and jargon. Understanding these terms is essential for effective command-line usage.

## Basic Terms

### Shell
A command-line interpreter that provides a user interface for Unix-like operating systems and Windows. Examples include Bash, PowerShell, and CMD.

### Terminal
A program that runs a shell and provides a text-based interface for interacting with the operating system.

### Console
The physical or virtual display and keyboard interface used to interact with the system through text commands.

### Prompt
The text displayed by the shell indicating it's ready to accept commands. Often shows information like username, hostname, and current directory.

## Command Components

### Command
A program or utility that performs a specific function when executed from the command line.

### Argument
Additional information passed to a command to modify its behavior or specify what it should act upon.

### Option/Flag
Special arguments that modify a command's behavior, usually prefixed with `-` or `--`.

### Parameter
A value provided to an option that requires additional information.

## File System Concepts

### Path
A string that specifies the location of a file or directory in the file system hierarchy.

### Working Directory
The current directory in which a shell session is operating.

### Root Directory
The top-level directory in a file system hierarchy, represented as `/` in Unix-like systems and a drive letter (e.g., `C:\`) in Windows.

### Home Directory
The default directory for a user, containing their personal files and configuration settings.

## Input/Output

### Standard Input (stdin)
The default data stream that commands read input from, usually the keyboard.

### Standard Output (stdout)
The default data stream that commands write output to, usually the terminal.

### Standard Error (stderr)
The data stream used for error messages and diagnostic output.

### Pipeline
A mechanism for connecting multiple commands, where the output of one command becomes the input of the next.

## Process Management

### Process
An instance of a running program.

### Background Process
A process that runs without occupying the terminal, allowing other commands to be entered.

### Foreground Process
A process that occupies the terminal while running.

### Daemon
A background process that runs continuously, usually providing system services.

## Access Control

### Permission
Rules that determine who can access files and directories and what operations they can perform.

### User
An account on the system that can run commands and access resources.

### Group
A collection of users that share the same access permissions.

### Superuser/Administrator
A user with elevated privileges who can perform system administration tasks.

## Environment

### Environment Variable
Named values that affect the behavior of running processes and programs.

### Shell Script
A file containing a sequence of shell commands that can be executed as a program.

### Configuration File
A file that contains settings and preferences for programs or the shell itself.

### Path Variable
An environment variable that tells the shell where to look for executable programs.

## Common Abbreviations

### pwd
Print Working Directory

### cd
Change Directory

### ls
List Directory Contents

### cp
Copy

### mv
Move

### rm
Remove

### sudo
Superuser Do

## Related Topics
- [Shell Configuration](./shell-config.md)
- [Command Reference](./commands.md)
- [Keyboard Shortcuts](./shortcuts.md)

## Text Editors

### Vim
A highly configurable text editor built to enable efficient text editing. Key features include:
- Modal editing (Normal, Insert, Visual modes)
- Extensive keyboard shortcuts
- Built-in scripting language
- Powerful search and replace
- Macro recording and playback

#### Vim Modes
- **Normal Mode**: Default mode for navigation and commands
- **Insert Mode**: For typing and editing text
- **Visual Mode**: For selecting and manipulating text blocks
- **Command Mode**: For executing Vim commands

#### Common Vim Commands
- `i` - Enter insert mode
- `esc` - Return to normal mode
- `h,j,k,l` - Navigation keys
- `dd` - Delete line
- `yy` - Copy line
- `p` - Paste
- `:w` - Save file
- `:q` - Quit
- `:wq` - Save and quit

---

**Navigation**
- Previous: [Command Reference](./commands.md)
- Next: [Keyboard Shortcuts](./shortcuts.md)
- [Back to Index](../index.md)