# File System Navigation and Management

## Directory Structure

### Root Directory
- Windows: `C:\`, `D:\`, etc.
- Unix-like: `/`

### Common Directories
- Windows:
  - `C:\Users\username`
  - `C:\Program Files`
  - `C:\Windows`
- Unix-like:
  - `/home/username`
  - `/usr/bin`
  - `/etc`

## Basic Navigation Commands

### Viewing Current Directory
```bash
# Windows
cd
pwd    # If using PowerShell

# Unix-like
pwd
```

### Changing Directories
```bash
# Move to specific directory
cd path/to/directory

# Move up one level
cd ..

# Move to home directory
cd ~    # Unix-like and PowerShell
cd %USERPROFILE%    # Windows CMD
```

### Listing Directory Contents
```bash
# Basic listing
ls    # Unix-like and PowerShell
dir   # Windows CMD

# Detailed listing
ls -l    # Unix-like
Get-ChildItem    # PowerShell
```

## File Operations

### Creating
```bash
# Create empty file
touch file.txt    # Unix-like
echo. > file.txt  # Windows

# Create directory
mkdir directory_name
```

### Copying
```bash
# Copy file
cp source.txt destination.txt
copy source.txt destination.txt    # Windows CMD

# Copy directory
cp -r source_dir destination_dir    # Unix-like
xcopy source_dir destination_dir    # Windows CMD
```

### Moving/Renaming
```bash
# Move file or directory
mv source destination
move source destination    # Windows CMD

# Rename file or directory
mv oldname newname
ren oldname newname    # Windows CMD
```

### Deleting
```bash
# Remove file
rm file.txt
del file.txt    # Windows CMD

# Remove directory
rm -r directory    # Unix-like
rmdir /s directory    # Windows CMD
```

## File Permissions

### Unix-like Systems
```bash
# View permissions
ls -l

# Change permissions
chmod 755 file.txt

# Change ownership
chown user:group file.txt
```

### Windows Systems
```powershell
# View permissions
icacls file.txt

# Change permissions
icacls file.txt /grant "username:(R,W)"
```

## Advanced Operations

### Finding Files
```bash
# Search by name
find . -name "*.txt"    # Unix-like
dir /s /b *.txt         # Windows CMD

# Search by content
grep -r "text" .        # Unix-like
findstr /s /i "text" *  # Windows CMD
```

### Disk Usage
```bash
# Check directory size
du -sh directory    # Unix-like
dir /s directory    # Windows CMD

# Check disk space
df -h               # Unix-like
wmic logicaldisk    # Windows CMD
```

## Best Practices

1. **Organization**
   - Use meaningful directory names
   - Maintain a consistent structure
   - Keep related files together

2. **Backup**
   - Regularly backup important files
   - Use version control for code
   - Store backups in different locations

3. **Security**
   - Set appropriate permissions
   - Avoid sharing sensitive files
   - Use encryption when necessary

## Related Topics

- [Command Syntax](../fundamentals/command-syntax.md)
- [Text Processing](./text-processing.md)
- [Shell Scripting](../os/linux/shell-scripting.md)