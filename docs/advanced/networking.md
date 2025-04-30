# Networking Tools and Commands

## Introduction
Networking tools in the command line provide powerful capabilities for network configuration, monitoring, and troubleshooting.

## Basic Networking Commands

### ping
Test connectivity to a remote host:
```bash
ping example.com
ping -c 4 192.168.1.1  # Send only 4 packets
```

### traceroute/tracert
Trace the route packets take to a destination:
```bash
traceroute example.com     # Linux/Unix
tracert example.com        # Windows
```

### netstat
Display network connections and statistics:
```bash
netstat -a    # Show all connections
netstat -n    # Show numerical addresses
netstat -t    # Show TCP connections
```

### ifconfig/ipconfig
View and configure network interfaces:
```bash
ifconfig                   # Linux/Unix
ipconfig /all              # Windows
```

## Network Configuration

### IP Address Management
```bash
# Set IP address (Linux)
ifconfig eth0 192.168.1.100 netmask 255.255.255.0

# Set IP address (Windows)
netsh interface ip set address "Local Area Connection" static 192.168.1.100 255.255.255.0
```

### DNS Configuration
```bash
# View DNS servers
cat /etc/resolv.conf       # Linux/Unix
ipconfig /displaydns       # Windows
```

## Advanced Tools

### curl
Transfer data from or to a server:
```bash
curl -O http://example.com/file.txt    # Download file
curl -I http://example.com             # Get headers only
```

### wget
Download files from the web:
```bash
wget http://example.com/file.txt
wget -r -np http://example.com/        # Download recursively
```

### ssh
Secure shell for remote access:
```bash
ssh username@hostname
ssh -p 2222 username@hostname          # Specify port
```

### nmap
Network exploration and security scanning:
```bash
nmap 192.168.1.0/24                    # Scan network
nmap -p 80,443 example.com             # Scan specific ports
```

## Troubleshooting

### Network Connectivity Issues
1. Check physical connections
2. Verify IP configuration
3. Test DNS resolution
4. Check firewall settings

### Common Problems and Solutions
- **No Internet Access**
  - Check IP configuration
  - Verify DNS settings
  - Test gateway connectivity

- **Slow Connection**
  - Monitor bandwidth usage
  - Check for network congestion
  - Verify DNS performance

## Best Practices
- Regularly monitor network performance
- Document network configurations
- Maintain security protocols
- Keep tools updated

## Related Topics
- [System Administration](./system-admin.md)
- [Security Considerations](../best-practices/security.md)
- [Process Management](./process-management.md)

---

**Navigation**
- Previous: [Process Management](./process-management.md)
- Next: [System Monitoring](./system-monitoring.md)
- [Back to Index](../index.md)