import React from "react";
import { storiesOf } from "@storybook/react";
import "../../styles/index.scss";
import "../../styles/storybook.scss";
import Breadcrumb from "./breadcrumb";

const defaultBreadcrumb = () => {
  const routes = [
    { text: "首页", link: "www.baidu.com" },
    { text: "第一页", link: "www.baidu.com" },
    { text: "第二页", link: "www.baidu.com" },
  ];
  return (
    <div className="story-container">
      <div className="story-header">Breadcrumb 面包屑</div>
      <div className="story-demo-box">
        <div className="story-demo-main">
          <div className="story-content">
            <div>
              <Breadcrumb routes={routes} />
            </div>
          </div>
          <div className="story-desc">
            <a className="story-desc-title">基础</a>
            <div>面包屑的基础用法</div>
          </div>
          <div className="story-code">
            <pre>
              <code className="story-code-hljs">
                {` const routes = [
  {text: '首页', link: 'www.baidu.com'},
  {text: '第一页', link: 'www.baidu.com'},
  {text: '第二页', link: 'www.baidu.com'}
]
<Breadcrumb routes={routes}/>`}
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
              <th>routes</th>
              <th>信息及路由数组，参考实例</th>
              <th>Array</th>
              <th>-</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

storiesOf("Breadcrumb", module).add("默认Breadcrumb", defaultBreadcrumb);
