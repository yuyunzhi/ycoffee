import React from 'react';
import Button from './components/Button/button'
import Icon from './components/Icon/icon'

function App() {
    const onClick=()=>{
        console.log(123)
    }
  return (
    <div className="App">
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <Button onClick={onClick} >按钮</Button>
            <Button disabled > 按钮</Button>
            <Button btnType={'danger'} size={'lg'}> 按钮</Button>
            <Button className='custom' > 按钮</Button>
            <Button btnType={'primary'} size={'lg'} style={{display:'flex',flexDirection:'row'}}>
                <Icon icon="spinner" spin={true} color="white" size="sm" style={{marginRight:'8px'}}/>
                按钮
            </Button>

            <Button btnType={'primary'} >
                <Icon icon="align-left"  color="white" size="sm" style={{margin:'0 5px'}}/>
            </Button>

            <Button btnType={'primary'} >
                <Icon icon="stop"  color="white" size="sm" style={{margin:'0 5px'}}/>
            </Button>

            <Button btnType='link' href='https://www.baidu.com' disabled> 按钮</Button>
            <Button btnType='link' href='https://www.baidu.com' target='_blank'> 按钮</Button>
        </div>
      <hr/>
        <div style={{display:'flex',flexDirection:'row'}}>
            <Icon icon="spinner" spin theme={'success'} size="3x" style={{marginRight:'8px'}}/>
            <Icon icon="ad" theme={'danger'} size="3x" style={{marginRight:'8px'}}/>
            <Icon icon="inbox" theme={'info'} size="3x" style={{marginRight:'8px'}}/>
            <Icon icon="baby" theme={'info'} size="3x" style={{marginRight:'8px'}}/>
        </div>
      <hr/>
    </div>
  );
}

export default App;
