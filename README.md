# ycoffee 组件库

[![Build Status](https://travis-ci.org/yuyunzhi/ycoffee.svg?branch=master)](https://travis-ci.org/yuyunzhi/ycoffee)

# 项目介绍

- 该项目使用了 storybook 搭建官网
- 技术栈：React Hooks + TypeScript + Scss
- 工程搭建使用了：pre-commit、git-cz、prettier、commitlint
- 对组件样式定义基础颜色、尺寸，并提取变量统一文件管理
- 对 Icon 样式图标采用了@fortawesome/react-fontawesome 库
- CI、CD:Github Page + Travis 自动化提交部署

# storybook install

安装

```$xslt
npx -p @storybook/cli sb init --type react_scripts
```

运行

```$xslt
npm run storybook
```

# 选择的一些库

- 动画：react-transition-group
- 图标：@fortawesome/react-fontawesome
- 对 className 操作：classnames
