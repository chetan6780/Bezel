import io from 'socket.io-client';
const sockets = io('https://bezel-rtc.vercel.app/', { autoConnect: true, forceNew: true });
// connect to the server
// const sockets = io('/');
export default sockets;
