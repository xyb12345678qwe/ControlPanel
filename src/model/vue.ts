import { createSSRApp, h } from 'vue';
import { renderToString } from '@vue/server-renderer';

// 定义一个泛型类型 T，表示 Vue 组件的 props 类型
type VueComponent<T = {}> = new (...args: any[]) => { $props: T };

class VueHtml {
    /**
     * Vue 渲染字符串
     * @param App - 要渲染的 Vue 组件
     * @param props - 传递给组件的 props 数据
     * @returns 渲染后的 HTML 字符串
     */
    async render<T>(App: VueComponent<T>, props?: T): Promise<string> {
        const app = createSSRApp({
            render: () => h(App, props),
        });
        return await renderToString(app);
    }
}

export const vueHtml = new VueHtml();
