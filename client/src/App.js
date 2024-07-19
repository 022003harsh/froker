import React, { useEffect, useState } from 'react';

function App() {
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const messages = ['We are here', 'Don\'t leave us'];
    let messageIndex = 0;

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        document.title = messages[messageIndex];
        const id = setInterval(() => {
          messageIndex = (messageIndex + 1) % messages.length;
          document.title = messages[messageIndex];
        }, 1000);
        setIntervalId(id);
      } else {
        document.title = 'Froker';
        if (intervalId) {
          clearInterval(intervalId);
          setIntervalId(null);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup the event listener and interval on component unmount
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Froker</h1>
      </header>
    </div>
  );
}

export default App;
