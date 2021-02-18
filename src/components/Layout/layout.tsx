import React, { ReactElement } from "react";
import Aside from "./aside";
import classNames from "classnames";

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>;
}

const Layout: React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props;
  const children = props.children as Array<ReactElement>;

  const hasAside =
    children.length > 0 &&
    children.reduce((result, node) => {
      return result || node.type === Aside;
    }, false);

  const layoutClassName = classNames("yc-layout", className, {
    hasAside,
  });

  return (
    <div className={layoutClassName} {...rest}>
      {props.children}
    </div>
  );
};

export default Layout;
export { Layout };
export { default as Header } from "./header";
export { default as Content } from "./content";
export { default as Footer } from "./footer";
export { default as Aside } from "./aside";
