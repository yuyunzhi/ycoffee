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
          <h3>安装试试</h3>
          <code>npm install ycoffee --save</code>
        </div>
      </div>
    </div>
  </div>
);

storiesOf("Welcome page", module).add("welcome", defaultWelcome, {
  info: { disable: true },
});
