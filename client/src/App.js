import React, { useEffect, useState } from 'react';
import {Route, Routes } from 'react-router-dom';
import BlogList from './page/Blog';
import BlogDetail from './page/BlogDetailPage';
import Home from './page/Home';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import "./App.css"

function App() {
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const messages = ['We are still here', 'Don\'t leave us'];
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

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return (
    <div className="flex min-h-screen w-screen flex-col text-black bg-white font-inter">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
