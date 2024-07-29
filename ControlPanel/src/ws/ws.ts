import WebSocket from 'ws';
const WebSocketServer = WebSocket.Server;
const wss = new WebSocketServer({ port: 1269 })

wss.on('connection', function (ws) {  //在connection事件中，回调函数会传入一个WebSocket的实例，表示这个WebSocket连接。
    console.log(`[SERVER] connection()`);
    ws.on('message', function (message) {  //我们通过响应message事件，在收到消息后再返回一个ECHO: xxx的消息给客户端。
        console.log(`[SERVER] Received:${message}`);

    })
})