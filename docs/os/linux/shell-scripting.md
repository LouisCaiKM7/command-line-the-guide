# Shell Scripting

## Introduction
Shell scripting is a powerful way to automate tasks and create complex command-line programs. This guide covers shell scripting fundamentals and advanced techniques.

## Basic Concepts

### First Script
```bash
#!/bin/bash
# My first script
echo "Hello, World!"
```

### Variables
```bash
# Variable declaration and usage
NAME="John"
echo "Hello, $NAME"

# Command substitution
DATE=$(date +%Y-%m-%d)
echo "Today is $DATE"
```

### Input and Output
```bash
# Read user input
read -p "Enter your name: " USER_NAME
echo "Hello, $USER_NAME"

# Output redirection
echo "Log entry" >> logfile.txt
```

## Control Structures

### Conditionals
```bash
# If statement
if [ "$1" = "--help" ]; then
    echo "Usage: $0 [options]"
    exit 0
fi

# Case statement
case "$1" in
    start)
        echo "Starting service"
        ;;
    stop)
        echo "Stopping service"
        ;;
    *)
        echo "Unknown command"
        ;;
esac
```

### Loops
```bash
# For loop
for i in {1..5}; do
    echo "Number: $i"
done

# While loop
while read line; do
    echo "Processing: $line"
done < input.txt
```

## Functions

### Basic Functions
```bash
# Function definition
greet() {
    echo "Hello, $1!"
}

# Function call
greet "World"
```

### Advanced Functions
```bash
# Function with return value
check_status() {
    if [ -f "$1" ]; then
        return 0
    else
        return 1
    fi
}

# Using function return value
if check_status "file.txt"; then
    echo "File exists"
fi
```

## Arrays and Strings

### Array Operations
```bash
# Array declaration
FRUITS=("apple" "banana" "orange")

# Array iteration
for fruit in "${FRUITS[@]}"; do
    echo "$fruit"
done
```

### String Manipulation
```bash
# String operations
STR="Hello, World!"
echo "${#STR}"          # Length
echo "${STR:0:5}"       # Substring
echo "${STR/World/User}" # Replace
```

## Error Handling

### Basic Error Handling
```bash
# Exit on error
set -e

# Error function
error() {
    echo "Error: $1" >&2
    exit 1
}

# Usage
[ -f "config.txt" ] || error "Config file not found"
```

### Debugging
```bash
# Enable debugging
set -x

# Debug specific section
{
    set -x
    # debugging section
    set +x
}
```

## Advanced Topics

### Signal Handling
```bash
# Trap signals
trap 'echo "Caught SIGINT"; exit 1' INT
trap 'cleanup' EXIT

cleanup() {
    echo "Cleaning up..."
    # cleanup code
}
```

### Process Management
```bash
# Background processes
start_service() {
    while true; do
        echo "Service running"
        sleep 1
    done &
    echo $! > service.pid
}
```

## Best Practices

### Code Style
- Use meaningful variable names
- Add comments for complex logic
- Follow consistent indentation
- Use functions for reusable code

### Security
- Validate user input
- Quote variables properly
- Use restricted permissions
- Avoid running as root

### Performance
- Minimize external commands
- Use built-in commands when possible
- Consider using arrays instead of loops
- Profile scripts for optimization

## Related Topics
- [Command Syntax](../../fundamentals/command-syntax.md)
- [Automation](../../best-practices/automation.md)
- [Security Best Practices](../../best-practices/security.md)

---

**Navigation**
- Previous: [Environment Variables](../../advanced/environment-variables.md)
- Next: [Command Line Tips](../../best-practices/tips.md)
- [Back to Index](../../index.md)