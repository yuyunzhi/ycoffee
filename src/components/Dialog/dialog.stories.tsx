import React, { ReactElement, ReactNode } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import "../../styles/index.scss";
import "../../styles/storybook.scss";
import Button from "../Button";
import { modal } from "./dialog";

const defaultDialog = () => {
  const openModal1 = () => {
    modal(
      <div>
        <h4>你好</h4>
      </div>
    );
  };

  const openModal2 = () => {
    const close = modal(
      <div>
        <Button onClick={() => close()} size="sm">
          close
        </Button>
      </div>
    );
  };

  const openModal3 = () => {
    const close = modal(
      <div>
        <h4>你好</h4>
      </div>,
      [
        <Button onClick={() => close()} style={{ marginRight: "10px" }}>
          取消
        </Button>,
        <Button btnType="primary" onClick={() => close()}>
          确定
        </Button>,
      ],
      () => {
        action("关闭成功");
      }
    );
  };

  return (
    <div className="story-container">
      <div className="story-header">Dialog 对话框</div>
      <div className="story-demo-box">
        <div className="story-demo-main">
          <div className="story-content">
            <div>
              <Button onClick={openModal1} style={{ marginRight: "20px" }}>
                常规
              </Button>
              <Button onClick={openModal2} style={{ marginRight: "20px" }}>
                可内部操作关闭
              </Button>
              <Button onClick={openModal3}>关闭后调用函数</Button>
            </div>
          </div>
          <div className="story-desc">
            <a className="story-desc-title">基础</a>
            <div>
              使用
              modal()函数直接动态创建modal,modal()返回值为close函数,使得在组件内部可以自行调用关闭。
            </div>
          </div>
          <div className="story-code">
            <pre>
              <code className="story-code-hljs">
                {`const openModal1 = () => {
    modal(
        <div><h4>你好</h4></div>
    );
  };

  const openModal2 = () => {
    const close = modal(
        <div>
          <Button onClick={() => close()} size="sm">close</Button>
        </div>
    );
  };

  const openModal3 = () => {
    const close = modal(
        <div><h4>你好</h4></div>,
        [
          <Button onClick={() => close()} style={{marginRight:'10px'}}>取消</Button>,
          <Button btnType="primary" onClick={() => close()}>确定</Button>
        ],
        ()=>{console.log('关闭成功')}
    );
  };
  
<Button onClick={openModal1}>常规</Button>
<Button onClick={openModal2}>可内部操作关闭</Button>
<Button onClick={openModal3}>关闭后调用函数</Button>`}
              </code>
            </pre>
          </div>
          <div className="story-liner"></div>
        </div>
      </div>

      <div className="story-api">API</div>
      <div className="story-table-border">
        <table>
          <tbody>
            <tr>
              <th>属性</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
            <tr>
              <th>btnType</th>
              <th>可选参数类型 ：'primary' | 'default' | 'danger' | 'link'</th>
              <th>String</th>
              <th>default</th>
            </tr>
            <tr>
              <th>size</th>
              <th>可选参数类型 ：'lg' | 'sm'</th>
              <th>String</th>
              <th>-</th>
            </tr>
            <tr>
              <th>disabled</th>
              <th>是否禁用</th>
              <th>Boolean</th>
              <th>false</th>
            </tr>
            <tr>
              <th>onClick</th>
              <th>点击事件</th>
              <th>-</th>
              <th>-</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

storiesOf("Dialog", module).add("Dialog对话框", defaultDialog);
