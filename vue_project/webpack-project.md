1.新建一个webpack-vue模板项目,安装所需要的包 npm i
2.项目界面---头部---中间组件内容---底部Tabbar
3.头部开始找到mint-ui有现成的代码段main.js中引入
import 'mint-ui/lib/style.css'
import { Header } from 'mint-ui'
在页面中引入即可<mt-header fixed title="cc vue project"></mt-header>
4.底部Tab-bar是使用了mui,github下载mui_master代码段
直接查找mui的源代码和样式放入lib文件夹中即可使用,与bootstrap类似