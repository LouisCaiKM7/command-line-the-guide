# Process Management

## Understanding Processes

### What is a Process?
- A running instance of a program
- Has its own memory space and resources
- Identified by a unique Process ID (PID)

## Viewing Processes

### List Running Processes
```bash
# Windows
tasklist
Get-Process    # PowerShell

# Unix-like
ps aux
top
```

### Process Details
```bash
# Windows
tasklist /v    # Verbose output
Get-Process | Format-List *    # PowerShell detailed view

# Unix-like
ps -ef
htop    # Interactive process viewer
```

## Managing Processes

### Starting Programs
```bash
# Windows
start program.exe
Start-Process program.exe    # PowerShell

# Unix-like
./program
program &    # Run in background
```

### Terminating Processes
```bash
# Windows
taskkill /PID process_id
Stop-Process -Id process_id    # PowerShell

# Unix-like
kill process_id
kill -9 process_id    # Force kill
```

### Process Priority
```bash
# Windows
wmic process where name='program.exe' CALL setpriority 128

# Unix-like
nice -n 10 ./program    # Start with priority
renice 10 -p process_id # Change priority
```

## Background Jobs

### Running in Background
```bash
# Windows PowerShell
Start-Job -ScriptBlock { ./long-task.ps1 }

# Unix-like
./long-task.sh &
nohup ./long-task.sh &    # Immune to hangups
```

### Job Management
```bash
# Windows PowerShell
Get-Job        # List jobs
Receive-Job    # Get job output
Stop-Job       # Stop job

# Unix-like
jobs           # List jobs
fg %1          # Bring job to foreground
bg %1          # Continue job in background
```

## Resource Monitoring

### CPU Usage
```bash
# Windows
wmic cpu get loadpercentage
Get-Counter '\Processor(_Total)\% Processor Time'    # PowerShell

# Unix-like
top
mpstat
```

### Memory Usage
```bash
# Windows
wmic OS get FreePhysicalMemory,TotalVisibleMemorySize

# Unix-like
free -h
vm_stat    # macOS
```

## Best Practices

1. **Resource Management**
   - Monitor system resources regularly
   - Close unused applications
   - Be cautious with background processes

2. **Process Priority**
   - Use appropriate priority levels
   - Avoid running too many high-priority processes
   - Consider system impact

3. **Security**
   - Only run trusted programs
   - Be careful with elevated privileges
   - Monitor suspicious processes

## Troubleshooting

### Common Issues
1. **High CPU Usage**
   - Identify resource-intensive processes
   - Check for malware
   - Update or repair problematic software

2. **Memory Leaks**
   - Monitor memory usage trends
   - Restart problematic applications
   - Update software if needed

3. **Frozen Programs**
   - Wait for response
   - Try normal termination first
   - Use force kill as last resort

## Related Topics

- [Command Syntax](../fundamentals/command-syntax.md)
- [System Monitoring](./system-monitoring.md)
- [Task Automation](../advanced/task-automation.md)

---

**Navigation**
- Previous: [Text Processing](./text-processing.md)
- Next: [Networking Tools](./networking.md)
- [Back to Index](../index.md)