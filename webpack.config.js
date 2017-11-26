const Cleanplugin = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
//  入口
  entry:{
    app:'./src/main.js'
  },

//  出口
  output:{
    path:path.resolve(__dirname , 'dist'),
    filename:'static/js/[name].js'
  },

//  加载器
  module:{
    rules:[
      {
        test:/\.css$/,
        use:['style-loader' , 'css-loader']
      },
      {
        test:/\.(png|jpg|gif|svg)$/,
        loader:'url-loader',
        options:{
          limit:7000,
          name: 'static/img/[name].[ext]'
        }
      }
    ]
  },

//  插件

  plugins:[
    new Cleanplugin('dist'),

    new HtmlPlugin({
      template: 'main.html', // 在当前文件夹下找
      filename: 'main.html' // 生成到dist
    })
  ]
};