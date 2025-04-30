# Metaprogramming: Build Systems, Testing, and CI

This guide covers essential aspects of modern software development infrastructure, including build systems, dependency management, testing frameworks, and continuous integration practices.

## Table of Contents

1. [Build Systems](#build-systems)
2. [Dependency Management](#dependency-management)
3. [Testing Frameworks](#testing-frameworks)
4. [Continuous Integration](#continuous-integration)
5. [Best Practices](#best-practices)

## Build Systems

### Make
Traditional build automation tool:
```makefile
# Basic Makefile example
CC=gcc
CFLAGS=-Wall

all: program

program: main.o utils.o
	$(CC) $(CFLAGS) -o program main.o utils.o

clean:
	rm -f *.o program
```

### CMake
Cross-platform build system:
```cmake
# CMakeLists.txt example
cmake_minimum_required(VERSION 3.10)
project(MyProject)

add_executable(program main.cpp utils.cpp)
target_link_libraries(program external_lib)
```

### Gradle
Modern build automation:
```groovy
// build.gradle example
plugins {
    id 'java'
}

repositories {
    mavenCentral()
}

dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-web'
    testImplementation 'junit:junit:4.13'
}
```

## Dependency Management

### Package Managers

#### NPM (Node.js)
```json
{
  "name": "my-project",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.17.1",
    "lodash": "^4.17.21"
  },
  "devDependencies": {
    "jest": "^27.0.6"
  }
}
```

#### Pip (Python)
```txt
# requirements.txt
requests==2.26.0
django>=3.2.0
pytest~=6.2.5
```

#### Maven (Java)
```xml
<!-- pom.xml -->
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
        <version>2.5.0</version>
    </dependency>
</dependencies>
```

## Testing Frameworks

### Unit Testing

#### Python (pytest)
```python
import pytest

def test_addition():
    assert 1 + 1 == 2

def test_string_length():
    assert len("hello") == 5

@pytest.fixture
def sample_data():
    return {"key": "value"}

def test_with_fixture(sample_data):
    assert sample_data["key"] == "value"
```

#### JavaScript (Jest)
```javascript
describe('Calculator', () => {
  test('addition works', () => {
    expect(1 + 1).toBe(2);
  });

  test('string operations', () => {
    expect('hello').toHaveLength(5);
  });
});
```

### Integration Testing
```python
# Example using pytest for API testing
def test_api_endpoint(client):
    response = client.get('/api/data')
    assert response.status_code == 200
    assert 'data' in response.json()
```

### End-to-End Testing
```javascript
// Example using Cypress
describe('Login Flow', () => {
  it('should login successfully', () => {
    cy.visit('/login');
    cy.get('#username').type('user@example.com');
    cy.get('#password').type('password123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  });
});
```

## Continuous Integration

### GitHub Actions
```yaml
# .github/workflows/ci.yml
name: CI

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Set up Python
      uses: actions/setup-python@v2
      with:
        python-version: '3.9'
    
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install -r requirements.txt
    
    - name: Run tests
      run: pytest
```

### Jenkins Pipeline
```groovy
// Jenkinsfile
pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        
        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                sh 'npm run deploy'
            }
        }
    }
}
```

## Best Practices

### Build System Best Practices
1. Keep build scripts modular and maintainable
2. Use incremental builds when possible
3. Implement proper dependency management
4. Document build requirements and steps
5. Include clean targets for build artifacts

### Testing Best Practices
1. Follow the testing pyramid
   - Many unit tests
   - Fewer integration tests
   - Minimal end-to-end tests
2. Write tests before code (TDD)
3. Keep tests independent
4. Use meaningful test names
5. Mock external dependencies

### CI/CD Best Practices
1. Automate everything possible
2. Use version control for configuration
3. Implement proper error handling
4. Monitor build and test metrics
5. Maintain security in pipelines

## Additional Resources

- [Make Documentation](https://www.gnu.org/software/make/manual/)
- [CMake Tutorial](https://cmake.org/cmake/help/latest/guide/tutorial/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

This guide covers the fundamentals of metaprogramming and build systems. For related topics, check out the sections on [Debugging and Profiling](debugging-profiling.md) and [Security and Cryptography](security-cryptography.md).

---

**Navigation**
- Previous: [Debugging and Profiling](debugging-profiling.md)
- Next: [Version Control](version-control.md)
- [Back to Index](../index.md)