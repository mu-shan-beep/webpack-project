## 配置文件 webpack.config.js

> 入口文件
>
> > extry: "./src/index.js" index.js

> 出口文件
>
> > output: {
> > path: ".dist",
> > filename: "bundle.js",
> > }

## 命令映射 在 packag.json 文件中

> > srcipt:{
> > "映射名称"："命令"
> > }

## 安装 webpack 安装在开发依赖环境

> > dependencies

## 编译 css 文件

- 装 css-loader css-loader 只负责加载，不负责导出模块
- 写配置文件
  ` module:{ rules:[{ test:/\.css$/, use["css-loader"]}]}`

## 导入 css 模块，style-loader

- 配置同上
  ` { test: /\.css$/, use: ["style-loader", "css-loader"]}`
- webpack 加载多个 loader 时，从右向左加载

## 编译 less 文件

- 安装 npm install less less-loader --save-dev
  ` { test: /\.less$/i, use: ["style-loader", "css-loader", "less-loader"]}`

## 编译其他资源

1.图片
1.1.安装 npm install url-loader --save-dev
1.2. 配置
` use: [{ loader: "url-loader", options: { limit: 13000}}]`

> limit:当图片小于后面的配置时，会将图片转化成 base64 位字符串
> 当图片大于后面的配置时，需要用 file-loader；
> file-loader 安装 npm install file-loader --save-dev
> name 属性：img/[name].[hash:8].[ext] 打包后的文件名

## es6 转换成 es5

> 安装 npm install -D babel-loader @babel/core @babel/preset-env webpack
> 配置文件

## 配置 Vue

- 安装 npm i vue
- 使用 vue
  > 在入口文件引入并创建实例
  > 报错 ,在 webpack 中配置
  > 改配置项表时在引入 vue 时指向指向指定文件夹
  > resolve: { alias: { vue$: "vue/dist/vue.esm.js" } } alias 别名
  > `[Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.`
