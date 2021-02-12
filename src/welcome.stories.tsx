import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("Welcome page", module).add(
  "welcome",
  () => {
    return (
      <>
        <h1>欢迎来到 ycoffee 组件库</h1>
        <p>
          {" "}
          ycoffee 是 一个好用的React组件库，技术栈使用了React Hooks + TypeScript
        </p>
        <h3>安装试试</h3>
        <code>npm install ycoffee --save</code>
      </>
    );
  },
  { info: { disable: true } }
);
