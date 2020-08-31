import React from 'react'
// import Progress from "./components/Progress/progress";
// import AutoComplete from "./components/AutoComplete/autoComplete";
import Icon from './components/Icon/icon'
import { Upload } from './components/Upload/upload'


function App() {
  // const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins',
  //     'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando','bradley', 'pope', 'caruso', 'cook', 'cousins',
  //     'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']

  const uploadOnChange = (e: any) => {
    console.log(`[uploadOnChange]`, e)
  }
  const uploadOnRemove = (e: any) => {
    console.log(`[uploadOnRemove]`, e)
  }

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
  return (
    <div className="App">

      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
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
  )
}

export default App
