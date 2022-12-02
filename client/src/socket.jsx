import io from 'socket.io-client';
// const sockets = io('http://localhost:3001', { autoConnect: true, forceNew: true });
// connect to the server
const sockets = io('/');
export default sockets;
