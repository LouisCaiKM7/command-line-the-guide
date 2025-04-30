# Shell Configuration Guide

## Introduction
Shell configuration is a crucial aspect of command-line usage that allows you to customize your environment, set up aliases, and manage environment variables. This guide covers essential configuration concepts and practices for both Windows and Unix-like systems.

## Shell Types

### Windows Command Prompt (CMD)
- Default Windows command-line interpreter
- Configuration file: `autoexec.bat` (legacy) or System Environment Variables
- Limited customization options compared to Unix shells

### PowerShell
- Modern Windows command-line shell and scripting language
- Profile locations:
  ```powershell
  $PROFILE.CurrentUserCurrentHost  # Current user, current host
  $PROFILE.CurrentUserAllHosts     # Current user, all hosts
  $PROFILE.AllUsersCurrentHost     # All users, current host
  $PROFILE.AllUsersAllHosts       # All users, all hosts
  ```

### Bash (Bourne Again Shell)
- Default shell for many Unix-like systems
- Configuration files:
  - `~/.bashrc`: Interactive non-login shells
  - `~/.bash_profile`: Login shells
  - `~/.bash_aliases`: Alias definitions

### Zsh (Z Shell)
- Extended Bourne shell with additional features
- Configuration files:
  - `~/.zshrc`: Main configuration file
  - `~/.zprofile`: Login shell configuration
  - `~/.zshenv`: Environment variables

## Environment Variables

### Setting Environment Variables

#### Windows
```cmd
# Temporary (CMD)
SET PATH=%PATH%;C:\new\path

# Permanent (PowerShell)
[System.Environment]::SetEnvironmentVariable('PATH', $env:PATH + ';C:\new\path', 'User')
```

#### Unix-like Systems
```bash
# Temporary
export PATH=$PATH:/new/path

# Permanent (add to ~/.bashrc or ~/.zshrc)
export PATH=$PATH:/new/path
```

### Common Environment Variables
- `PATH`: Executable search paths
- `HOME`: User's home directory
- `SHELL`: Default shell path
- `LANG`: System language and locale
- `TERM`: Terminal type

## Shell Customization

### Aliases

#### Windows (PowerShell)
```powershell
# Add to PowerShell profile
Set-Alias -Name ll -Value Get-ChildItem
Function gs { git status }
```

#### Unix-like Systems
```bash
# Add to ~/.bashrc or ~/.zshrc
alias ll='ls -la'
alias gs='git status'
```

### Prompt Customization

#### Windows (PowerShell)
```powershell
function prompt {
    "PS $($executionContext.SessionState.Path.CurrentLocation)$('>' * ($nestedPromptLevel + 1)) "
}
```

#### Unix-like Systems
```bash
# Bash prompt with git branch
export PS1='\u@\h:\w$(git branch 2>/dev/null | grep "^*" | colrm 1 2)\$ '
```

## Shell History

### History Configuration

#### Windows (PowerShell)
```powershell
# Set history size
$MaximumHistoryCount = 1000

# Search history
Get-History | Where-Object {$_.CommandLine -like "*git*"}
```

#### Unix-like Systems
```bash
# Add to ~/.bashrc or ~/.zshrc
HISTSIZE=1000
HISTFILESIZE=2000
HISTCONTROL=ignoredups:ignorespace
```

## Security Considerations
- Keep sensitive information out of shell history
- Use environment variables for secrets
- Set appropriate file permissions for configuration files
- Regularly review and update shell configurations

## Best Practices
1. Keep configurations organized and documented
2. Use version control for configuration files
3. Regularly backup configuration files
4. Test configurations in a safe environment
5. Share configurations across machines securely

## Related Topics
- [Command Reference](../../reference/commands.md)
- [Keyboard Shortcuts](../../reference/shortcuts.md)
- [Command-Line Glossary](../../reference/glossary.md)

---

**Navigation**
- Previous: [Keyboard Shortcuts](../../reference/shortcuts.md)
- Next: [Getting Started](../../fundamentals/getting-started.md)
- [Back to Index](../../index.md)