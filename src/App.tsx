// import Icon from "./components/Icon/icon";
// import { Upload } from "./components/Upload/upload";
// import Button from "./components/Button/index";

import React, { useState } from "react";
// @ts-ignore
import Dialog, { alert, confirm, modal } from "./components/Dialog/dialog";

function App() {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);

  const openModal = () => {
    const close = modal(
      <div>
        <h1>你好</h1>
        <button onClick={() => close()}>close</button>
      </div>
    );
  };

  return (
    <div className="App">
      <div>
        <h1>example 4</h1>
        <button onClick={openModal}>modal</button>
      </div>

      <div>
        <h1>example 3</h1>
        <button onClick={() => alert("1")}>alert</button>
        <button
          onClick={() =>
            confirm(
              "1",
              () => {
                console.log("你点击了yes");
              },
              () => {
                console.log("你点击了no");
              }
            )
          }
        >
          confirm
        </button>
      </div>

      {/*<div style={{position: 'relative', zIndex: 10, border: '1px solid red', color: 'red'}}>*/}
      {/*  <h1>example 1</h1>*/}
      {/*  <button onClick={() => setX(!x)}>click</button>*/}
      {/*  <Dialog visible={x} buttons={*/}
      {/*    [*/}
      {/*      <button onClick={() => {setX(false);}}>1</button>,*/}
      {/*      <button onClick={() => {setX(false);}}>2</button>*/}
      {/*    ]*/}
      {/*  } onClose={() => {setX(false);}}>*/}
      {/*    <strong>hi</strong>*/}
      {/*  </Dialog>*/}
      {/*</div>*/}

      {/*<div style={{position: 'relative', zIndex: 9}}>*/}
      {/*  <h1>example 2</h1>*/}
      {/*  <button onClick={() => setY(!y)}>click</button>*/}
      {/*  <Dialog visible={y} closeOnClickMask={true} buttons={*/}
      {/*    [*/}
      {/*      <button onClick={() => {setY(false);}}>1</button>,*/}
      {/*      <button onClick={() => {setY(false);}}>2</button>*/}
      {/*    ]*/}
      {/*  } onClose={() => {setY(false);}}>*/}
      {/*    <strong>hi</strong>*/}
      {/*  </Dialog>*/}
      {/*</div>*/}
    </div>
  );
}

export default App;
