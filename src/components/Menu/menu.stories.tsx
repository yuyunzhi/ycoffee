import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import '../../styles/index.scss';
import "../../styles/storybook.scss"
import TransMenu  from './index'
import Menu from "./index";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";

const defaultMenu = () => (
    <div className='story-container'>
        <div className='story-header'>Menu 菜单</div>
        <div className='story-demo-box'>
            <div className='story-demo-main'>
                <div className='story-content'>
                    <TransMenu onSelect={action('选择的是哪个？')}
                               defaultName="a">
                        <TransMenu.Item name="a">
                            link0
                        </TransMenu.Item>
                        <TransMenu.Item name="b" disabled>
                            link1
                        </TransMenu.Item>
                        <TransMenu.Item name="c">
                            link2
                        </TransMenu.Item>
                        <TransMenu.SubMenu name="sub" title={"二级"} >
                            <TransMenu.Item name="d">
                                link3
                            </TransMenu.Item>
                            <TransMenu.Item name="e">
                                link4
                            </TransMenu.Item>
                        </TransMenu.SubMenu>
                    </TransMenu>
                </div>
                <div className='story-desc'>
                    <a className="story-desc-title">基础</a>
                    <div>该组件拥有defaultName默认的激活的菜单属性 和 onSelect 来监听选中的事件。使用name来标记哪个Item。拥有disabled来禁用某一项。</div>
                </div>
                <div className="story-code">
                        <pre>
                            <code className="story-code-hljs">
                                {
`<TransMenu onSelect={action('选择的是哪个？')}
    defaultName="a">
    <TransMenu.Item name="a">
        link0
    </TransMenu.Item>
    <TransMenu.Item name="b" disabled>
        link1
    </TransMenu.Item>
    <TransMenu.Item name="c">
        link2
    </TransMenu.Item>
    <TransMenu.SubMenu name="sub" title={"二级"} >
        <TransMenu.Item name="d">
            link3
        </TransMenu.Item>
        <TransMenu.Item name="e">
            link4
        </TransMenu.Item>
    </TransMenu.SubMenu>
</TransMenu>`
                                }
                            </code>
                        </pre>
                </div>
                <div className='story-liner'></div>

            </div>
            <div className='story-demo-main'>
                <div className='story-content'>
                    <TransMenu onSelect={action('选择的是哪个？')}
                               defaultName="a"
                               mode="vertical"
                               defaultOpenSubMenus={['sub']}
                    >
                        <TransMenu.Item name="a">
                            link0
                        </TransMenu.Item>
                        <TransMenu.Item name="b">
                            link1
                        </TransMenu.Item>
                        <TransMenu.Item name="c">
                            link2
                        </TransMenu.Item>
                        <TransMenu.SubMenu name="sub" title={"二级"} >
                            <TransMenu.Item name="d">
                                link3
                            </TransMenu.Item>
                            <TransMenu.Item name="e">
                                link4
                            </TransMenu.Item>
                        </TransMenu.SubMenu>
                    </TransMenu>
                </div>
                <div className='story-desc'>
                    <a className="story-desc-title">基础</a>
                    <div>该组件拥有mode属性设置样式水平或垂直，defaultOpenSubMenus 属性设置默认展开项，仅限于垂直样式。监听选中的事件。</div>
                </div>
                <div className="story-code">
                        <pre>
                            <code className="story-code-hljs">
                                {
`<TransMenu onSelect={action('选择的是哪个？')}
     defaultName="a"
     mode="vertical"
     defaultOpenSubMenus={['sub']}
 >
    <TransMenu.Item name="a">
        link0
    </TransMenu.Item>
    <TransMenu.Item name="b">
        link1
    </TransMenu.Item>
    <TransMenu.Item name="c">
        link2
    </TransMenu.Item>
    <TransMenu.SubMenu name="sub" title={"二级"} >
        <TransMenu.Item name="d">
            link3
        </TransMenu.Item>
        <TransMenu.Item name="e">
            link4
        </TransMenu.Item>
    </TransMenu.SubMenu>
</TransMenu>`
                                }
                            </code>
                        </pre>
                </div>
                <div className='story-liner'></div>

            </div>
        </div>

        <div className='story-api'>API</div>
        <div className='story-table-border'>
            <table>
                <tbody>
                <tr>
                    <th>属性</th>
                    <th>说明</th>
                    <th>类型</th>
                    <th>默认值</th>
                </tr>
                <tr>
                    <th>disabled</th>
                    <th>是否禁用</th>
                    <th>Boolean</th>
                    <th>false</th>
                </tr>
                <tr>
                    <th>defaultName</th>
                    <th>默认选中的菜单项</th>
                    <th>String</th>
                    <th>-</th>
                </tr>
                <tr>
                    <th>className</th>
                    <th>自定义className</th>
                    <th>String</th>
                    <th>-</th>
                </tr>
                <tr>
                    <th>style</th>
                    <th>自定义样式</th>
                    <th>Object</th>
                    <th>-</th>
                </tr>
                <tr>
                    <th>mode</th>
                    <th>样式:horizontal,vertical</th>
                    <th>String</th>
                    <th>horizontal</th>
                </tr>
                <tr>
                    <th>defaultOpenSubMenus</th>
                    <th>默认展开项，前提是mode为vertical</th>
                    <th>Array</th>
                    <th>-</th>
                </tr>
                <tr>
                    <th>onSelect</th>
                    <th>(name:string) => void</th>
                    <th>-</th>
                    <th>-</th>
                </tr>
                </tbody>
            </table>
        </div>



    </div>
)


storiesOf('Menu', module).add('Menu菜单', defaultMenu)
