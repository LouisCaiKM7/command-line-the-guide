# Security Best Practices

## Introduction
Security in the command line environment is crucial for protecting systems and data from unauthorized access and malicious activities.

## User Access Control

### Password Management
```bash
# Change user password
passwd username

# Set password policies (Linux)
chage -M 90 username  # Maximum password age
chage -m 7 username   # Minimum password age
```

### File Permissions
```bash
# Set secure file permissions
chmod 600 sensitive_file    # Owner read/write only
chmod 750 scripts/         # Group executable
chown root:admin file      # Change ownership
```

## System Hardening

### Network Security
```bash
# Configure firewall (Linux)
ufw default deny incoming
ufw allow ssh
ufw enable

# Check open ports
netstat -tuln
lsof -i
```

### Service Management
```bash
# Disable unnecessary services
systemctl disable service_name
systemctl mask service_name

# Check running services
systemctl list-units --type=service
```

## Monitoring and Auditing

### System Logs
```bash
# Monitor authentication attempts
tail -f /var/log/auth.log

# Check system logs
journalctl -f
```

### File System Monitoring
```bash
# Monitor file changes
auditctl -w /etc/passwd -p wa
auditctl -w /etc/shadow -p wa
```

## Encryption

### File Encryption
```bash
# Encrypt file with GPG
gpg -c sensitive_file.txt

# Create encrypted archive
tar -czf - directory | gpg -c > backup.tar.gz.gpg
```

### SSH Security
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "user@example.com"

# Configure SSH hardening
# /etc/ssh/sshd_config
PermitRootLogin no
PasswordAuthentication no
MaxAuthTries 3
```

## Best Practices

### Command Line Safety
- Always verify commands before execution
- Use quotes around file names
- Be cautious with wildcards
- Avoid running commands as root unless necessary

### Script Security
```bash
# Set secure permissions for scripts
chmod 700 script.sh

# Use restricted path
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin

# Validate input
if [[ ! "$input" =~ ^[0-9]+$ ]]; then
    echo "Invalid input"
    exit 1
fi
```

### Environment Security
- Use environment variables for sensitive data
- Clear command history when needed
- Set appropriate umask values
- Regular security updates

## Security Tools

### System Scanning
```bash
# Scan for vulnerabilities
nmap -sV --script vuln hostname

# Check file integrity
tripwire --check
```

### Access Monitoring
```bash
# Monitor user activities
w
who
last

# Check login attempts
fail2ban-client status
```

## Incident Response

### Basic Steps
1. Identify the breach
2. Isolate affected systems
3. Collect evidence
4. Remove threats
5. Restore systems
6. Document incidents

### Recovery Procedures
```bash
# Backup critical data
rsync -avz --delete /source/ /backup/

# System restore
timeshift --create
timeshift --restore
```

## Regular Maintenance

### Security Updates
```bash
# Update system packages
apt update && apt upgrade -y

# Check for security updates
apt list --upgradable
```

### Audit System
- Regular security audits
- Review system logs
- Check user permissions
- Monitor system resources
- Update security policies

## Related Topics
- [System Administration](../advanced/system-admin.md)
- [System Monitoring](../advanced/system-monitoring.md)
- [Automation](./automation.md)

---

**Navigation**
- Previous: [Command Line Tips](./tips.md)
- Next: [Task Automation](./automation.md)
- [Back to Index](../index.md)