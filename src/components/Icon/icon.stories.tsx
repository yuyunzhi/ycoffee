import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import '../../styles/index.scss';
import "../../styles/storybook.scss"
import Icon from './icon'

const defaultIcon = () => (
    <div className='story-container'>
        <div className='story-header'>Icon 图标</div>
        <div className='story-demo-box'>
            <div className='story-demo-main'>
                <div className='story-content'>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <Icon icon="arrow-alt-circle-right" theme='primary' size="3x" style={{marginRight:'8px'}}/>
                        <Icon icon="arrow-alt-circle-right" theme='secondary' size="3x" style={{marginRight:'8px'}}/>
                        <Icon icon="arrow-alt-circle-right" theme='success' size="3x" style={{marginRight:'8px'}}/>
                        <Icon icon="arrow-alt-circle-right" theme='light' size="3x" style={{marginRight:'8px'}}/>
                        <Icon icon="arrow-alt-circle-right" theme='info' size="3x" style={{marginRight:'8px'}}/>
                        <Icon icon="arrow-alt-circle-right" theme='warning' size="3x" style={{marginRight:'8px'}}/>
                        <Icon icon="arrow-alt-circle-right" theme='danger' size="3x" style={{marginRight:'8px'}}/>
                        <Icon icon="arrow-alt-circle-right" theme='dark' size="3x" />
                    </div>
                </div>
                <div className='story-desc'>
                    <a className="story-desc-title">基础</a>
                    <div>使用 theme 属性来定义 Icon 的主题。提供了8种: 'primary' , 'secondary' , 'success' , 'info' , 'warning' , 'danger' , 'light' , 'dark'</div>
                </div>
                <div className="story-code">
                        <pre>
                            <code className="story-code-hljs">
                                {
`<Icon icon="arrow-alt-circle-right" theme='primary' size="3x"/>
<Icon icon="arrow-alt-circle-right" theme='secondary' size="3x"/>
<Icon icon="arrow-alt-circle-right" theme='success' size="3x"/>
<Icon icon="arrow-alt-circle-right" theme='light' size="3x"/>
<Icon icon="arrow-alt-circle-right" theme='info' size="3x"/>
<Icon icon="arrow-alt-circle-right" theme='warning' size="3x"/>
<Icon icon="arrow-alt-circle-right" theme='danger' size="3x"/>
<Icon icon="arrow-alt-circle-right" theme='dark' size="3x" />`
                                }
                            </code>
                        </pre>
                </div>
                <div className='story-liner'></div>
            </div>
            <div className='story-demo-main'>
                <div className='story-content'>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <Icon icon="apple-alt" theme='primary' size="3x" style={{marginRight:'8px'}}/>
                        <Icon icon="pepper-hot" theme='secondary' size="3x" style={{marginRight:'8px'}}/>
                        <Icon icon="carrot" theme='danger' size="3x" style={{marginRight:'8px'}}/>
                        <Icon icon="lemon" theme='info' size="3x"/>
                    </div>
                </div>
                <div className='story-desc'>
                    <a className="story-desc-title">基础</a>
                    <div>使用 icon 属性来定义 Icon 的图标内容。支持 fontawesome 所有 free-solid-icons，可以在这里查看所有图标:<a href="https://fontawesome.com/icons?d=gallery&s=solid&m=free" target='_blank'>fontawesome</a>
                    </div>
                </div>
                <div className="story-code">
                        <pre>
                            <code className="story-code-hljs">
                                {
`<Icon icon="apple-alt" theme='primary'/>
<Icon icon="pepper-hot" theme='secondary'/>
<Icon icon="carrot" theme='danger'/>
<Icon icon="lemon" theme='info'/>`
                                }
                            </code>
                        </pre>
                </div>
                <div className='story-liner'></div>
            </div>
            <div className='story-demo-main'>
                <div className='story-content'>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <Icon icon="spinner"  spin size="2x" style={{marginRight:'8px'}}/>
                        <Icon icon="spinner" theme="danger" pulse size="2x" style={{marginRight:'8px'}}/>
                        <Icon icon="apple-alt" color="yellow" rotation={90} size="lg" style={{marginRight:'8px'}}/>
                    </div>
                </div>
                <div className='story-desc'>
                    <a className="story-desc-title">其他属性</a>
                    <div>支持 react-fontawesome的所有属性 可以在这里查询：<a href="https://github.com/FortAwesome/react-fontawesome#basic" target='_blank'>fontawesome</a>
                    </div>
                </div>
                <div className="story-code">
                        <pre>
                            <code className="story-code-hljs">
                                {
`<Icon icon="spinner"  spin size="2x"/>
<Icon icon="spinner" theme="danger" pulse size="2x"/>
<Icon icon="apple-alt" rotation={90} size="lg"/>`
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
                    <th>theme</th>
                    <th>可选主题色 ：'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'</th>
                    <th>String</th>
                    <th>primary</th>
                </tr>
                <tr>
                    <th>icon</th>
                    <th>icon图标查询 ：https://fontawesome.com/icons?d=gallery&s=solid&m=free</th>
                    <th>-</th>
                    <th>-</th>
                </tr>
                <tr>
                    <th>其他属性</th>
                    <th>如：size,rotation,color，spin,pulse …… ：https://github.com/FortAwesome/react-fontawesome#basic</th>
                    <th>-</th>
                    <th>-</th>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
)


storiesOf('Icon', module).add('Icon图标', defaultIcon)
