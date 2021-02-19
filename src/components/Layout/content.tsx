import React, { FC } from "react";
import classNames from "classnames";

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Content: FC<Props> = (props) => {
  const { className, ...rest } = props;
  const contentClassName = classNames("yc-layout-content", className);

  return (
    <div className={contentClassName} {...rest}>
      {props.children}
    </div>
  );
};
Content.displayName = "Content";
export default Content;
