import React from "react";
import { storiesOf } from "@storybook/react";
import "../../styles/index.scss";
import "../../styles/storybook.scss";
import Upload from "./upload";
import Icon from "../Icon";

const defaultUpload = () => {
  const uploadOnChange = (e: any) => {
    console.log(`[uploadOnChange]`, e);
  };
  const uploadOnRemove = (e: any) => {
    console.log(`[uploadOnRemove]`, e);
  };

  const defaultFileList: any[] = [
    {
      uid: "123",
      size: 1234,
      name: "hello.md",
      status: "uploading",
      percent: 30,
    },
    { uid: "122", size: 1234, name: "xyz.md", status: "success", percent: 30 },
    { uid: "121", size: 1234, name: "eyiha.md", status: "error", percent: 30 },
  ];

  return (
    <div className="story-container">
      <div className="story-header">Upload 上传</div>
      <div className="story-demo-box">
        <div className="story-demo-main">
          <div className="story-content">
            <div>
              <Upload
                action="https://www.upload.domain"
                onChange={uploadOnChange}
                onRemove={uploadOnRemove}
                name="fileName"
                multiple
                drag
              >
                <Icon icon="upload" size="5x" theme="primary" />
                <br />
                <p>Drag file over to upload</p>
              </Upload>
            </div>
          </div>
          <div className="story-desc">
            <a className="story-desc-title">基础</a>
            <div>上传的基础用法</div>
          </div>
          <div className="story-code">
            <pre>
              <code className="story-code-hljs">
                {`<Upload
    action="https://www.upload.domain"
    onChange={uploadOnChange}
    onRemove={uploadOnRemove}
    name="fileName"
    multiple
    drag
>
  <Icon icon="upload" size="5x" theme="primary" />
  <br/>
  <p>Drag file over to upload</p>
</Upload>`}
              </code>
            </pre>
          </div>
          <div className="story-liner"></div>
        </div>
        <div className="story-demo-main">
          <div className="story-content">
            <div>
              <Upload
                action="https://www.upload.domain"
                onChange={uploadOnChange}
                onRemove={uploadOnRemove}
                name="fileName"
                multiple
                defaultFileList={defaultFileList}
                drag
              >
                <Icon icon="upload" size="5x" theme="primary" />
                <br />
                <p>Drag file over to upload</p>
              </Upload>
            </div>
          </div>
          <div className="story-desc">
            <a className="story-desc-title">基础</a>
            <div>上传的基础用法</div>
          </div>
          <div className="story-code">
            <pre>
              <code className="story-code-hljs">
                {`const defaultFileList = [
    {uid: '123', size: 1234, name: 'hello.md', status: 'uploading', percent: 30},
    {uid: '122', size: 1234, name: 'xyz.md', status: 'success', percent: 30},
    {uid: '121', size: 1234, name: 'eyiha.md', status: 'error', percent: 30}
]
<Upload
    action="https://www.upload.domain"
    onChange={uploadOnChange}
    onRemove={uploadOnRemove}
    defaultFileList={defaultFileList}
    name="fileName"
    multiple
    drag
>
  <Icon icon="upload" size="5x" theme="primary" />
  <br/>
  <p>Drag file over to upload</p>
</Upload>`}
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
              <th>accept</th>
              <th>接收文件的类型</th>
              <th>string</th>
              <th>-</th>
            </tr>

            <tr>
              <th>multiple</th>
              <th>单文件或文件上传</th>
              <th>boolean</th>
              <th>false</th>
            </tr>

            <tr>
              <th>drag</th>
              <th>是否添加拖动</th>
              <th>boolean</th>
              <th>false</th>
            </tr>

            <tr>
              <th>action</th>
              <th>上传服务器地址</th>
              <th>string</th>
              <th>-</th>
            </tr>

            <tr>
              <th>headers</th>
              <th>添加请求header</th>
              <th> [key: string]: any</th>
              <th>-</th>
            </tr>

            <tr>
              <th>defaultFileList</th>
              <th>默认的图片列表</th>
              <th>UploadFile[]</th>
              <th>-</th>
            </tr>

            <tr>
              <th>beforeUpload</th>
              <th>上传前的生命周期</th>
              <th>(file: File) =&gt; boolean | Promise</th>
              <th>-</th>
            </tr>

            <tr>
              <th>onProgress</th>
              <th>对上传进度的监听</th>
              <th>(percentage: number, file: File) =&gt; void</th>
              <th>-</th>
            </tr>

            <tr>
              <th>onProgress</th>
              <th>对上传进度的监听</th>
              <th>(percentage: number, file: File) =&gt; void</th>
              <th>-</th>
            </tr>

            <tr>
              <th>onSuccess</th>
              <th>上传成功的回调</th>
              <th>(data: any, file: File) =&gt; void</th>
              <th>-</th>
            </tr>

            <tr>
              <th>onError</th>
              <th>上传失败的回调</th>
              <th>(err: any, file: File) =&gt; void</th>
              <th>-</th>
            </tr>

            <tr>
              <th>onChange</th>
              <th>上传变化的监听</th>
              <th>(file: File) =&gt; void</th>
              <th>-</th>
            </tr>

            <tr>
              <th>onRemove</th>
              <th>删除列表的监听</th>
              <th>(file: File) =&gt; void</th>
              <th>-</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

storiesOf("Upload", module).add("默认Upload", defaultUpload);
