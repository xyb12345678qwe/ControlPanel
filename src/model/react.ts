import ReactDOMServer from 'react-dom/server'
import React from 'react'
// 定义一个泛型类型 T，表示 React 组件的 props 类型
type ReactComponent<T = {}> = React.ComponentType<T>;
class reacthtml {
    /**
     * react渲染字符串
     * @param APP - 要渲染的 React 组件
     * @param props - 传递给组件的 props 数据
     * @returns 渲染后的 HTML 字符串
     */
    render<T>(APP: ReactComponent<T>, props?: T): string {
        return ReactDOMServer.renderToString(React.createElement(APP, props));
    }
}
export const reactHtml = new reacthtml()