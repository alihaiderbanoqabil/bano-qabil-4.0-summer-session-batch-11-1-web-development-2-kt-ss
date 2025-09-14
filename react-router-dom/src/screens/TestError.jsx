import React, { useState } from 'react';
import { Button, Card, Space, Typography, Divider } from 'antd';
import { BugOutlined, ThunderboltOutlined, DisconnectOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const TestError = () => {
  const [shouldThrowError, setShouldThrowError] = useState(false);
  const [counter, setCounter] = useState(0);

  // This will trigger the error boundary
  if (shouldThrowError) {
    throw new Error('This is a test error thrown intentionally by ali!');
  }

  const triggerJavaScriptError = () => {
    // This will cause an error
    setShouldThrowError(true);
  };

  const triggerTypeError = () => {
    // This will cause a type error
    const obj = null;
    console.log(obj.someProperty); // This will throw
  };

  const triggerAsyncError = async () => {
    try {
      // Simulate an API call that fails
      const response = await fetch('/api/nonexistent-endpoint');
      if (!response.ok) {
        throw new Error('API call failed');
      }
    } catch (error) {
      // Re-throw to trigger error boundary
      throw new Error('Async operation failed: ' + error.message);
    }
  };

  const triggerChunkLoadError = () => {
    // Simulate chunk loading error (like lazy loading failure)
    setShouldThrowError(true);
    throw new Error('Loading chunk 123 failed. (missing: http://localhost:3000/static/js/123.chunk.js)');
  };

  const triggerInfiniteLoop = () => {
    // This will cause a stack overflow
    const recursiveFunction = () => {
      setCounter(prev => prev + 1);
      recursiveFunction();
    };
    recursiveFunction();
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Title level={2}>
        <BugOutlined /> Error Boundary Testing Page
      </Title>
      
      <Paragraph>
        This page contains buttons that will trigger different types of errors 
        to test your error boundaries. Click any button below to see how the 
        error boundary handles different scenarios.
      </Paragraph>

      <Card title="Test Different Error Types" style={{ marginBottom: '20px' }}>
        <Space direction="vertical" style={{ width: '100%' }} size="middle">
          
          <div>
            <Title level={4}>1. Component Render Error</Title>
            <Paragraph type="secondary">
              This will throw an error during component rendering, triggering the main ErrorBoundary.
            </Paragraph>
            <Button 
              type="primary" 
              danger 
              icon={<ThunderboltOutlined />}
              onClick={triggerJavaScriptError}
            >
              Trigger Render Error
            </Button>
          </div>

          <Divider />

          <div>
            <Title level={4}>2. Type Error</Title>
            <Paragraph type="secondary">
              This will cause a TypeError by trying to access properties of null.
            </Paragraph>
            <Button 
              type="primary" 
              danger 
              icon={<BugOutlined />}
              onClick={triggerTypeError}
            >
              Trigger Type Error
            </Button>
          </div>

          <Divider />

          <div>
            <Title level={4}>3. Chunk Loading Error (Lazy Loading)</Title>
            <Paragraph type="secondary">
              This simulates a lazy loading/chunk loading error that SuspenseErrorBoundary handles.
            </Paragraph>
            <Button 
              type="primary" 
              danger 
              icon={<DisconnectOutlined />}
              onClick={triggerChunkLoadError}
            >
              Trigger Chunk Load Error
            </Button>
          </div>

          <Divider />

          <div>
            <Title level={4}>4. Async Error</Title>
            <Paragraph type="secondary">
              This will trigger an async error (like API failure).
            </Paragraph>
            <Button 
              type="primary" 
              danger 
              onClick={triggerAsyncError}
            >
              Trigger Async Error
            </Button>
          </div>

          <Divider />

          <div>
            <Title level={4}>5. Memory/Stack Overflow</Title>
            <Paragraph type="secondary">
              ⚠️ Warning: This might freeze your browser temporarily!
            </Paragraph>
            <Button 
              type="primary" 
              danger 
              onClick={triggerInfiniteLoop}
            >
              Trigger Stack Overflow (Use Carefully!)
            </Button>
          </div>

        </Space>
      </Card>

      <Card title="Current State" size="small">
        <p>Counter: {counter}</p>
        <p>Component is working normally</p>
      </Card>
    </div>
  );
};

export default TestError;