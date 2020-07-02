import React,{ CSSProperties, createContext, useState }from 'react';
import classNames from "classnames";

type MenuMode = 'horizontal' | 'vertical'

export interface MenuProps {
    /**默认 active 的菜单项的索引值 */
    defaultIndex?: string;
    className?: string;
    /**菜单类型 横向或者纵向 */
    mode?: MenuMode;
    style?: CSSProperties;
    /**点击菜单项触发的回掉函数 */
    onSelect?: (selectedIndex: string | number) => void;
    /**设置子菜单的默认打开 只在纵向模式下生效 */
    defaultOpenSubMenus?: string[];
}
interface IMenuContext {
    index: string;
    onSelect?: (selectedIndex: string) => void;
    mode?: MenuMode;
    defaultOpenSubMenus?: string[];
}

export const MenuContext = createContext<IMenuContext>({index: '0'})

const Menu:React.FC<MenuProps> = (props)=>{
    const {className, defaultIndex, mode, style, onSelect, defaultOpenSubMenus, children} = props
    const [currentActive,setCurrentActive] = useState(defaultIndex)
    const classes = classNames('yc-menu',className,{
        [`menu-vertical`]:mode === 'vertical'
    })

    const handleClick = (index:string)=>{
        setCurrentActive(index)
        if(onSelect){
            onSelect(index)
        }
    }

    const passedContext : IMenuContext = {
        index:currentActive?currentActive:"0",
        onSelect:handleClick
    }

    console.log('passedContext',passedContext);
    return (
        <ul className={classes}>
            <MenuContext.Provider value={passedContext}>
                {children}
            </MenuContext.Provider>
        </ul>
    )
}

Menu.defaultProps={
    defaultIndex:"0",
    mode:'horizontal'
}

export default Menu
