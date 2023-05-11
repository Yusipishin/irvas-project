'use strict';

let path = require('path'); // не трогать

module.exports = {
  mode: 'development', //режим webpack
  entry: './js/main.js',
  output: {
    filename: 'bundle.js', // то как будет называться
    path: __dirname + '/js' // куда будем его ложить
    // dirname - это корень нашей папки
  },
  watch: true, 

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.m?js$/, // находит js файлы
        exclude: /(node_modules|bower_components)/, //исключаемые файлы
        use: {
          loader: 'babel-loader', // npm i --save-dev babel-loader
          options: {
            presets: [['@babel/preset-env', {
                debug: true, //позволяет во время компиляции смотреть
                corejs: 3, // corejs третьей версии, это библиотека
                useBuiltIns: "usage" // ф-ия corejs, позволяет выбрать те полифиллы, которые реально нужны
            }]]
          }
        }
      }
    ]
  }
};
