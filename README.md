
`手动搭建react 项目
`  

1. npm init -y 初始化npm 生成package.json文件。
2. npm install --save react react-dom 安装react核心组件
3. npm install --save-dev webpack webpack-cli 安装打包工具（webpack 4+ 版本，还需要安装 webpack-cli）。
4. npm install --save-dev webpack-dev-server 安装本地服务器（安装webpack-dev-server，一个小型express服务器，主要特性是支持热加载）。
5. npm install --save-dev redux react-redux redux-devtools-extension 安装状态管理器。
6. npm install --save-dev  redux-thunk
7. npm install --save-dev react-router-dom  安装路由。
8. cnpm install --save-dev friendly-errors-webpack-plugin
9. cnpm install --save-dev webpack-merge
10. cnpm install --save-dev html-webpack-plugin
11. cnpm install --save-dev babel-core babel-loader babel-preset-env 
12. cnpm install --save-dev babel babel-cli
13. cnpm install --save-dev babel-preset-react  babel-preset-es2015
14. cnpm install --save-dev babel-preset-stage-0
15. cnpm install --save-dev css-loader style-loader
16. cnpm install --save-dev url-loader 
17. cnpm install less-loader less 
18. 根目录新建文件夹src(views、router、redux、api、componet、index.js),public,index.html。
19. 根目录新建文件webpack.config.js 并添加webpack打包配置。
20. 配置package.js启动选项。



# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

二、编辑基本语法  
1、字体格式强调
我们可以使用下面的方式给我们的文本添加强调的效果
_强调_ (示例：斜体)  
 _强调_ (示例：斜体)  
**加重强调** (示例：粗体)  
 **加重强调** (示例：粗体)  
**_特别强调_** (示例：粗斜体)  
**_特别强调_** (示例：粗斜体)  
2、代码  
`<hello world>`  
3、代码块高亮  
4、表格 （建议在表格前空一行，否则可能影响表格无法显示）

| 表头       | 表头       | 表头       |
| ---------- | ---------- | ---------- |
| 单元格内容 | 单元格内容 | 单元格内容 |
| 单元格内容 | 单元格内容 | 单元格内容 |

5、其他引用
图片  
![图片名称](https://www.baidu.com/img/bd_logo1.png)  
链接  
[链接名称](https://www.baidu.com/)  
6、列表

1. 项目 1
2. 项目 2
3. 项目 3
   - 项目 1 （一个*号会显示为一个黑点，注意 ⚠️ 有空格，否则直接显示为*项目 1）
   - 项目 2

7、换行（建议直接在前一行后面补两个空格）
直接回车不能换行，  
可以在上一行文本后面补两个空格，  
这样下一行的文本就换行了。
或者就是在两行文本直接加一个空行。
也能实现换行效果，不过这个行间距有点大。

8、引用

> 第一行引用文字  
> 第二行引用文字
