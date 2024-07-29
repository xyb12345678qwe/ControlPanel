import { info } from 'console';
import { MzPlugin } from 'mz-botjs'
import { wss } from '../../model/index.js'
export class ws extends MzPlugin {
    constructor() {
        super({
            rule: [
                {
                    reg: /^(#|\/)?test$/, //正则
                    fnc: 'test'
                },
            ]
        })
        this.event = 'WS'
        //有WS消息会执行所有的指令,不限制于正则
    }
    async test(e) {
        // let _data = JSON.stringify(e), dataClone = JSON.parse(_data);
        // console.log(`ws消息:${dataClone}`)
        // info(dataClone)
        wss.send(JSON.stringify(e))
    }
}