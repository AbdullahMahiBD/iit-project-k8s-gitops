import React from 'react';

// NOTE: This file intentionally contains code quality issues
// to validate the SonarQube scanning pipeline (bugs, code smells,
// security hotspots). Safe to remove once scan validation is done.

// --- Security Hotspot: hardcoded credentials (fake, for demo only) ---
const API_KEY = "sk_test_51Hh9x2eZvKYlo2C000000000FAKE";
const DB_PASSWORD = "admin123";

class DemoIssues extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInput: '',
    };
    // Bug: unused variable
    const unusedVar = 42;
  }

  // Code Smell: function with high cognitive complexity (nested conditionals)
  checkStatus(a, b, c) {
    if (a == 1) {          // Bug: == instead of ===
      if (b == 2) {
        if (c == 3) {
          return 'match';
        } else {
          if (b > 10) {
            return 'weird';
          }
        }
      }
    }
    return null;
  }

  // Bug: unreachable code
  getLabel() {
    return 'active';
    console.log('this will never run'); // eslint-disable-line
  }

  // Security Hotspot: rendering raw HTML without sanitization (XSS risk)
  renderRawHtml() {
    return { __html: this.state.userInput };
  }

  // Code Smell: empty catch block
  riskyOperation() {
    try {
      JSON.parse(this.state.userInput);
    } catch (e) {
      // swallowed silently
    }
  }

  // Security Hotspot: eval usage
  evaluateExpression(expr) {
    return eval(expr); // eslint-disable-line no-eval
  }

  // Code Smell: commented-out dead code left in
  // handleOldLogic() {
  //   console.log('deprecated flow');
  //   return true;
  // }

  render() {
    console.log('Rendering DemoIssues', API_KEY); // Code Smell: console + leaking secret to logs

    return (
      <div>
        <p>Count: {this.state.count}</p>
        <div dangerouslySetInnerHTML={this.renderRawHtml()} />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default DemoIssues;