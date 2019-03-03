1.在vue中使用mint-ui:
*工程中安装mint-ui到项目依赖npm i mint-ui -S
*在main.js中导入mint-ui包 和mint-ui的样式
*注意js组件一般都需要导入,css组件若全局导入了,则可以不需要再次导入
*Toast js组件的使用:导包import { Toast } from 'mint-ui' 和使用
Toast({
  message: '提示',
  position: 'bottom',
  duration: 5000
});
*按需引入:需要借助babel-plugin-component
npm install babel-plugin-component -D
在.babelrc中添加plugin
["component", [
    {
      "libraryName": "mint-ui",
      "style": true
    }
]]
按需导入button和cell并注册组件
import { Button, Cell } from 'mint-ui'
Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)

2.使用MUI,MUI与bootstrap类似使用与任何项目,而mint-ui是使用vue技术封装出来的成套的组件,可以无缝和VUE项目进行开发