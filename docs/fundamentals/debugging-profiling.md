# Debugging and Profiling

This guide covers essential techniques and tools for debugging programs and profiling their performance. We'll explore various approaches to find and fix bugs, analyze program behavior, and optimize performance.

## Table of Contents

1. [Debugging Basics](#debugging-basics)
2. [Debugging Tools](#debugging-tools)
3. [Logging and Monitoring](#logging-and-monitoring)
4. [Profiling Techniques](#profiling-techniques)
5. [Performance Optimization](#performance-optimization)

## Debugging Basics

### Print Debugging
```python
# Basic print debugging
print(f"Debug: variable = {variable}")

# Using logging module (Python)
import logging
logging.debug(f"Debug: variable = {variable}")
```

### Interactive Debuggers
```bash
# Python debugger (pdb)
python -m pdb script.py

# Node.js debugger
node inspect script.js

# GDB (GNU Debugger)
gdb ./program
```

### Common Debugger Commands
- `break` or `b`: Set breakpoint
- `continue` or `c`: Continue execution
- `step` or `s`: Step into function
- `next` or `n`: Step over
- `print` or `p`: Print variable value
- `backtrace` or `bt`: Show call stack

## Debugging Tools

### System Tools
```bash
# Process monitoring
ps aux | grep process_name

# System calls tracing
strace ./program

# File system monitoring
lsof -p process_id
```

### Memory Debugging
```bash
# Valgrind for memory leaks
valgrind --leak-check=full ./program

# Address Sanitizer (ASAN)
clang -fsanitize=address program.c
```

### Network Debugging
```bash
# Network traffic monitoring
tcpdump -i any port 80

# HTTP traffic inspection
wireshark

# Simple HTTP server for testing
python -m http.server 8000
```

## Logging and Monitoring

### Logging Best Practices
```python
# Python logging configuration
import logging

logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    filename='app.log'
)

# Log levels
logging.debug("Detailed information")
logging.info("General information")
logging.warning("Warning messages")
logging.error("Error messages")
logging.critical("Critical errors")
```

### System Monitoring
```bash
# System resource monitoring
top
htop

# Disk usage
df -h
du -sh *

# Memory statistics
free -m
vmstat
```

## Profiling Techniques

### CPU Profiling
```bash
# Python profiler
python -m cProfile script.py

# Node.js profiling
node --prof script.js

# Linux perf tool
perf record ./program
perf report
```

### Memory Profiling
```python
# Python memory profiler
from memory_profiler import profile

@profile
def memory_intensive_function():
    # Function code here
    pass
```

### Time Profiling
```bash
# Basic timing
time command

# More detailed timing
/usr/bin/time -v command
```

## Performance Optimization

### Code Optimization
1. Algorithmic Improvements
   - Choose appropriate data structures
   - Optimize loops and conditions
   - Reduce complexity (O(n²) → O(n log n))

2. Memory Optimization
   - Minimize memory allocations
   - Use appropriate data types
   - Implement caching when appropriate

### System Optimization
```bash
# Disk I/O performance
iostat

# Network performance
netstat -s

# CPU performance
mpstat
```

### Benchmarking
```python
# Python timeit module
import timeit

time_taken = timeit.timeit('function_to_test()', number=1000)
```

## Best Practices

1. Debugging Strategy
   - Reproduce the bug consistently
   - Isolate the problem
   - Test assumptions
   - Document findings

2. Profiling Strategy
   - Profile before optimizing
   - Focus on hot spots
   - Measure impact of changes
   - Document performance requirements

3. Testing
   - Write unit tests
   - Use continuous integration
   - Implement regression tests
   - Automate testing process

## Additional Resources

- [GDB Documentation](https://sourceware.org/gdb/documentation/)
- [Python Debugging Guide](https://docs.python.org/3/library/pdb.html)
- [Valgrind Manual](https://valgrind.org/docs/)
- [Linux Performance Tools](http://www.brendangregg.com/linuxperf.html)

This guide covers the fundamentals of debugging and profiling. For related topics, check out the sections on [Command-line Environment](command-line-environment.md) and [Build Systems](build-systems.md).

---

**Navigation**
- Previous: [Command-line Environment](command-line-environment.md)
- Next: [Metaprogramming](metaprogramming.md)
- [Back to Index](../index.md)