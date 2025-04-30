# Data Wrangling

Data wrangling is the process of transforming and mapping data from one format into another with the goal of making it more appropriate and valuable for a variety of downstream purposes such as analytics. This guide will introduce you to essential command-line tools and techniques for effective data manipulation.

## Table of Contents

1. [Text Processing Basics](#text-processing-basics)
2. [Advanced Text Processing](#advanced-text-processing)
3. [Data Formats and Conversion](#data-formats-and-conversion)
4. [Regular Expressions](#regular-expressions)
5. [Practical Examples](#practical-examples)

## Text Processing Basics

### Common Text Processing Commands

#### cat
Display file contents:
```bash
cat file.txt
```

#### head and tail
View the beginning or end of files:
```bash
head -n 5 file.txt    # Show first 5 lines
tail -n 10 file.txt   # Show last 10 lines
```

#### sort
Sort lines of text files:
```bash
sort file.txt                # Sort alphabetically
sort -n numbers.txt         # Sort numerically
sort -r file.txt            # Sort in reverse
```

#### uniq
Report or omit repeated lines:
```bash
uniq -c file.txt            # Count occurrences
uniq -d file.txt            # Show only duplicates
```

## Advanced Text Processing

### sed (Stream Editor)
Text transformation tool:
```bash
sed 's/old/new/' file.txt   # Replace first occurrence
sed 's/old/new/g' file.txt  # Replace all occurrences
```

### awk
Powerful text processing language:
```bash
awk '{print $1}' file.txt   # Print first column
awk -F',' '{print $2}' data.csv  # Use comma as delimiter
```

### cut
Extract sections from lines:
```bash
cut -d',' -f1,3 data.csv    # Extract columns 1 and 3
cut -c1-10 file.txt         # Extract first 10 characters
```

## Data Formats and Conversion

### CSV Processing
```bash
# Convert CSV to TSV
cat data.csv | sed 's/,/\t/g' > data.tsv

# Extract specific columns
cut -d',' -f1,3,5 data.csv > extracted.csv
```

### JSON Processing with jq
```bash
# Pretty print JSON
jq '.' data.json

# Extract specific fields
jq '.items[] | {name: .name, price: .price}' data.json
```

### XML Processing
```bash
# Using xmllint to format XML
xmllint --format file.xml

# Extract values using xpath
xmllint --xpath "//book/title/text()" books.xml
```

## Regular Expressions

### Basic Patterns
- `^` - Start of line
- `$` - End of line
- `.` - Any single character
- `*` - Zero or more occurrences
- `+` - One or more occurrences
- `?` - Zero or one occurrence
- `[]` - Character class
- `()` - Grouping

### Practical Regex Examples
```bash
# Find email addresses
grep -E '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}' file.txt

# Find URLs
grep -E 'https?://[^\s]+' file.txt

# Find IP addresses
grep -E '^([0-9]{1,3}\.){3}[0-9]{1,3}$' file.txt
```

## Practical Examples

### Log File Analysis
```bash
# Count HTTP status codes in an access log
awk '{print $9}' access.log | sort | uniq -c

# Find top 10 IP addresses
awk '{print $1}' access.log | sort | uniq -c | sort -nr | head -n 10
```

### Data Cleaning
```bash
# Remove empty lines
sed '/^$/d' file.txt

# Remove duplicate lines while preserving order
awk '!seen[$0]++' file.txt

# Convert to lowercase
tr '[:upper:]' '[:lower:]' < file.txt
```

### Combining Multiple Tools
```bash
# Complex data processing pipeline
cat data.txt | \
  grep -v '^#' | \
  cut -d',' -f2,4 | \
  sort | \
  uniq -c | \
  sort -nr > results.txt
```

## Tips and Best Practices

1. Always make backups before processing data
2. Test commands on a small subset of data first
3. Use version control for your scripts
4. Document your data processing workflows
5. Consider performance for large datasets

## Additional Resources

- [GNU Coreutils Documentation](https://www.gnu.org/software/coreutils/manual/)
- [Regular Expression Testing Tools](https://regex101.com/)
- [AWK Programming Language](https://www.gnu.org/software/gawk/manual/)
- [Sed Manual](https://www.gnu.org/software/sed/manual/)

This guide covers the basics of data wrangling using command-line tools. For more advanced topics, check out the sections on [Command-line Environment](command-line-environment.md) and [Version Control](version-control.md).

---

**Navigation**
- Next: [Command-line Environment](command-line-environment.md)
- [Back to Index](../index.md)