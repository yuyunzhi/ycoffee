import React from 'react';
import Button , { ButtonSize,ButtonType} from './components/Button/button'

function App() {
    const onClick=()=>{
        console.log(123)
    }
  return (
    <div className="App">
        <h1>hello world</h1>
        <code>
            const a = b
        </code>
        <Button onClick={onClick}> 你好</Button>
        <Button disabled > 你好</Button>
        <Button disabled > 你好</Button>
        <Button btnType={'danger'}> 你好</Button>
        <Button btnType={'primary'} size={'sm'}> 你好</Button>
        <Button btnType='link' href='https://www.baidu.com' disabled> 你好</Button>
        <Button btnType='link' href='https://www.baidu.com' > 你好</Button>
    </div>
  );
}

export default App;
