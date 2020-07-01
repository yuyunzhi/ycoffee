import React from 'react';
import Button , { ButtonSize,ButtonType} from './components/Button/button'
import Icon from './components/Icon/icon'

function App() {
    const onClick=()=>{
        console.log(123)
    }
  return (
    <div className="App">
        <div>
            <Button onClick={onClick} >你好</Button>
            <Button disabled > 你好</Button>
            <Button btnType={'danger'} size={'lg'}> 你好</Button>
            <Button className='custom' > 你好</Button>
            <Button btnType={'primary'} size={'lg'} style={{display:'flex',flexDirection:'row'}}>
                <Icon icon="spinner" spin color="white" size="sm" style={{marginRight:'8px'}}></Icon>
                你好
            </Button>
            <Button btnType='link' href='https://www.baidu.com' disabled> 你好</Button>
            <Button btnType='link' href='https://www.baidu.com' target='_blank'> 你好</Button>
        </div>
      <hr/>
        <div>
            <Icon icon="spinner" spin theme="success" size="3x"></Icon>
        </div>
    </div>
  );
}

export default App;
