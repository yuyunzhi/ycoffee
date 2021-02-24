import React, { useState } from "react";
import Upload from "./components/Upload/upload";
// import Pager from './components/Pager/pager'
// import Radio from './components/Radio/radio'
import Icon from "./components/Icon";
function App() {
  const [currentPager, setCurrentPager] = useState(1);
  const onChange = (a: any) => {
    console.log(a);
    setCurrentPager(a);
  };

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
  const checkFileSize = (file: File) => {
    if (Math.round(file.size / 1024) > 50) {
      alert("file too big");
      return false;
    }
    return true;
  }; /**/
  const filePromise = (file: File) => {
    const newFile = new File([file], "new_name.docx", { type: file.type });
    return Promise.resolve(newFile);
  };

  return (
    <div className="App">
      {/*<TreeExample />*/}
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        onChange={uploadOnChange}
        onRemove={uploadOnRemove}
        name="fileName"
        multiple
        drag
        defaultFileList={defaultFileList}
      >
        <Icon icon="upload" size="5x" theme="primary" />
        <br />
        <p>Drag file over to upload</p>
      </Upload>
      {/*<Pager current={currentPager} total={90} onChange={onChange}/>*/}
    </div>
  );
}

export default App;
