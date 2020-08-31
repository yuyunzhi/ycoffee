import React, { CSSProperties, createContext, useState } from 'react'
import classNames from 'classnames'
import { MenuItemProps } from './menuItem'

type MenuMode = 'horizontal' | 'vertical'

export interface MenuProps {
  /**默认 active 的菜单项的索引值 */
  defaultName: string
  className?: string
  /**菜单类型 横向或者纵向 */
  mode?: MenuMode
  style?: CSSProperties
  /**点击菜单项触发的回掉函数 */
  onSelect?: (selectedIndex: string | number) => void
  /**设置子菜单的默认打开 只在纵向模式下生效 */
  defaultOpenSubMenus?: string[]
}

interface IMenuContext {
  name: string
  onSelect?: (selectedIndex: string) => void
  mode?: MenuMode
  defaultOpenSubMenus?: string[]
}

export const MenuContext = createContext<IMenuContext>({ name: '0' })

const Menu: React.FC<MenuProps> = (props) => {
  const {
    className,
    defaultName,
    mode,
    style,
    onSelect,
    defaultOpenSubMenus,
    children
  } = props
  const [currentActive, setCurrentActive] = useState(defaultName)
  const classes = classNames('yc-menu', className, {
    [`menu-vertical`]: mode === 'vertical',
    [`menu-horizontal`]: mode !== 'vertical'
  })

  const handleClick = (name: string) => {
    setCurrentActive(name)
    if (onSelect) {
      onSelect(name)
    }
  }

  const passedContext: IMenuContext = {
    name: currentActive,
    onSelect: handleClick,
    defaultOpenSubMenus,
    mode
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<
        MenuItemProps
      >
      const { displayName } = childElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {
          name: childElement.props.name
        })
      } else {
        console.error(
          'Warning: Menu has a child which is not a MenuItem component'
        )
      }
    })
  }

  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  mode: 'horizontal'
}

export default Menu
