// fis.config.set(key, value);
fis.config.merge({
    modules: {
        parser: {
            //less后缀的文件使用fis-parser-less插件编译
            //处理器支持数组，或者逗号分隔的字符串配置
            less: ['less'],
        }
    },
    roadmap: {
        ext: {
            //less后缀的文件将输出为css后缀
            //并且在parser之后的其他处理流程中被当做css文件处理
            less: 'css',
        },
        path: [{
            reg: /\/(map.json)/i,
            release: false
        }, 
        {
            reg: /\/(node_modules)\/(codemirror)\/.*/i,
            release : '/$&'
        }, 
        {
            reg: /\/(node_modules)\/(\S|\b)+\/(dist|build)\/.*/i,
             release : '/$&'
        }, 
        {
            reg: /\/(node_modules)\/.*/i,
            release: false
        }
        ]
    }
});


// 生产环境，某些东西不需要发布了 ，如mock虚拟数据
// if (process.env.FIS_DEBUG === 'FALSE') {
//     fis.config.data.roadmap.path.push({
//         reg: /^\/(mock)\/.*/i,
//         release: false
//     }, {
//         reg: /\/(index.html)/i,
//         release: false
//     })
// }