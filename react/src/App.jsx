import { useEffect, useState } from 'react';
import io from 'socket.io-client'

const socket = io('http://localhost:4000');

function App() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  

  useEffect(() => {
    socket.on('chatMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    socket.emit('chatMessage', inputMessage);
    setInputMessage('');
  };

  return (
    <div className="App">
      <h1>Socket.io Chat Room</h1>
      <div>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
      <div>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;
