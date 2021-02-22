import React, { FC } from "react";
import "./check.scss";
import { InputHTMLAttributes } from "react";
import classes, { createScopedClasses } from "../../utils/classes";
const componentName = "Check";
const sc = createScopedClasses(componentName);

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Check: FC<IProps> = (props) => {
  const { className, checked, children, ...restProps } = props;
  return (
    <label className={sc("wrapper")}>
      <span className={classes(sc("", { checked }), className)}>
        <input
          {...restProps}
          className={sc("input")}
          type="checkbox"
          checked={checked}
        />
      </span>
      <span className={sc("label")}>{children}</span>
    </label>
  );
};
Check.displayName = componentName;
Check.defaultProps = {};
Check.propTypes = {};
export default Check;
