import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import "../../styles/index.scss";
import "../../styles/storybook.scss";
import Scroll from "./scroll";

const defaultScroll = () => {
  const list = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ];

  return (
    <div className="story-container">
      <div className="story-header">Scroll 下拉滚动刷新</div>
      <div className="story-demo-box">
        <div className="story-demo-main">
          <div className="story-content">
            <div>
              <Scroll
                style={{ height: 300, textAlign: "center" }}
                onPull={() => console.log("触发了下拉刷新")}
              >
                {list.map((item) => {
                  return <p key={item}>{item}</p>;
                })}
              </Scroll>
            </div>
          </div>
          <div className="story-desc">
            <a className="story-desc-title">基础</a>
            <div> 注意:点击浏览器切换移动端可以预览下拉刷新,pc端无法预览。</div>
          </div>
          <div className="story-code">
            <pre>
              <code className="story-code-hljs">
                {`<Scroll style={{ height: 300 }} onPull={action('触发了下拉刷新')}>
  {list.map(item=>{
    return <p key={item}>{item}</p>
  })}
</Scroll>`}
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
              <th> onPull</th>
              <th>下拉刷新后的回调事件</th>
              <th>-</th>
              <th>-</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

storiesOf("Scroll", module).add("默认Scroll", defaultScroll);
