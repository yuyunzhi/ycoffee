import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import "../../styles/index.scss";
import "../../styles/storybook.scss";
import Tree from "./tree";

const defaultTree = () => {
  const [array] = useState([
    {
      text: "你好1",
      value: "1",
      children: [
        {
          text: "你好1.1",
          value: "1.1",
          children: [
            { text: "你好1.1.1", value: "1.1.1" },
            { text: "你好1.1.2", value: "1.1.2" },
          ],
        },
        { text: "你好1.2", value: "1.2" },
      ],
    },
    {
      text: "你好11",
      value: "11",
    },
    {
      text: "你好2",
      value: "2",
      children: [
        { text: "你好2.1", value: "2.1" },
        { text: "你好2.2", value: "2.2" },
      ],
    },
  ]);

  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  return (
    <div className="story-container">
      <div className="story-header">Tree 树选择器</div>
      <div className="story-demo-box">
        <div className="story-demo-main">
          <div className="story-content">
            <div>
              <Tree
                defaultExpandAll={true}
                sourceData={array}
                selected={selectedValues}
                onChange={(value: string[]) => setSelectedValues(value)}
                multiple={true}
              />
            </div>
          </div>
          <div className="story-desc">
            <a className="story-desc-title">基础</a>
            <div>Tree组件基础功能</div>
          </div>
          <div className="story-code">
            <pre>
              <code className="story-code-hljs">
                {`const [array] = useState([
 {
      text: "你好1",
      value: "1",
      children: [
        {
          text: "你好1.1",
          value: "1.1",
          children: [
            { text: "你好1.1.1", value: "1.1.1" },
            { text: "你好1.1.2", value: "1.1.2" },
          ],
        },
        { text: "你好1.2", value: "1.2" },
      ],
    },
    {
      text: "你好11",
      value: "11",
    },
    {
      text: "你好2",
      value: "2",
      children: [
        { text: "你好2.1", value: "2.1" },
        { text: "你好2.2", value: "2.2" },
      ],
    },
  ]);

  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  <Tree
    defaultExpandAll={true}
    sourceData={array}
    selected={selectedValues}
    onChange={(value: string[]) => setSelectedValues(value)}
    multiple={true}
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
              <th>defaultExpandAll</th>
              <th>是否默认展开全部节点</th>
              <th>boolean</th>
              <th>false</th>
            </tr>
            <tr>
              <th>multiple</th>
              <th>是单选还是对选</th>
              <th>boolean</th>
              <th>false</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

storiesOf("Tree", module).add("默认Tree", defaultTree);
