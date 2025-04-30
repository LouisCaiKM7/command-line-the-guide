# Command Line Syntax

This guide explains how to properly structure and use commands in the command line interface.

## Basic Command Structure

Commands follow a consistent pattern:
```bash
command [options] [arguments]
```

### Components

1. **Command**: The program or action to execute
2. **Options**: Flags that modify the command's behavior
3. **Arguments**: The target or data the command acts upon

## Command Options (Flags)

### Short Options
```bash
ls -l    # Single letter option
ls -la   # Multiple combined options
```

### Long Options
```bash
ls --all           # Full word option
git --version      # Show version information
```

## Working with Arguments

### Single Argument
```bash
cd Documents       # Change to Documents directory
cat file.txt       # Display contents of file.txt
```

### Multiple Arguments
```bash
cp file1.txt file2.txt    # Copy file1 to file2
mv doc1.txt doc2.txt dir/  # Move two files to directory
```

## Special Characters

### Wildcards
- `*`: Match any number of characters
- `?`: Match single character
- `[]`: Match any character within brackets

Examples:
```bash
ls *.txt          # List all .txt files
rm test?.txt      # Remove test1.txt, test2.txt, etc.
ls [abc]*.txt     # List files starting with a, b, or c
```

### Quotes

#### Single Quotes (')
- Preserve literal meaning of all characters
```bash
echo 'Hello $USER'    # Prints: Hello $USER
```

#### Double Quotes (")
- Allow variable expansion
```bash
echo "Hello $USER"    # Prints: Hello username
```

## Command Chaining

### Sequential Execution
```bash
command1 ; command2    # Run command1 then command2
```

### Conditional Execution
```bash
command1 && command2   # Run command2 only if command1 succeeds
command1 || command2   # Run command2 only if command1 fails
```

### Piping
```bash
command1 | command2    # Send output of command1 to command2
```

## Command Substitution

### Capturing Command Output
```bash
files=$(ls)           # Store ls output in variable
echo "Files: $files"  # Display the variable
```

## Error Handling

### Redirecting Error Output
```bash
command 2> error.log   # Send errors to file
command 2>/dev/null    # Discard errors
```

### Combining Output Streams
```bash
command > output.log 2>&1  # Send both output and errors to file
```

## Next Steps

Now that you understand command syntax, you can:
- Explore [File System Navigation](../advanced/file-system.md)
- Learn about [Text Processing](../advanced/text-processing.md)
- Study [Shell Scripting](../os/linux/shell-scripting.md)

## Related Topics

- [Basic Concepts](./basic-concepts.md)
- [Command Line Tips](../best-practices/tips.md)
- [Common Commands Reference](../reference/commands.md)

---

**Navigation**
- Previous: [Basic Concepts](./basic-concepts.md)
- Next: [File System Navigation](../advanced/file-system.md)
- [Back to Index](../index.md)