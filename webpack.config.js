const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode:"production",
    entry: "./src/index.js",
    devServer:{
    static:"./dist"
  },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "main.js"
    },
    plugins: [new htmlWebpackPlugin({
        template: "./src/index.html",
    }),],
    module:{
        rules:[
            {
                test:/\.(otf|ttf|woff)$/i,
                type:"asset/resource"
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },
            {
                test:/\.css$/i,
                use:["style-loader","css-loader"]
            }
        ]
    }
}