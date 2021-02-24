import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import "../../styles/index.scss";
import "../../styles/storybook.scss";
import Button from "../Button";
import cityList from "../../utils/cityList";
import Checkbox from "./checkbox";
import Check from "./checkbox";

const defaultCheckbox = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [indeterminate, setIndeterminate] = useState<boolean>(true);
  const [checked1, setChecked1] = useState<boolean>(false);

  return (
    <div className="story-container">
      <div className="story-header">Checkbox 选择框</div>
      <div className="story-demo-box">
        <div className="story-demo-main">
          <div className="story-content">
            <div>
              <Check checked={checked} onClick={() => setChecked(!checked)}>
                Check
              </Check>
            </div>
          </div>
          <div className="story-desc">
            <a className="story-desc-title">基础</a>
            <div>checked 来控制是否选中</div>
          </div>
          <div className="story-code">
            <pre>
              <code className="story-code-hljs">
                {`<Check checked={checked} onClick={() => setChecked(!checked)}>Check</Check>`}
              </code>
            </pre>
          </div>
          <div className="story-liner"></div>
        </div>
        <div className="story-demo-main">
          <div className="story-content">
            <div>
              <Check
                checked={checked1}
                indeterminate={indeterminate}
                onClick={() => {
                  setIndeterminate(false);
                  setChecked1(!checked1);
                }}
              >
                Check
              </Check>
            </div>
          </div>
          <div className="story-desc">
            <a className="story-desc-title">基础</a>
            <div>indeterminate 来控制是否半选</div>
          </div>
          <div className="story-code">
            <pre>
              <code className="story-code-hljs">
                {`<Check 
checked={checked} 
indeterminate={indeterminate} 
onClick={() => {
    setIndeterminate(false)
    setChecked(!checked)
}}>Check</Check>`}
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
              <th>checked</th>
              <th>是否选中</th>
              <th>boolean</th>
              <th>false</th>
            </tr>
            <tr>
              <th>indeterminate</th>
              <th>是否半选</th>
              <th>boolean</th>
              <th>false</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

storiesOf("Checkbox", module).add("默认Checkbox", defaultCheckbox);
