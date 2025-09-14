import React from 'react';
import { Button, Result, Spin } from 'antd';
import { ReloadOutlined, HomeOutlined } from '@ant-design/icons';

// Specialized error boundary for Suspense and lazy loading errors
class SuspenseErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null,
      isRetrying: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Suspense/Lazy loading error:', error);
    console.error('Error info:', errorInfo);
    
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  handleRetry = () => {
    this.setState({ isRetrying: true });
    
    // Give a brief moment for the retry state to show
    setTimeout(() => {
      this.setState({ 
        hasError: false, 
        error: null, 
        errorInfo: null,
        isRetrying: false 
      });
    }, 500);
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.isRetrying) {
      return (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: '200px',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <Spin size="large" />
          <p>Retrying...</p>
        </div>
      );
    }

    if (this.state.hasError) {
      const isLazyLoadError = this.state.error?.message?.includes('Loading chunk') ||
                             this.state.error?.message?.includes('Loading CSS chunk') ||
                             this.state.error?.message?.includes('Failed to fetch dynamically imported module');

      return (
        <div style={{ 
          minHeight: '400px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          padding: '20px'
        }}>
          <Result
            status="error"
            title={isLazyLoadError ? "Failed to Load Component" : "Component Error"}
            subTitle={
              isLazyLoadError 
                ? "There was a problem loading this page. This might be due to a network issue or the component file not being available."
                : "Something went wrong while rendering this component."
            }
            extra={[
              <Button 
                type="primary" 
                icon={<ReloadOutlined />} 
                onClick={this.handleRetry}
                key="retry"
              >
                Try Again
              </Button>,
              <Button 
                icon={<HomeOutlined />} 
                onClick={this.handleGoHome}
                key="home"
              >
                Go Home
              </Button>,
            ]}
          />
        </div>
      );
    }

    return this.props.children;
  }
}

export default SuspenseErrorBoundary;