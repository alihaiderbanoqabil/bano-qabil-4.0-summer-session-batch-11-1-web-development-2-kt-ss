// import React from "react";
import { Component } from "react";
import { Button, Result } from "antd";
import { ReloadOutlined, HomeOutlined } from "@ant-design/icons";

// class ErrorBoundary extends React.Component {
class ErrorBoundary extends Component {
  constructor(props) {
    console.log("ErrorBoundary props:", props);
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
    console.log(this, "this in constructor");
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    console.log("getDerivedStateFromError", error);
    
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details
    console.error("Error caught by ErrorBoundary:", error);
    console.error("Error info:", errorInfo);

    this.setState({
      error: error,
      errorInfo: errorInfo,
    });

    // You can also log the error to an error reporting service here
    // logErrorToService(error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = "/";
  };

  render() {
    console.log(this.state.hasError, "this.state.hasError");
    
    if (this.state.hasError) {
      // Custom error UI based on props
      if (this.props.fallback) {
        return this.props.fallback(this.state.error, this.state.errorInfo);
      }

      // Default error UI using Ant Design
      return (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <Result
            status="error"
            title="Something went wrong"
            subTitle={
              this.props.showDetails && this.state.error
                ? `Error: ${this.state.error.message}`
                : "We're sorry, but something unexpected happened. Please try refreshing the page."
            }
            extra={[
              <Button
                type="primary"
                icon={<ReloadOutlined />}
                onClick={this.handleReload}
                key="reload"
              >
                Reload Page
              </Button>,
              <Button
                icon={<HomeOutlined />}
                onClick={this.handleGoHome}
                key="home"
              >
                Go Home
              </Button>,
            ]}
          >
            {this.props.showDetails && this.state.errorInfo && (
              <details
                style={{
                  marginTop: "20px",
                  textAlign: "left",
                  background: "#f5f5f5",
                  padding: "10px",
                  borderRadius: "4px",
                  maxWidth: "600px",
                }}
              >
                <summary>Error Details (for developers)</summary>
                <pre
                  style={{
                    fontSize: "12px",
                    overflow: "auto",
                    marginTop: "10px",
                  }}
                >
                  {this.state.error && this.state.error.stack}
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </Result>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

// const obj1 = new ErrorBoundary({ showDetails: true });
// const obj2 = new ErrorBoundary({ showDetails: true });
// console.log(obj1, "obj1 of ErrorBoundary");
// console.log(obj2, "obj2 of ErrorBoundary");
