'use client'
import React from "react";

export class ErrorComponent extends React.Component {
  state = {
    hasError: false,
    message: '',
  }

  componentDidCatch(error) {
    this.setState({
      hasError: true,
      message: error.message,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <p style={{ color: yellow }}>
          ksdjfklsdjflsdkfj
        </p >

      );

    }
    return this.props.children;
  }
}