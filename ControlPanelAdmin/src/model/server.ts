import { File } from './file.js'
import net from 'net'
class serve {
    port: number
    IP: string
    constructor() {
        this.port = 0
        this.IP = ""
    }
    async findPORT(): Promise<{
        port: number,
        IP: string
    }> {
        const config: {
            Port?: number,
            IP?: string
        } = File.readFile('server') as any
        let port = config.Port || 16874
        this.IP = config.IP || "http://127.0.0.1"
        while (true) {
            const res = await this.portUsed(port);
            if (res instanceof Error) {
                console.info(`Port ${port} is used, trying to find another port...`);
                port++; // 递增端口并继续循环
            } else {
                console.info(`Port ${port} is available.`);
                break; // 找到未使用的端口，退出循环
            }
        }
        File.writeFile('server', { Port: config.Port, IP: config.IP, newPort: port })
        this.port = port;
        return {
            port,
            IP: this.IP
        }
    }
    getIP(): string {
        if (!this.port) {
            this.findPORT()
            return ``;
        }
        return `${this.IP}:${this.port}`
    }
    portUsed(port: number) {
        return new Promise((resolve, reject) => {
            let server = net.createServer().listen(port);
            server.on('listening', function () {
                server.close();
                resolve(port);
            });
            server.on('error', function (err: any) {
                if (err.code == 'EADDRINUSE') {
                    resolve(err);
                }
            });
        });
    }
}
export const server = new serve();