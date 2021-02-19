import React, { FC } from "react";
import classNames from "classnames";

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Aside: FC<Props> = (props) => {
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
