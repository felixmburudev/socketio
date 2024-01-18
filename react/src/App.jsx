import  { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

function App() {
  useEffect(() => {

    
    socket.connect('connect', () => {
      console.log('Connected to server');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    return () => {
      socket.disconnect();
    };

 
  }, []);


  return (
    <div className="App">
      <h1>Socket.io </h1>
    </div>
  );
}

export default App;





































// import { useEffect } from 'react';
// import io from 'socket.io-client';

// const socket = io('http://localhost:3000');

// function App() {
//   useEffect(() => {
//     socket.on('connect', () => {
//       alert('Connected to server');
//     });

//     socket.on('disconnect', () => {
//       console.log('Disconnected from server');
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   return (
//     <div className="App">
//       <h1>Socket.io Example</h1>
//     </div>
//   );
// }

// export default App;

