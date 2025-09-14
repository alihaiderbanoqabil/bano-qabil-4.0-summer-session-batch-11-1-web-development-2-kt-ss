import React from 'react';

// This component will always throw an error
const BrokenComponent = () => {
  // Intentionally throw an error
  throw new Error('This component is intentionally broken for testing!');
  
  return (
    <div>
      <h1>You should never see this</h1>
    </div>
  );
};

export default BrokenComponent;