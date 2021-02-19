import React, { FC } from "react";
import classNames from "classnames";

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Footer: FC<Props> = (props) => {
  const { className, ...rest } = props;
  const footerClassName = classNames("yc-layout-footer", className);

  return (
    <div className={footerClassName} {...rest}>
      {props.children}
    </div>
  );
};
Footer.displayName = "Footer";
export default Footer;
