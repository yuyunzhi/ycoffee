import React, { ReactElement, InputHTMLAttributes, ChangeEvent } from 'react'
import classNames from 'classnames'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Icon from '../Icon/icon'

type InputSize = 'lg' | 'sm'
type IconPositionProps = 'left' | 'right'
// Omit是为了处理 剔除 InputHTMLAttributes 里的 size 属性
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  /**是否禁用 Input */
  disabled?: boolean
  /**设置 input 大小，支持 lg 或者是 sm */
  size?: InputSize
  /**添加图标，在右侧悬浮添加一个图标，用于提示 */
  icon?: IconProp
  /**添加前缀 用于配置一些固定组合 */
  prepend?: string | ReactElement
  /**添加后缀 用于配置一些固定组合 */
  append?: string | ReactElement
  iconPosition?: IconPositionProps
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<InputProps> = (props) => {
  const {
    disabled,
    size,
    icon,
    prepend,
    append,
    style,
    iconPosition,
    ...restProps
  } = props

  const classes = classNames('yc-input-wrapper', {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend || append,
    'input-group-append': !!append,
    'input-group-prepend': !!prepend
  })

  const iconPositionClasses = classNames('icon-wrapper', {
    [`yc-icon-${iconPosition}`]: iconPosition // 控制图标的位置样式
  })

  const inputInnerClasses = classNames('yc-input-inner', {
    [`icon-${iconPosition}`]: icon //控制当有icon的时候样式
  })

  const fixControlledValue = (value: any) => {
    if (typeof value === 'undefined' || value === null) {
      return ''
    }
    return value
  }
  if ('value' in props) {
    delete restProps.defaultValue
    restProps.value = fixControlledValue(props.value)
  }

  return (
    <div className={classes} style={style}>
      {prepend && <div className="yc-input-group-prepend">{prepend}</div>}
      {icon && (
        <div className={iconPositionClasses}>
          <Icon icon={icon} title={`title-${icon}`} />
        </div>
      )}
      <input className={inputInnerClasses} disabled={disabled} {...restProps} />
      {append && <div className="yc-input-group-append">{append}</div>}
    </div>
  )
}
Input.defaultProps = {
  iconPosition: 'right'
}
export default Input
