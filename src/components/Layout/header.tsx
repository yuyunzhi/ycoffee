import React from "react";
import classNames from "classnames";

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Header: React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props;
  const headerClassName = classNames("yc-layout-header", className);
  return (
    <div className={headerClassName} {...rest}>
      {props.children}
    </div>
  );
};

Header.displayName = "Header";
export default Header;
