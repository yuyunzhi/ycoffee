import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import "../../styles/index.scss";
import "../../styles/storybook.scss";
import "./layout.example.scss";

import Layout from "./layout";
import Header from "./header";
import Footer from "./footer";
import Aside from "./aside";
import Content from "./content";

const defaultLayout = () => (
  <div className="story-container">
    <div className="story-header">Button 按钮</div>
    <div className="story-demo-box">
      <div className="story-demo-main">
        <div className="story-content">
          <div>
            <Layout style={{ height: 400, width: "100%" }}>
              <Header className="header-or-footer">header</Header>
              <Content className="content">content</Content>
              <Footer className="header-or-footer">footer</Footer>
            </Layout>
          </div>
        </div>
        <div className="story-desc">
          <a className="story-desc-title">基础</a>
          <div>布局一:见代码展示</div>
        </div>
        <div className="story-code">
          <pre>
            <code className="story-code-hljs">
              {`<Layout style={{height: 400, width: '100%'}}>
    <Header className="header-or-footer">header</Header>
    <Content className="content">content</Content>
    <Footer className="header-or-footer">footer</Footer>
</Layout>`}
            </code>
          </pre>
        </div>
        <div className="story-liner"></div>
      </div>
      <div className="story-demo-main">
        <div className="story-content">
          <div>
            <Layout style={{ height: 400, width: "100%" }}>
              <Header className="header-or-footer">header</Header>
              <Layout>
                <Aside className="aside">aside</Aside>
                <Content className="content">content</Content>
              </Layout>
              <Footer className="header-or-footer">footer</Footer>
            </Layout>
          </div>
        </div>
        <div className="story-desc">
          <a className="story-desc-title">基础</a>
          <div>布局二：见代码展示</div>
        </div>
        <div className="story-code">
          <pre>
            <code className="story-code-hljs">
              {`  <Layout style={{height: 400, width: '100%'}}>
    <Header className="header-or-footer">header</Header>
    <Layout>
      <Aside className="aside">aside</Aside>
      <Content className="content">content</Content>
    </Layout>
    <Footer className="header-or-footer">footer</Footer>
</Layout>`}
            </code>
          </pre>
        </div>
        <div className="story-liner"></div>
      </div>
      <div className="story-demo-main">
        <div className="story-content">
          <div>
            <Layout style={{ height: 400, width: "100%" }}>
              <Header className="header-or-footer">header</Header>
              <Layout>
                <Content className="content">content</Content>
                <Aside className="aside">aside</Aside>
              </Layout>
              <Footer className="header-or-footer">footer</Footer>
            </Layout>
          </div>
        </div>
        <div className="story-desc">
          <a className="story-desc-title">基础</a>
          <div>布局三：见代码展示</div>
        </div>
        <div className="story-code">
          <pre>
            <code className="story-code-hljs">
              {`  <Layout style={{height: 400, width: '100%'}}>
    <Header className="header-or-footer">header</Header>
    <Layout>
      <Content className="content">content</Content>
      <Aside className="aside">aside</Aside>
    </Layout>
    <Footer className="header-or-footer">footer</Footer>
</Layout>`}
            </code>
          </pre>
        </div>
        <div className="story-liner"></div>
      </div>
      <div className="story-demo-main">
        <div className="story-content">
          <div>
            <Layout style={{ height: 400, width: "100%" }}>
              <Aside className="aside">aside</Aside>
              <Layout>
                <Header className="header-or-footer">header</Header>
                <Content className="content">content</Content>
                <Footer className="header-or-footer">footer</Footer>
              </Layout>
            </Layout>
          </div>
        </div>
        <div className="story-desc">
          <a className="story-desc-title">基础</a>
          <div>布局四：见代码展示</div>
        </div>
        <div className="story-code">
          <pre>
            <code className="story-code-hljs">
              {`<Layout style={{height: 400, width: '100%'}}>
  <Aside className="aside">aside</Aside>
  <Layout>
    <Header className="header-or-footer">header</Header>
    <Content className="content">content</Content>
    <Footer className="header-or-footer">footer</Footer>
  </Layout>
</Layout>`}
            </code>
          </pre>
        </div>
        <div className="story-liner"></div>
      </div>
    </div>
  </div>
);

storiesOf("Layout", module).add("Layout按钮", defaultLayout);
