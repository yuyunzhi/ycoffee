import React from "react";
import { storiesOf } from "@storybook/react";
import "./styles/index.scss";
import "./styles/storybook.scss";

const defaultWelcome = () => (
  <div className="story-container">
    <div className="story-header">欢迎来到 ycoffee 组件库</div>
    <div className="story-demo-box">
      <div className="story-demo-main">
        <div className="story-content">
          <p>
            {" "}
            ycoffee 是 一个好用的React组件库，技术栈使用了React Hooks +
            TypeScript
          </p>
          <h4>项目介绍</h4>
          <p>
            <ol>
              <li>该项目使用了 storybook 搭建官网</li>
              <li>工程搭建使用了:pre-commit、git-cz、prettier、commitlint</li>
              <li>技术栈：React Hooks + TypeScript + Scss</li>
              <li>
                React 内置 Hooks
                使用:useState、useEffect、useContext、useRef、useMemo、useCallback、useReducer
              </li>
              <li>
                自定义 Hooks
                封装:useClickOutside、useCurrentLocation、useDebounce、useImageSize、useToggle
              </li>
              <li>
                对组件样式定义基础颜色、尺寸，并提取变量统一文件管理,对 Icon
                样式图标采用了@fortawesome/react-fontawesome 库
              </li>
              <li>CI、CD:Github Page + Travis 自动化提交发布及部署</li>
              <li>npm publish 发布、及 npm link 本地调试</li>
            </ol>
          </p>
          <h4>组件介绍</h4>
          <p>
            本项目包含 16 个组件：Icon、Button、Input、Layout、Dialog、
            Menu、Progress、AutoComplete、CitySelect、Scroll、Upload、
            Tree、Breadcrumb、Pager、Checkbox
          </p>
          <h4>安装试试</h4>
          <code>npm install ycoffee --save</code>
        </div>
      </div>
    </div>
  </div>
);

storiesOf("Welcome page", module).add("welcome", defaultWelcome, {
  info: { disable: true },
});
