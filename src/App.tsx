import React, { useState } from "react";

import Breadcrumb, { BI, Renderer } from "./components/Breadcrumb/breadcrumb";
// import Pager from './components/Pager/pager'
// import Radio from './components/Radio/radio'
function App() {
  const renderer = () => {};
  const [currentPager, setCurrentPager] = useState(1);
  const onChange = (a: any) => {
    console.log(a);
    setCurrentPager(a);
  };

  return (
    <div className="App">
      {/*<TreeExample />*/}

      <Breadcrumb
        routes={[
          { text: "首页", link: "www.baidu.com" },
          { text: "第一页", link: "www.baidu.com" },
          {
            text: "第二页",
            link: "www.baidu.com",
          },
        ]}
      />

      {/*<Pager current={currentPager} total={90} onChange={onChange}/>*/}
    </div>
  );
}

export default App;
