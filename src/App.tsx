import React from 'react';
import Button , { ButtonSize,ButtonType} from './components/Button/button'

function App() {
  return (
    <div className="App">
        <h1>hello world</h1>
        <code>
            const a = b
        </code>
        <Button> 你好</Button>
        <Button disabled > 你好</Button>
        <Button btnType={'primary'} size={'lg'}> 你好</Button>
        <Button btnType='link' href='https://www.baidu.com' disabled> 你好</Button>
    </div>
  );
}

export default App;
