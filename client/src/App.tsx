// client/src/App.tsx
// import React, { useEffect, useState } from 'react';

// const App: React.FC = () => {
//   const [message, setMessage] = useState<string>('');

//   const serverURL = 'http://localhost:3000';
//   const messageURL = `${serverURL}/api/message`;

//   useEffect(() => {
//     Fetch the message from the server
//     fetch(messageURL)
//       .then((response) => response.json())
//       .then((data) => setMessage(data.message))
//       .catch((error) => console.error('Error fetching the message:', error));
//   }, [messageURL]);

//   return (
//     <div>
//       <h1>Client-Server Connection Test</h1>
//       <p>{message}</p>
//     </div>
//   );
// };

// export default App;


import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState<string>('');

  const serverURL = 'http://localhost:3000';
  const messageURL = `${serverURL}/api/message`;

  useEffect(() => {
    // Fetch the message from the server
    fetch(messageURL)
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error fetching the message:', error));
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h3>Vite + React</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div>
      <h1>Client-Server Connection Test</h1>
      <p>{message}</p>
    </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
};

export default App;
