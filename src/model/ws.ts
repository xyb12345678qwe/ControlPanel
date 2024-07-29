export const wss = new WebSocket("ws://localhost:1269");
wss.onopen = () => console.log("[panel]ws服务连接成功");