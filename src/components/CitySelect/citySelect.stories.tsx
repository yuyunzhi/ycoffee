import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import "../../styles/index.scss";
import "../../styles/storybook.scss";
import Button from "../Button";
import cityList from "../../utils/cityList";
import CitySelect from "./citySelect";

const defaultCitySelect = () => (
  <div className="story-container">
    <div className="story-header">CitySelect 城市选择器</div>
    <div className="story-demo-box">
      <div className="story-demo-main">
        <div className="story-content">
          <div>
            <CitySelect
              dataSource={cityList}
              onChange={(cityName) => {
                action(cityName);
              }}
            >
              <Button>选择城市</Button>
            </CitySelect>
          </div>
        </div>
        <div className="story-desc">
          <a className="story-desc-title">基础</a>
          <div>pc端城市选择组件</div>
        </div>
        <div className="story-code">
          <pre>
            <code className="story-code-hljs">
              {`<CitySelect
    dataSource={cityList}
    onChange={(cityName) => {
      action(cityName);
    }}
>
  <Button>选择城市</Button>
</CitySelect>`}
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
            <th> dataSource</th>
            <th>传入包含城市的中文字符串数组：["上海","北京","深圳","广州"]</th>
            <th>string[]</th>
            <th>-</th>
          </tr>
          <tr>
            <th>onChange</th>
            <th>点击具体城市触发的事件</th>
            <th>(cityName: string) =&gt; void;</th>
            <th>-</th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

storiesOf("CitySelect", module).add("默认CitySelect", defaultCitySelect);
