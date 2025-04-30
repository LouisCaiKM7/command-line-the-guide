# System Administration

## Introduction
System administration through the command line interface provides powerful tools for managing and maintaining computer systems and servers.

## User Management

### Creating and Managing Users
```bash
# Add new user (Linux)
useradd -m username
adduser username    # More user-friendly

# Add user (Windows)
net user username password /add
```

### Group Management
```bash
# Create group (Linux)
groupadd groupname

# Add user to group
usermod -aG groupname username
```

## File System Management

### Disk Usage
```bash
df -h               # Show disk space usage
du -sh directory    # Show directory size
```

### File Permissions
```bash
chmod 755 file     # Change file permissions
chown user:group file    # Change file ownership
```

## Service Management

### Systemd Services (Linux)
```bash
systemctl start service-name
systemctl status service-name
systemctl enable service-name    # Start at boot
```

### Windows Services
```powershell
Start-Service servicename
Get-Service servicename
Set-Service -Name servicename -StartupType Automatic
```

## Package Management

### APT (Debian/Ubuntu)
```bash
apt update          # Update package list
apt upgrade         # Upgrade packages
apt install package # Install package
```

### YUM/DNF (RHEL/CentOS)
```bash
yum update
yum install package
dnf update          # For newer versions
```

### Windows Package Management
```powershell
Get-Package         # List installed packages
Install-Package packagename
Find-Package packagename
```

## System Monitoring

### Resource Usage
```bash
top                 # Process viewer
htop                # Enhanced top
ps aux              # Process list
```

### Log Management
```bash
tail -f /var/log/syslog    # View logs in real-time
journalctl -f             # Systemd logs
```

## Backup and Recovery

### Creating Backups
```bash
tar -czvf backup.tar.gz directory/    # Create compressed backup
rsync -av source/ destination/        # Sync directories
```

### System Restore Points (Windows)
```powershell
Checkpoint-Computer -Description "Before Update"
Get-ComputerRestorePoint
```

## Security Management

### Firewall Configuration
```bash
# UFW (Ubuntu)
ufw enable
ufw allow 22/tcp

# Windows Firewall
New-NetFirewallRule -DisplayName "Allow Port 80"
```

### Security Updates
```bash
# Linux
apt update && apt upgrade -y

# Windows
wuauclt /detectnow
```

## Best Practices
- Regularly update systems and applications
- Maintain comprehensive backup strategies
- Monitor system resources and logs
- Document all system changes
- Implement security best practices
- Use automation where possible

## Related Topics
- [System Monitoring](./system-monitoring.md)
- [Security Considerations](../best-practices/security.md)
- [Process Management](./process-management.md)

---

**Navigation**
- Previous: [System Monitoring](./system-monitoring.md)
- Next: [Environment Variables](./environment-variables.md)
- [Back to Index](../index.md)