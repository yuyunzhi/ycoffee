import React from 'react';
// import Progress from "./components/Progress/progress";
// import AutoComplete from "./components/AutoComplete/autoComplete";
import Icon from './components/Icon/icon'
import { Upload } from './components/Upload/upload'
// interface LakerPlayerProps {
//     value: string;
//     number: number;
// }
// interface GithubUserProps {
//     login: string;
//     url: string;
//     avatar_url: string;
// }

function App() {

    // const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins',
    //     'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando','bradley', 'pope', 'caruso', 'cook', 'cousins',
    //     'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']

    // const lakersWithNumber = [
    //   {value: 'bradley', number: 11},
    //   {value: 'pope', number: 1},
    //   {value: 'caruso', number: 4},
    //   {value: 'cook', number: 2},
    //   {value: 'cousins', number: 15},
    //   {value: 'james', number: 23},
    //   {value: 'AD', number: 3},
    //   {value: 'green', number: 14},
    //   {value: 'howard', number: 39},
    //   {value: 'kuzma', number: 0},
    // ]

    // const handleFetch = (query: string) => {
    //   return lakers.filter(name => name.includes(query)).map(name => ({value: name}))
    // }

    // const handleFetch = (query: string) => {
    //   return lakersWithNumber.filter(player => player.value.includes(query))
    // }

    // const select = (obj:any)=>{
    //     console.log(obj);
    // }

    const uploadOnChange = (e:any)=>{
        console.log(`[uploadOnChange]`,e);
    }
    const uploadOnRemove = (e:any) =>{
        console.log(`[uploadOnRemove]`,e);
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
        {/*<Progress percent={40}  styles={{width:'50%'}}/>*/}
        {/*<hr/>*/}
        {/*<Progress percent={20} strokeHeight={20} styles={{width:'50%'}}/>*/}
        {/*<hr/>*/}
        {/*<Progress percent={100} strokeHeight={30} textPosition={'out'} styles={{width:'50%'}}/>*/}
        {/*<hr/>*/}
        {/*<Progress percent={5} strokeHeight={30} textPosition={'out'} theme='danger' styles={{width:'50%'}} />*/}
        {/*<hr/>*/}
        {/*<AutoComplete*/}
        {/*    style={{width:'50%'}}*/}
        {/*    fetchSuggestions={handleFetch}*/}
        {/*    onSelect={select}*/}
        {/*    //renderOption={renderOption}*/}
        {/*/>*/}
        <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            onChange={uploadOnChange}
            onRemove={uploadOnRemove}
            name="fileName"
            multiple
            drag
        >
            <Icon icon="upload" size="5x" theme="primary" />
            <br/>
            <p>Drag file over to upload</p>
        </Upload>
    </div>
  );
}

export default App;
