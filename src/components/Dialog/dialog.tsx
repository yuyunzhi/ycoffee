import React, { Fragment, ReactElement, ReactNode } from "react";
import Icon from "../Icon";
import ReactDOM from "react-dom";
import Button from "../Button";

interface Props {
  visible: boolean;
  title?: string;
  buttons?: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean;
}

const Dialog: React.FunctionComponent<Props> = (props) => {
  const {
    onClose,
    visible,
    title,
    buttons,
    closeOnClickMask,
    children,
  } = props;

  const result = visible && (
    <>
      <div
        className="yc-dialog-mask"
        onClick={(e) => closeOnClickMask && onClose(e)}
      />
      <div className="yc-dialog">
        <div className="yc-dialog-close" onClick={(e) => onClose(e)}>
          <Icon
            icon="times"
            size="sm"
            theme="dark"
            className="yc-dialog-close-icon"
          />
        </div>
        <header className="yc-dialog-header">{title ? title : "提示"}</header>
        <main className="yc-dialog-main">{children}</main>
        {buttons && buttons.length > 0 && (
          <footer className="yc-dialog-footer">
            {buttons &&
              buttons.map((button, index) =>
                React.cloneElement(button, { key: index })
              )}
          </footer>
        )}
      </div>
    </>
  );
  return ReactDOM.createPortal(result, document.body);
};
Dialog.defaultProps = {
  closeOnClickMask: false,
};

const modal = (
  content: ReactNode,
  buttons?: Array<ReactElement>,
  afterClose?: () => void
) => {
  // 动态删除组件
  const close = () => {
    ReactDOM.render(
      React.cloneElement(component, { content: <div>123123</div> }),
      div
    );
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    afterClose && afterClose();
  };

  // 动态创建组件 并渲染
  const component = (
    <Dialog
      visible={true}
      buttons={buttons}
      onClose={() => {
        close();
      }}
    >
      {content}
    </Dialog>
  );
  const div = document.createElement("div");
  document.body.append(div);
  ReactDOM.render(component, div);
  return close;
};

const alert = (content: string) => {
  const button = (
    <Button onClick={() => close()} size="sm" btnType="primary">
      确定
    </Button>
  );
  const close = modal(content, [button]);
};

const confirm = (
  content: string,
  confirmFn?: () => void,
  cancelFn?: () => void
) => {
  const onYes = () => {
    close();
    confirmFn && confirmFn();
  };
  const onNo = () => {
    close();
    cancelFn && cancelFn();
  };

  const buttons = [
    <Button onClick={onNo} size="sm" className="yc-dialog-cancel-button">
      取消
    </Button>,
    <Button onClick={onYes} size="sm" btnType="primary">
      确定
    </Button>,
  ];

  const close = modal(content, buttons, cancelFn);
};

export { alert, confirm, modal };

export default Dialog;
