# Task Automation

## Introduction
Task automation in the command line environment helps streamline workflows, reduce manual effort, and improve consistency in operations.

## Basic Automation Concepts

### Shell Scripts
```bash
#!/bin/bash
# Simple backup script
BACKUP_DIR="/backup"
SOURCE_DIR="/data"
tar -czf "$BACKUP_DIR/backup-$(date +%Y%m%d).tar.gz" "$SOURCE_DIR"
```

### Scheduled Tasks

#### Cron Jobs (Linux)
```bash
# Run script daily at 2 AM
0 2 * * * /path/to/script.sh

# Run every 15 minutes
*/15 * * * * /path/to/monitor.sh
```

#### Task Scheduler (Windows)
```powershell
# Create scheduled task
New-ScheduledTaskAction -Execute 'powershell.exe' -Argument '/path/to/script.ps1'
New-ScheduledTaskTrigger -Daily -At 2am
```

## Advanced Automation

### Process Automation
```bash
# Monitor and restart service if down
while true; do
    if ! pgrep -x "service_name" > /dev/null; then
        systemctl restart service_name
        echo "Service restarted at $(date)" >> /var/log/service_monitor.log
    fi
    sleep 300
done
```

### File Operations
```bash
# Batch file processing
for file in *.txt; do
    echo "Processing $file..."
    sed -i 's/old/new/g' "$file"
done
```

## Monitoring and Logging

### Log Rotation
```bash
# logrotate configuration
/var/log/custom/*.log {
    daily
    rotate 7
    compress
    delaycompress
    missingok
    notifempty
}
```

### System Monitoring
```bash
# Monitor system resources
while true; do
    date >> /var/log/system_stats.log
    free -h >> /var/log/system_stats.log
    df -h >> /var/log/system_stats.log
    sleep 3600
done
```

## Error Handling

### Basic Error Checking
```bash
#!/bin/bash
set -e  # Exit on error

if ! command -v required_tool &> /dev/null; then
    echo "Error: required_tool is not installed"
    exit 1
fi
```

### Logging and Notifications
```bash
#!/bin/bash
LOG_FILE="/var/log/script.log"

log_message() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >> "$LOG_FILE"
}

if ! some_command; then
    log_message "Error: Command failed"
    mail -s "Script Error" admin@example.com < "$LOG_FILE"
fi
```

## Best Practices

### Script Organization
- Use meaningful variable names
- Add comments and documentation
- Implement proper error handling
- Use functions for reusable code
- Follow consistent formatting

### Security Considerations
- Avoid hardcoding sensitive data
- Use secure permissions
- Validate input data
- Implement logging
- Regular security audits

### Performance Optimization
- Use efficient commands
- Minimize external program calls
- Implement parallel processing when possible
- Regular performance monitoring

## Tools and Frameworks

### Automation Tools
- Ansible
- Puppet
- Chef
- Jenkins
- GitLab CI/CD

### Monitoring Tools
- Nagios
- Zabbix
- Prometheus
- Grafana

## Related Topics
- [Shell Scripting](../os/linux/shell-scripting.md)
- [System Monitoring](../advanced/system-monitoring.md)
- [Security Considerations](./security.md)

---

**Navigation**
- Previous: [Security Best Practices](./security.md)
- Next: [Command Reference](../reference/commands.md)
- [Back to Index](../index.md)