import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import "../../styles/index.scss";
import "../../styles/storybook.scss";
import Button from "../Button/index";
import Dialog, { alert, confirm, modal } from "./index";

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

  const openModal4 = () => {
    const close = modal(
      <div>
        <div>你好</div>
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
              <Button onClick={() => alert("你好")}>alert</Button>
            </div>
          </div>
          <div className="story-desc">
            <a className="story-desc-title">基础</a>
            <div>使用 alert()函数直接动态创建弹框。</div>
          </div>
          <div className="story-code">
            <pre>
              <code className="story-code-hljs">
                {`<Button onClick={() => alert("你好")}>alert</Button>
`}
              </code>
            </pre>
          </div>
          <div className="story-liner"></div>
        </div>
        <div className="story-demo-main">
          <div className="story-content">
            <div>
              <Button
                onClick={() =>
                  confirm(
                    "你好",
                    () => {
                      action("你点击了yes");
                    },
                    () => {
                      action("你点击了no");
                    }
                  )
                }
              >
                confirm
              </Button>
            </div>
          </div>
          <div className="story-desc">
            <a className="story-desc-title">基础</a>
            <div>
              使用
              confirm()函数直接动态创建弹框，默认含有取消和确定按钮并分别带有回调函数
            </div>
          </div>
          <div className="story-code">
            <pre>
              <code className="story-code-hljs">
                {`<Button
       onClick={() =>
              confirm("你好", 
                  () => {action("你点击了确定")}, 
                  () => {action("你点击了取消")}
            )}
>confirm</Button>`}
              </code>
            </pre>
          </div>
          <div className="story-liner"></div>
        </div>
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
          <div className="story-liner" />
        </div>
        <div className="story-demo-main">
          <div className="story-content">
            <div>
              <Button onClick={() => openModal4()}>click</Button>
            </div>
          </div>
          <div className="story-desc">
            <a className="story-desc-title">基础</a>
            <div>
              使用
              Dialog组件直接动态创建弹框,通过控制visible来设置弹框的显示与否。接收buttons元素数组展示在弹框底部,buttons为可选参数。
            </div>
          </div>
          <div className="story-code">
            <pre>
              <code className="story-code-hljs">
                {`const [dialogVisible,setDialogVisible] = useState<boolean>(false)
<Button onClick={()=> setDialogVisible(true)}>click</Button>
<Dialog visible={dialogVisible} buttons={
  [
    <Button onClick={() => {setDialogVisible(false)}} style={{marginRight:'10px'}}>取消</Button>,
    <Button btnType="primary" onClick={() => {setDialogVisible(false)}}>确定</Button>
  ]
} onClose={() => {setDialogVisible(false)}}>
  <div>你好</div>
</Dialog>`}
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
              <th>visible</th>
              <th> 控制弹框显示与否</th>
              <th>Boolean</th>
              <th>false</th>
            </tr>
            <tr>
              <th>buttons</th>
              <th>可选参数:在底部自定义button和对应事件</th>
              <th>Array</th>
              <th>-</th>
            </tr>
            <tr>
              <th>onClose</th>
              <th>关闭事件回调</th>
              <th>函数</th>
              <th>-</th>
            </tr>
            <tr>
              <th>closeOnClickMask</th>
              <th>可选参数，是否点击遮罩层关闭</th>
              <th>boolean</th>
              <th>false</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

storiesOf("Dialog", module).add("Dialog对话框", defaultDialog);
