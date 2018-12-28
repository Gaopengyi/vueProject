# 这是一个NB的项目

# 2018.12.28 开始项目

# git 命令 
1. git add. 
2. git commit -m "提交信息"
3. git push

# github路径 https://github.com/Gaopengyi/vueProject.git

## 制作首页APP 组件
1. 完成 Header 区域， 使用的是 Mint-ui 中的Header 组件
2. 制作底部 Tabbar 区域， 使用的是MUI 的 Tabbar.html 
+ 在制作 购物车小图标的时候 ，操作会多一些
+ 先把 扩展图标的 css 样式，拷贝到css 目录中
+ 再把 字体库 ttf 文件，导入到 项目中
+ 为购物车小图标，添加 如下样式 ‘mui-icon mui-icon-extra mui-icon-extra-cart’
3. 要在中间区域放置一个 router-view 来展示路由匹配到的组件

# 改造 tabbar 为 router-link

## 设置路由为高亮 linkActiveClass

## 点击 tabbar 中的路由链接， 展示对应的路由组件 