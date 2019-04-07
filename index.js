import vue from 'vue';
import vuex from 'vuex';
import createLogger from 'vuex/dist/logger'; // 修改日志

import page1 from './page1/index'
import page2 from './page2/index'


vue.use(vuex);

const debug = process.env.NODE_ENV !== 'production'; // 开发环境中为true，否则为false

export default new vuex.Store({
    modules: {
        page1,
        page2
    },
    plugins: debug ? [createLogger()] : [] // 开发环境下显示vuex的状态修改
});
