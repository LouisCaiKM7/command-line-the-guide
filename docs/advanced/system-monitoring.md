# System Monitoring

## Introduction
System monitoring is essential for maintaining system health, performance, and security. This guide covers various tools and techniques for monitoring system resources and activities.

## Resource Monitoring

### CPU Usage
```bash
# View CPU information and statistics
top                 # Interactive process viewer
htop                # Enhanced version of top
mpstat 1            # CPU statistics every second
```

### Memory Usage
```bash
free -h             # Display memory usage
vmstat              # Virtual memory statistics
cat /proc/meminfo   # Detailed memory information (Linux)
```

### Disk Usage
```bash
df -h               # Show disk space usage
du -sh *            # Show size of current directory contents
iostat              # I/O statistics
```

## Process Monitoring

### Process Management
```bash
ps aux              # List all processes
ps -ef | grep process_name  # Find specific process
top -u username     # Monitor user's processes
```

### Process Resource Usage
```bash
pgrep process_name  # Get process ID
strace command      # Trace system calls
lsof                # List open files
```

## Log Monitoring

### System Logs
```bash
# Linux
tail -f /var/log/syslog    # Follow system logs
journalctl -f             # Monitor systemd logs
dmesg                     # Kernel ring buffer

# Windows
Get-EventLog -LogName System -Newest 50    # View system logs
```

### Application Logs
```bash
tail -f /var/log/apache2/error.log    # Apache error logs
tail -f /var/log/mysql/error.log      # MySQL error logs
```

## Network Monitoring

### Network Usage
```bash
netstat -tuln       # Active network connections
iftop               # Network bandwidth usage
tcpdump             # Network packet analyzer
```

### Network Statistics
```bash
sar -n DEV 1        # Network interface statistics
nstat               # Network statistics
```

## Performance Analysis

### System Performance
```bash
uptime              # Load average
sar                 # System activity reporter
perf stat command   # Performance statistics
```

### Performance Monitoring Tools
- **Linux:**
  - Nagios
  - Zabbix
  - Prometheus

- **Windows:**
  - Performance Monitor
  - Resource Monitor
  - Task Manager

## Alerting and Notification

### Setting Up Alerts
```bash
# Monitor disk space and send email if usage exceeds 90%
df -h | awk '{print $5}' | grep -v Use% | while read output; do
  usage=${output%?}
  if [ $usage -ge 90 ]; then
    echo "Disk usage alert" | mail -s "High Disk Usage" admin@example.com
  fi
done
```

## Best Practices
- Set up regular monitoring schedules
- Configure appropriate alert thresholds
- Maintain historical performance data
- Document monitoring procedures
- Regular review and adjustment of monitoring parameters
- Implement automated responses for common issues

## Troubleshooting
1. Identify the problem area (CPU, memory, disk, network)
2. Collect relevant metrics and logs
3. Analyze patterns and correlations
4. Implement and verify solutions

## Related Topics
- [System Administration](./system-admin.md)
- [Process Management](./process-management.md)
- [Performance Tuning](../best-practices/performance.md)

---

**Navigation**
- Previous: [Networking Tools](./networking.md)
- Next: [System Administration](./system-admin.md)
- [Back to Index](../index.md)