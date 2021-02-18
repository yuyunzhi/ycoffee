import React from "react";
import classNames from "classnames";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

// 引入图标的interface props
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
library.add(fas);

export type ThemeProps =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "light"
  | "dark";

export interface BaseIconProps extends FontAwesomeIconProps {
  theme?: ThemeProps;
}

const Icon: React.FC<BaseIconProps> = (props) => {
  const { theme, className, ...restProps } = props;

  const classes = classNames("yc-icon", className, {
    [`icon-${theme}`]: theme,
  });
  return (
    <div>
      <FontAwesomeIcon className={classes} {...restProps} />
    </div>
  );
};
Icon.defaultProps = {
  theme: "primary",
};
export default Icon;
