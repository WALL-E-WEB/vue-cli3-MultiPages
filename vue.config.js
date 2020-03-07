let env = process.env.NODE_ENV;
let FILE_NAME = process.env.FILE_NAME

console.log('----------------');

console.log(process.env.FILE_NAME);


// npm i compression-webpack-plugin -D
const CompressionWebpackPlugin = require("compression-webpack-plugin");
module.exports = {
    // 如果是hash模式
    // publicPath: env === 'production' ? './' : `/${FILE_NAME}`,
    publicPath:'./',

    // 如果是history模式
    // publicPath: env === 'production' ? '/' : '/',
    pages:{
        index: {
            entry: 'src/views/index/main.js', // page 的入口
            template: 'public/index.html', // 模板来源
            filename: 'index.html', // 在 dist/index.html 的输出
            // 当使用 title 选项时，template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
          },
          ui: {
            entry: 'src/views/ui/main.js',
            template: 'src/public/ui.html',
            filename: 'ui.html',
            title: 'Index Page',
            chunks: ['chunk-vendors', 'chunk-common', 'ui']
          }
        // subpage:'src/views/home/main.js'
    },
    filenameHashing: true,
    productionSourceMap: false,

    // 输出文件目录默认'dist
    outputDir: "dist",
    // outputDir: `dist/${FILE_NAME}`,

    runtimeCompiler: true,

    // 静态资源目录 (js, css, img, fonts)

    assetsDir: "assets",
    //设置打包之后是否打包.map文件
    productionSourceMap: env !== "development" ? false : true,

    

    // 所有 webpack-dev-server 的选项都支持
    devServer: {
        port: 8083,
        // host: "0.0.0.0",
    //     hot: true,
    //     open: false,
    //     disableHostCheck: true,
    //     proxy: {
    //         // axios.defaults.baseURL = '/a
    //         '/a': {
    //             target: "http://localhost:3000",
    //             // ws: true,
    //             changeOrigin: true,
    //             pathRewrite: {
    //                 '^/a': ''
    //             }
    //         },
    //     }
    //     // proxy: "http://localhost:3000",

    },
    configureWebpack: config => {
        if (env !== "development") {
            // 配置打包 压缩js
            config.plugins.push(
                new CompressionWebpackPlugin({
                    algorithm: "gzip",
                    test: /\.js$|\.html$|.\css/, //匹配文件名
                    threshold: 10240, //对超过10k的数据压缩
                    deleteOriginalAssets: false, //不删除源文件
                    minRatio: 0.8
                })
            );
        }
    }
}