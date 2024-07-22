import { join, dirname } from 'path'
import { writeFileSync, existsSync, mkdirSync, readFileSync } from 'fs'
import yaml from 'js-yaml';
//ts定义类型

type filePathType = {
    server: string
}
type defaultconfigType = {
    server: object
}
class file {
    filePath: filePathType
    defaultconfig: defaultconfigType

    constructor() {
        this.filePath = {
            server: join(process.cwd(), 'config', 'server.yaml'),
        }
        this.defaultconfig = {
            server: {
                IP: "127.0.0.1",
                Port: 8080
            },
        }
        const filePaths = Object.keys(this.filePath) as (keyof filePathType)[];;
        for (const key of filePaths) {
            if (!existsSync(this.filePath[key])) {
                this.createFilePath(key as keyof filePathType);
                this.writeFile(key, this.defaultconfig[key] || {});
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
}
export const File = new file()