import { useCallback } from 'react';
import { message } from 'antd';

// Custom hook for handling errors consistently across the app
export const useErrorHandler = () => {
  const handleError = useCallback((error, context = 'Application') => {
    // Log error to console
    console.error(`[${context}] Error:`, error);

    // Show user-friendly message
    const errorMessage = error?.response?.data?.message || 
                        error?.message || 
                        'Something went wrong. Please try again.';

    message.error(errorMessage);

    // In production, you might want to send errors to an error tracking service
    if (process.env.NODE_ENV === 'production') {
      // Example: Sentry, LogRocket, etc.
      // trackError(error, context);
    }

    return error;
  }, []);

  const handleAsyncError = useCallback(async (asyncFunction, context = 'Async Operation') => {
    try {
      return await asyncFunction();
    } catch (error) {
      handleError(error, context);
      throw error; // Re-throw if you need to handle it further up
    }
  }, [handleError]);

  return {
    handleError,
    handleAsyncError
  };
};

export default useErrorHandler;