import React, { FC, forwardRef, InputHTMLAttributes } from "react";
import classNames from "classnames";

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: any;
  indeterminate?: boolean;
}

const Checkbox: FC<IProps> = forwardRef((props, ref) => {
  const { className, checked, children, indeterminate, ...restProps } = props;

  const spanClassName = classNames("yc-checkbox", className, {
    "yc-checkbox-checked": !indeterminate && checked,
    "yc-checkbox-indeterminate": indeterminate,
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
      <span className="yc-checkbox-label">{children}</span>
    </label>
  );
});
Checkbox.displayName = "Checkbox";
Checkbox.defaultProps = {};
Checkbox.propTypes = {};
export default Checkbox;
