## ycoffee 组件库

[![Build Status](https://travis-ci.org/yuyunzhi/ycoffee.svg?branch=master)](https://travis-ci.org/yuyunzhi/ycoffee)

### 项目介绍

- 该项目使用了 storybook 搭建官网
- 工程搭建使用了:pre-commit、git-cz、prettier、commitlint
- 技术栈：React Hooks + TypeScript + Scss
- React 内置 Hooks 使用:useState、useEffect、useContext、useRef、useMemo、useCallback、useReducer
- 自定义 Hooks 封装:useClickOutside、useCurrentLocation、useDebounce、useImageSize、useToggle
- 对组件样式定义基础颜色、尺寸，并提取变量统一文件管理,对 Icon 样式图标采用了@fortawesome/react-fontawesome 库
- CI、CD:Github Page + Travis 自动化提交发布及部署
- npm publish 发布

### 组件介绍

本项目包含 15 个组件：Icon、Button、Input、Layout、Dialog、
Menu、Progress、AutoComplete、CitySelect、Scroll、Upload、
Tree、Breadcrumb、Checkbox

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
- 汉字转拼音:tiny-pinyin
