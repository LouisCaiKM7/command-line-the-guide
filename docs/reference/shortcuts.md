# Keyboard Shortcuts Guide

## Introduction
Keyboard shortcuts are essential for efficient command-line usage. This guide covers common shortcuts for both Windows and Unix-like systems, helping you navigate and control the terminal more effectively.

## Navigation Shortcuts

### Cursor Movement
```
Ctrl + A          # Move to beginning of line
Ctrl + E          # Move to end of line (Unix)
End               # Move to end of line (Windows)
Ctrl + B/Left     # Move back one character
Ctrl + F/Right    # Move forward one character
Alt + B           # Move back one word
Alt + F           # Move forward one word
```

### History Navigation
```
Ctrl + P/Up       # Previous command in history
Ctrl + N/Down     # Next command in history
Ctrl + R          # Reverse search through history
Ctrl + G          # Cancel history search
```

## Editing Shortcuts

### Text Manipulation
```
Ctrl + U          # Cut from cursor to start of line
Ctrl + K          # Cut from cursor to end of line
Ctrl + W          # Cut word before cursor
Ctrl + Y          # Paste previously cut text
Ctrl + _          # Undo last edit
```

### Line Control
```
Ctrl + C          # Cancel current command
Ctrl + L          # Clear screen
Ctrl + D          # Exit current shell (or EOF)
Ctrl + Z          # Suspend current process
```

## Process Control

### Job Management
```
Ctrl + C          # Interrupt (kill) current process
Ctrl + Z          # Suspend current process
Ctrl + D          # End of file (EOF)
```

## Terminal Control

### Screen Management
```
Ctrl + L          # Clear screen
Ctrl + S          # Stop screen output
Ctrl + Q          # Resume screen output
Ctrl + Alt + Del  # Task manager (Windows)
```

## Windows CMD Specific

### Command Editing
```
F1                # Paste last command one character at a time
F2                # Copy up to specified character from previous command
F3                # Repeat last command
F4                # Delete up to specified character
F5                # Cycle through command history
F7                # Display command history in a window
F8                # Cycle through commands that match current input
F9                # Select command by number
```

## PowerShell Specific

### Command Completion
```
Tab               # Auto-complete command or file name
Ctrl + Space      # Show command completion options
F8                # Search command history matching current input
```

### Editor Functions
```
F2                # Move cursor to command line
F4                # Delete to end of word
F7                # Display command history
Alt + F7          # Clear command history
```

## Unix/Linux Specific

### Command Line Editing
```
Alt + .           # Insert last argument of previous command
Ctrl + X + E      # Open command in editor
Ctrl + T          # Transpose characters
Alt + T           # Transpose words
```

### History Expansion
```
!!                # Repeat last command
!$                # Last argument of previous command
!*                # All arguments of previous command
!string           # Last command starting with 'string'
```

## Best Practices
1. Learn shortcuts gradually, starting with the most commonly used
2. Practice regularly to build muscle memory
3. Create custom shortcuts for frequently used commands
4. Use tab completion whenever possible
5. Keep a cheat sheet handy until shortcuts become natural

## Tips for Efficiency
- Master cursor movement shortcuts first
- Learn history navigation for command reuse
- Use completion features to avoid typing full commands
- Combine shortcuts for complex operations

## Related Topics
- [Shell Configuration](./shell-config.md)
- [Command Reference](./commands.md)
- [Command-Line Glossary](./glossary.md)

---

**Navigation**
- Previous: [Command-Line Glossary](./glossary.md)
- Next: [Shell Configuration](../os/windows/shell-config.md)
- [Back to Index](../index.md)