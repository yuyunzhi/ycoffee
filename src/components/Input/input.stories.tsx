import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import '../../styles/index.scss';
import "../../styles/storybook.scss"
import { Input } from './input'

const defaultInput = () => (
    <div className='story-container'>
        <div className='story-header'>Input 输入框</div>
        <div className='story-demo-box'>
            <div className='story-demo-main'>
                <div className='story-content'>
                    <div style={{width: '200px'}}>
                        <Input disabled placeholder='禁用' />
                    </div>
                     <hr style={{ background: 'transparent' }} />
                    <div style={{width: '200px'}}>
                        <Input readOnly defaultValue='这是默认值' />
                    </div>
                    <hr style={{ background: 'transparent' }} />
                    <div style={{width: '200px'}}>
                        <Input onChange={action('这是onChange事件监听')} placeholder="请输入内容……"/>
                    </div>
                </div>
                <div className='story-desc'>
                    <a className="story-desc-title">基础</a>
                    <div>该组件拥有input默认的基础属性,如：readOnly, defaultValue, disabled, placeholder ……, input宽度可自定义设置</div>
                </div>
                <div className="story-code">
                        <pre>
                            <code className="story-code-hljs">
                                {
`<Input disabled placeholder='禁用' />
<Input readOnly defaultValue='这是默认值' />
<Input onChange={action('这是onChange事件监听')} placeholder="请输入内容……"/>`
                                }
                            </code>
                        </pre>
                </div>
                <div className='story-liner'></div>

            </div>
            <div className='story-demo-main'>
                <div className='story-content'>
                    <div style={{width: '300px'}}>
                        <Input icon="people-arrows" iconPosition='left' placeholder="请输入内容" onChange={action('这是onChange事件监听')}/>
                        <hr style={{ background: 'transparent' }} />
                        <Input icon="search" placeholder="请输入内容" onChange={action('这是onChange事件监听')}/>
                    </div>

                </div>
                <div className='story-desc'>
                    <a className="story-desc-title">拥有图标</a>
                    <div>icon设置图标, iconPosition设置图标的位置</div>
                </div>
                <div className="story-code">
                        <pre>
                            <code className="story-code-hljs">
                                {
`<Input icon="people-arrows" iconPosition='left' placeholder="请输入内容" onChange={action('这是onChange事件监听')}/>
<Input icon="search" placeholder="请输入内容" onChange={action('这是onChange事件监听')}/>`
                                }
                            </code>
                        </pre>
                </div>
                <div className='story-liner'></div>

            </div>
            <div className='story-demo-main'>
                <div className='story-content'>
                    <div style={{width: '300px'}}>
                        <Input placeholder="大尺寸" size="lg"/>
                        <hr style={{ background: 'transparent' }} />

                        <Input placeholder="常规尺寸"/>
                        <hr style={{ background: 'transparent' }} />

                        <Input placeholder="小尺寸" size="sm"/>
                    </div>

                </div>
                <div className='story-desc'>
                    <a className="story-desc-title">尺寸大小</a>
                    <div>使用 size 属性来定义 Input 大小。提供了2种: lg, sm</div>
                </div>
                <div className="story-code">
                        <pre>
                            <code className="story-code-hljs">
                                {
`<Input placeholder="大尺寸" size="lg"/>
<Input placeholder="常规尺寸"/>
<Input placeholder="小尺寸" size="sm"/>`
                                }
                            </code>
                        </pre>
                </div>
                <div className='story-liner'></div>

            </div>
            <div className='story-demo-main'>
                <div className='story-content'>
                    <div style={{width: '300px'}}>
                        <Input defaultValue="prepend text" prepend="https://" />
                    <hr style={{ background: 'transparent' }} />

                        <Input append=".com" defaultValue="google"/>
                    </div>

                </div>
                <div className='story-desc'>
                    <a className="story-desc-title">前后缀</a>
                    <div>使用 prepend 属性来添加 前缀样样式, 使用 append 属性添加后缀样式</div>
                </div>
                <div className="story-code">
                        <pre>
                            <code className="story-code-hljs">
                                {
`<Input defaultValue="prepend text" prepend="https://" />
<Input append=".com" defaultValue="google"/>`
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
                    <th>value</th>
                    <th>组件取值</th>
                    <th>String | Number</th>
                    <th>-</th>
                </tr>
                <tr>
                    <th>placeholder	</th>
                    <th>占位文本</th>
                    <th>String</th>
                    <th>-</th>
                </tr>
                <tr>
                    <th>size</th>
                    <th>input尺寸:lg,sm</th>
                    <th>String</th>
                    <th>-</th>
                </tr>
                <tr>
                    <th>prepend</th>
                    <th>添加前缀</th>
                    <th>Boolean</th>
                    <th>false</th>
                </tr>
                <tr>
                    <th>append</th>
                    <th>添加后缀</th>
                    <th>Boolean</th>
                    <th>false</th>
                </tr>
                <tr>
                    <th>icon</th>
                    <th>添加Icon的图标</th>
                    <th>IconProp</th>
                    <th>-</th>
                </tr>
                <tr>
                    <th>onChange</th>
                    <th>(e: ChangeEvent) => void</th>
                    <th>-</th>
                    <th>-</th>
                </tr>

                </tbody>
            </table>
        </div>



    </div>
)


storiesOf('Input', module).add('Input输入框', defaultInput)
