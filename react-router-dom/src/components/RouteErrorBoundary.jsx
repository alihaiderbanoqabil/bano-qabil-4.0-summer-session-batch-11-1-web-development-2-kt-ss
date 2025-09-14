import React from 'react';
import { useRouteError, useNavigate } from 'react-router-dom';
import { Button, Result } from 'antd';
import { HomeOutlined, ReloadOutlined } from '@ant-design/icons';

// Route-specific error boundary component for React Router v6
export const RouteErrorBoundary = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  console.error('Route error:', error);

  const handleGoHome = () => {
    navigate('/', { replace: true });
  };

  const handleReload = () => {
    window.location.reload();
  };

  // Handle different types of errors
  const getErrorMessage = () => {
    if (error?.status === 404) {
      return {
        title: "Page Not Found",
        subTitle: "Sorry, the page you visited does not exist."
      };
    }
    
    if (error?.status >= 500) {
      return {
        title: "Server Error",
        subTitle: "Sorry, something went wrong on our end."
      };
    }

    return {
      title: "Something went wrong",
      subTitle: error?.message || "An unexpected error occurred while loading this page."
    };
  };

  const { title, subTitle } = getErrorMessage();

  return (
    <div style={{ 
      minHeight: '70vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '20px'
    }}>
      <Result
        status={error?.status === 404 ? "404" : "error"}
        title={title}
        subTitle={subTitle}
        extra={[
          <Button 
            type="primary" 
            icon={<HomeOutlined />} 
            onClick={handleGoHome}
            key="home"
          >
            Back Home
          </Button>,
          <Button 
            icon={<ReloadOutlined />} 
            onClick={handleReload}
            key="reload"
          >
            Try Again
          </Button>,
        ]}
      />
    </div>
  );
};

export default RouteErrorBoundary;