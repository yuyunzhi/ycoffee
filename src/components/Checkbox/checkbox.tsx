import React, { FC, forwardRef, InputHTMLAttributes } from "react";
import classNames from "classnames";

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: any;
  enable?: boolean;
  indeterminate?: boolean;
}

const Checkbox: FC<IProps> = forwardRef((props, ref) => {
  const { className, checked, children, ...restProps } = props;

  // const spanClassName = classNames("yc-check", className, {
  //   "yc-check-checked": checked,
  //   "yc-check-indeterminate":true
  // });

  const spanClassName = classNames("yc-checkbox", className, {
    "yc-checkbox-checked": checked,
  });

  return (
    <label className="yc-checkbox-wrapper">
      <span className={spanClassName}>
        <input
          ref={ref}
          className="yc-checkbox-input"
          type="checkbox"
          checked={checked}
          {...restProps}
        />
        <span className="yc-checkbox-inner" />
      </span>
      <span className="yc-check-label">{children}</span>
    </label>
  );
});
Checkbox.displayName = "Check";
Checkbox.defaultProps = {};
Checkbox.propTypes = {};
export default Checkbox;
