import React from "react";

import Button from "./components/Button/index";
import TransMenu from "./components/Menu";

function App() {
  // const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins',
  //     'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando','bradley', 'pope', 'caruso', 'cook', 'cousins',
  //     'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']

  // const defaultFileList: UploadFile[] = [
  //   { uid: '123', size: 1234, name: 'hello.md', status: 'uploading', percent: 30 },
  //   { uid: '122', size: 1234, name: 'xyz.md', status: 'success', percent: 30 },
  //   { uid: '121', size: 1234, name: 'eyiha.md', status: 'error', percent: 30 }
  // ]
  // const checkFileSize = (file: File) => {
  //   if (Math.round(file.size / 1024) > 50) {
  //     alert('file too big')
  //     return false;
  //   }
  //   return true;
  // }
  // const filePromise = (file: File) => {
  //   const newFile = new File([file], 'new_name.docx', {type: file.type})
  //   return Promise.resolve(newFile)
  // }

  const xxx = (e: any) => {
    console.log(e);
  };
  return (
    <div className="App">
      <Button size="sm">按钮</Button>

      <TransMenu
        onSelect={xxx}
        defaultName="a"
        mode="horizontal"
        defaultOpenSubMenus={["3"]}
      >
        <TransMenu.Item name="0" disabled>
          link0
        </TransMenu.Item>
        <TransMenu.Item name="1">link1</TransMenu.Item>
        <TransMenu.Item name="2">link2</TransMenu.Item>
        <TransMenu.SubMenu name="3" title={"二级"}>
          <TransMenu.Item name="3-1">link3</TransMenu.Item>
          <TransMenu.Item name="3-2">link4</TransMenu.Item>
        </TransMenu.SubMenu>
      </TransMenu>

      {/*<Upload*/}
      {/*  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"*/}
      {/*  onChange={uploadOnChange}*/}
      {/*  onRemove={uploadOnRemove}*/}
      {/*  name="fileName"*/}
      {/*  multiple*/}
      {/*  drag*/}
      {/*>*/}
      {/*  <Icon icon="upload" size="5x" theme="primary" />*/}
      {/*  <br />*/}
      {/*  <p>Drag file over to upload</p>*/}
      {/*</Upload>*/}
    </div>
  );
}

export default App;
