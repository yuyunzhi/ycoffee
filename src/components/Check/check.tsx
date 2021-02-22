import React, { FC, forwardRef, InputHTMLAttributes } from "react";
import "./check.scss";
import classes, { createScopedClasses } from "../../utils/classes";
const componentName = "Check";
const sc = createScopedClasses(componentName);

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: any;
}

const Check: FC<IProps> = forwardRef((props, ref) => {
  const { className, checked, children, ...restProps } = props;
  return (
    <label className={sc("wrapper")}>
      <span className={classes(sc("", { checked }), className)}>
        <input
          ref={ref}
          {...restProps}
          className={sc("input")}
          type="checkbox"
          checked={checked}
        />
      </span>
      <span className={sc("label")}>{children}</span>
    </label>
  );
});
Check.displayName = componentName;
Check.defaultProps = {};
Check.propTypes = {};
export default Check;
