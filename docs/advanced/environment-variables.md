# Environment Variables

## Understanding Environment Variables

### What are Environment Variables?
- System-wide or user-specific configuration settings
- Key-value pairs that affect program behavior
- Used by operating system and applications

## Viewing Environment Variables

### List All Variables
```bash
# Windows
set
Get-ChildItem Env:    # PowerShell

# Unix-like
env
printenv
```

### View Specific Variable
```bash
# Windows
echo %PATH%
$Env:PATH    # PowerShell

# Unix-like
echo $PATH
```

## Managing Environment Variables

### Temporary Variables

#### Setting Variables
```bash
# Windows CMD
set TEMP_VAR=value

# PowerShell
$Env:TEMP_VAR = "value"

# Unix-like
export TEMP_VAR=value
```

#### Removing Variables
```bash
# Windows CMD
set TEMP_VAR=

# PowerShell
Remove-Item Env:TEMP_VAR

# Unix-like
unset TEMP_VAR
```

### Persistent Variables

#### Windows
```powershell
# System-wide (requires admin)
setx VARIABLE_NAME "value" /M

# User-specific
setx VARIABLE_NAME "value"
```

#### Unix-like
```bash
# Add to ~/.bashrc or ~/.profile
export VARIABLE_NAME=value
```

## Common Environment Variables

### System Path
- `PATH`: Executable search locations
- `TEMP`/`TMP`: Temporary file location
- `HOME`/`USERPROFILE`: User's home directory

### Programming
- `JAVA_HOME`: Java installation directory
- `PYTHON_PATH`: Python module search path
- `NODE_PATH`: Node.js module search path

## Path Management

### Adding to Path
```bash
# Windows PowerShell
$Env:Path += ";C:\new\path"

# Unix-like
export PATH="$PATH:/new/path"
```

### Best Practices
1. **Organization**
   - Keep paths organized and minimal
   - Remove obsolete entries
   - Use appropriate scope (user vs system)

2. **Security**
   - Validate new path entries
   - Avoid duplicate entries
   - Be cautious with system-wide changes

3. **Maintenance**
   - Document custom variables
   - Regular cleanup of unused variables
   - Backup before major changes

## Troubleshooting

### Common Issues
1. **Path Problems**
   - Check variable case sensitivity
   - Verify path separators
   - Ensure paths exist

2. **Variable Conflicts**
   - Check for naming conflicts
   - Verify variable scope
   - Test in new session

### Debug Tips
- Use echo/print commands to verify values
- Check variable persistence across sessions
- Validate changes in different shells

## Related Topics

- [Command Syntax](../fundamentals/command-syntax.md)
- [Shell Configuration](../os/shell-config.md)
- [System Administration](../advanced/system-admin.md)

---

**Navigation**
- Previous: [System Administration](./system-admin.md)
- Next: [Shell Scripting](../os/linux/shell-scripting.md)
- [Back to Index](../index.md)