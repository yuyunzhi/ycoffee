// import Icon from "./components/Icon/icon";
// import { Upload } from "./components/Upload/upload";
import Button from "./components/Button/index";

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
      </div>,
      [
        <Button onClick={() => close()} style={{ marginRight: "10px" }}>
          取消
        </Button>,
        <Button btnType="primary" onClick={() => close()}>
          确定
        </Button>,
      ],
      () => {
        console.log("123关闭成功");
      }
    );
  };

  return (
    <div className="App">
      <div>
        <h1>example 4</h1>
        <Button onClick={openModal}>modal</Button>
      </div>

      <div>
        <h1>example 3</h1>
        <Button onClick={() => alert("1")}>alert</Button>
        <Button
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
        </Button>
      </div>

      {/*<div style={{position: 'relative', zIndex: 1, border: '1px solid red', color: 'red'}}>*/}
      {/*  <h1>example 1</h1>*/}
      {/*  <Button onClick={() => setX(!x)}>click</Button>*/}
      {/*  <Dialog visible={x} buttons={*/}
      {/*    [*/}
      {/*      <Button onClick={() => {setX(false);}} style={{marginRight:'10px'}}>取消</Button>,*/}
      {/*      <Button btnType="primary" onClick={() => {setX(false);}}>确定</Button>*/}
      {/*    ]*/}
      {/*  } onClose={() => {setX(false);}}>*/}
      {/*    <strong>hi</strong>*/}
      {/*  </Dialog>*/}
      {/*</div>*/}

      <div style={{ position: "relative", zIndex: 1 }}>
        <h1>example 2</h1>
        <Button onClick={() => setY(!y)}>click</Button>
        <Dialog
          visible={y}
          closeOnClickMask={true}
          buttons={[
            <Button
              onClick={() => {
                setY(false);
              }}
            >
              1
            </Button>,
            <Button
              onClick={() => {
                setY(false);
              }}
            >
              2
            </Button>,
          ]}
          onClose={() => {
            setY(false);
          }}
        >
          <strong>hi</strong>
        </Dialog>
      </div>
    </div>
  );
}

export default App;
