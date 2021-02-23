import React, { ReactChild, useState } from "react";
import Button from "./components/Button/index";
import TreeExample from "./components/Tree/tree.example";
import Check from "./components/Checkbox/checkbox";
// import Breadcrumb, {BI, Renderer} from './components/Breadcrumb/breadcrumb'
// import Pager from './components/Pager/pager'
// import Radio from './components/Radio/radio'
function App() {
  const renderer = () => {};
  const [currentPager, setCurrentPager] = useState(1);
  const onChange = (a: any) => {
    console.log(a);
    setCurrentPager(a);
  };

  const [isChecked, setIsChecked] = useState<boolean>(true);
  console.log(isChecked);
  return (
    <div className="App">
      {/*<Button>按钮</Button>*/}
      {/*<TreeExample />*/}
      <Check checked={isChecked} onClick={() => setIsChecked(!isChecked)}>
        {" "}
        123123
      </Check>

      {/*<Radio checked>哈哈哈哈</Radio>*/}
      {/*<Breadcrumb routes={[{text: '1', link: 'www.baidu.com'}, {text: '2', link: 'www.baidu.com'}, {*/}
      {/*  text: '3',*/}
      {/*  link: 'www.baidu.com'*/}
      {/*}]}/>*/}

      {/*<Pager current={currentPager} total={90} onChange={onChange}/>*/}
    </div>
  );
}

export default App;
