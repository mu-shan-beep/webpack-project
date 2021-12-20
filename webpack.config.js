const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "dist/",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        //style-loader  负责将css添加到DOM中，css-loader负责编译css
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|jpg|gif|jepg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: false,
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        //排除
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  resolve: { alias: { vue$: "vue/dist/vue.esm.js" } },
};
