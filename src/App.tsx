import React, { useState } from "react";

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
      {/*<Pager current={currentPager} total={90} onChange={onChange}/>*/}
    </div>
  );
}

export default App;
