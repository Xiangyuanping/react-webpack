module.exports = {
    routes: [{
        path: '/index',
        noHelp: true,
        noLogin: true,
        meta: {
            burial: false, //是否需要埋点
            name: '首页',
            swsxDm: '10000', // 税务事项代码
            swsxMc: '首页' // 税务事项名称
        },
        exact: true, // 路由是否严格按照 path 配置 ， 默认 true
        auth: false, // 是否需要事前校验
        component: resolve => require(['views/index/index'], resolve)
    }]
};