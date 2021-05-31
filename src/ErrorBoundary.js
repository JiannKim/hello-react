import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    error: false,
  };
  componentDidCatch(err, info) {
    this.setState({
      error: true,
    });
    console.log({ err, info });
  }
  render() {
    if (this.state.error) return <div>에러 발생!</div>;
    return this.props.children;
  }
}

export default ErrorBoundary;
