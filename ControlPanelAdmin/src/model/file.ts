import { join, dirname } from 'path'
import { writeFileSync, existsSync, mkdirSync, readFileSync } from 'fs'
import yaml from 'js-yaml';
import { DirPath } from '../../../config.js';

type filePathType = {
    server: string
    key: string
    admin: string
}
type defaultconfigType = {
    server: object
    key: object
    admin: object
}
class file {
    filePath: filePathType
    defaultconfig: defaultconfigType
    key: {
        ADMINLOGINKEY: string
    }
    constructor() {
        this.filePath = {
            server: join(DirPath, 'config', 'server.yaml'),
            key: join(DirPath, 'config', 'key.yaml'),
            admin: join(DirPath, 'config', 'admin.yaml')
        }
        this.defaultconfig = {
            server: {
                IP: "127.0.0.1",
                Port: 16874
            },
            key: {
                ADMINLOGINKEY: 'mz_bot_admin_login_key' //admin登录key
            },
            admin: [
                {
                    name: 'admin',
                    password: 'admin'
                }
            ]
        }
        this.key = this.defaultconfig.key as { ADMINLOGINKEY: string }
        const filePaths = Object.keys(this.filePath) as (keyof filePathType)[];;
        for (const key of filePaths) {
            if (!existsSync(this.filePath[key])) {
                this.createFilePath(key as keyof filePathType);
                this.writeFile(key, this.defaultconfig[key] || {});
            } else {
                if (key === 'key') {
                    this.key = this.readFile(key) as { ADMINLOGINKEY: string }
                }
            }
        }
    }
    createFilePath(key: keyof filePathType) {
        const dirPath = dirname(this.filePath[key]);
        mkdirSync(dirPath, { recursive: true });
    }
    readFile(key: keyof filePathType) {
        const filePath = this.filePath[key];
        const yamlContent = readFileSync(filePath, 'utf8');
        return yaml.load(yamlContent);
    }
    writeFile(key: keyof filePathType, data: object) {
        const filePath = this.filePath[key];
        const yamlContent = yaml.dump(data);
        writeFileSync(filePath, yamlContent);
    }
    writeFileJson(key: keyof filePathType, data: object) {
        writeFileSync(this.filePath[key], JSON.stringify(data, null, 2))
    }
    get(key: "filePath" | "defaultconfig" | "key") {
        return this[key];
    }
}
export const File = new file()