import React from 'react';
import { Button } from './components/atoms';

function App() {
  const msg = 'test';
  return (
    <div>
      Hello Jane from {msg}
      <p />
      <p />
      <Button as="div" onClick={() => alert('hello button!')}>
        테스트
      </Button>
    </div>
  );
}

export default App;
