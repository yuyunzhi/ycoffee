import React from "react";
import classNames from "classnames";
import Content from "./content";

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Aside: React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props;
  const asideClassName = classNames("yc-layout-aside", className);

  return (
    <div className={asideClassName} {...rest}>
      {props.children}
    </div>
  );
};
Aside.displayName = "Aside";

export default Aside;
