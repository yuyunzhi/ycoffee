import React from "react";
import { storiesOf } from "@storybook/react";
import "../../styles/index.scss";
import "../../styles/storybook.scss";
import Progress from "./progress";

const progress = () => (
  <div className="story-container">
    <div className="story-header">Progress 进度条</div>
    <div className="story-demo-box">
      <div className="story-demo-main">
        <div className="story-content">
          <div style={{ width: "50%" }}>
            <Progress percent={40} theme="secondary" />
            <hr style={{ background: "transparent" }} />
            <Progress percent={20} strokeHeight={20} theme="success" />
            <hr style={{ background: "transparent" }} />
            <Progress percent={100} strokeHeight={30} textPosition={"out"} />
            <hr style={{ background: "transparent" }} />
            <Progress
              percent={5}
              strokeHeight={30}
              textPosition={"out"}
              theme="danger"
            />
          </div>
        </div>
        <div className="story-desc">
          <a className="story-desc-title">基础</a>
          <div>
            使用 percent 设置高亮度百分比，使用 strokeHeight
            设置进度条高度，使用 textPosition 设置百分比数字位置， 使用 theme
            设置主题色
          </div>
        </div>
        <div className="story-code">
          <pre>
            <code className="story-code-hljs">
              {`<Progress percent={40} theme="secondary" />
<Progress percent={20} strokeHeight={20} theme="success" />
<Progress percent={100} strokeHeight={30} textPosition={'out'} />
<Progress
  percent={5}
  strokeHeight={30}
  textPosition={'out'}
  theme="danger"
/>`}
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
            <th>percent</th>
            <th>高亮百分比</th>
            <th>Number</th>
            <th>必须要填写</th>
          </tr>
          <tr>
            <th>strokeHeight</th>
            <th>进度条高度</th>
            <th>Number</th>
            <th>-</th>
          </tr>
          <tr>
            <th>textPosition</th>
            <th>百分比数字显示的位置</th>
            <th>String:out in</th>
            <th>in </th>
          </tr>
          <tr>
            <th>theme</th>
            <th>进度条主题色</th>
            <th>
              String | 'primary' | 'secondary' | 'success' | 'info' | 'warning'
              | 'danger' | 'light' | 'dark'
            </th>
            <th>primary </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

storiesOf("Progress", module).add("Progress", progress);
