# Version Control with Git

This guide covers the fundamentals of version control using Git, a distributed version control system that helps track changes in source code during software development.

## Table of Contents

1. [Basic Concepts](#basic-concepts)
2. [Getting Started](#getting-started)
3. [Basic Commands](#basic-commands)
4. [Branching and Merging](#branching-and-merging)
5. [Remote Repositories](#remote-repositories)
6. [Advanced Topics](#advanced-topics)

## Basic Concepts

### What is Version Control?
Version control is a system that records changes to files over time, allowing you to:
- Track project history
- Collaborate with others
- Revert to previous versions
- Work on different features simultaneously

### Git Architecture
- Working Directory: Where you modify files
- Staging Area (Index): Where you prepare changes for commit
- Repository: Where Git stores the complete history

## Getting Started

### Installation and Configuration
```bash
# Install Git (varies by operating system)
sudo apt-get install git    # Ubuntu/Debian
brew install git           # macOS with Homebrew

# Configure user information
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Creating a Repository
```bash
# Initialize a new repository
git init

# Clone an existing repository
git clone https://github.com/username/repository.git
```

## Basic Commands

### Tracking Changes
```bash
# Check status of working directory
git status

# Add files to staging area
git add filename           # Add specific file
git add .                  # Add all changes

# Commit changes
git commit -m "Commit message"

# View commit history
git log
git log --oneline         # Compact view
```

### Undoing Changes
```bash
# Discard changes in working directory
git restore filename

# Unstage changes
git restore --staged filename

# Modify last commit
git commit --amend

# Revert a commit
git revert commit-hash
```

## Branching and Merging

### Branch Management
```bash
# Create new branch
git branch branch-name

# Switch to branch
git checkout branch-name
# or
git switch branch-name     # Git 2.23+

# Create and switch in one command
git checkout -b branch-name

# List branches
git branch                # Local branches
git branch -r             # Remote branches
git branch -a             # All branches
```

### Merging
```bash
# Merge branch into current branch
git merge branch-name

# Abort merge in case of conflicts
git merge --abort
```

### Resolving Conflicts
1. Open conflicted files
2. Look for conflict markers (<<<<<<, =======, >>>>>>)
3. Edit files to resolve conflicts
4. Add resolved files
5. Complete the merge with commit

## Remote Repositories

### Managing Remotes
```bash
# Add remote repository
git remote add origin https://github.com/username/repo.git

# View remotes
git remote -v

# Push changes
git push origin branch-name

# Pull changes
git pull origin branch-name
```

### Collaboration Workflow
```bash
# Fetch remote changes
git fetch origin

# Show remote branches
git branch -r

# Track remote branch
git checkout -b local-branch origin/remote-branch
```

## Advanced Topics

### Rebasing
```bash
# Rebase current branch onto another
git rebase base-branch

# Interactive rebase
git rebase -i HEAD~3      # Rebase last 3 commits
```

### Stashing Changes
```bash
# Save working directory changes
git stash

# List stashes
git stash list

# Apply stashed changes
git stash apply

# Remove stash
git stash drop
```

### Tags
```bash
# Create tag
git tag -a v1.0 -m "Version 1.0"

# List tags
git tag

# Push tags to remote
git push origin --tags
```

## Best Practices

1. Write clear commit messages
   - Use present tense ("Add feature" not "Added feature")
   - First line is a summary (50 chars or less)
   - Followed by blank line and detailed description

2. Commit Often
   - Make small, focused commits
   - Each commit should represent one logical change

3. Use Branches
   - Create feature branches for new work
   - Keep main/master branch stable
   - Delete merged branches

4. Pull Before Push
   - Always pull latest changes before pushing
   - Resolve conflicts locally

5. Review Changes
   - Use `git diff` to review changes before commit
   - Use `git log` to review history

## Additional Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [Interactive Git Learning](https://learngitbranching.js.org/)

This guide covers the essentials of Git version control. For related topics, check out the sections on [Command-line Environment](command-line-environment.md) and [Debugging and Profiling](debugging-profiling.md).

---

**Navigation**
- Previous: [Metaprogramming](metaprogramming.md)
- Next: [Shell Configuration](../os/windows/shell-config.md)
- [Back to Index](../index.md)