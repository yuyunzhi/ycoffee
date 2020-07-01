import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import '../../styles/index.scss';
import "../../styles/storybook.scss"
import Button from './button'

const defaultButton = () => (
    <div className='story-container'>
        <div className='story-header'>Button 按钮</div>
        <div className='story-demo-box'>
            <div className='story-demo-main'>
                <div className='story-content'>
                    <div>
                        <Button onClick={action('clicked')} style={{marginRight:'20px'}}> default </Button>
                    </div>
                </div>
                <div className='story-desc'>
                    <a className="story-desc-title">基础</a>
                    <div>-</div>
                </div>
                <div className="story-code">
                        <pre>
                            <code className="story-code-hljs">
                                {
`-----`
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
                        <th>btnType</th>
                        <th>可选参数类型 ：'primary' | 'default' | 'danger' | 'link'</th>
                        <th>String</th>
                        <th>default</th>
                    </tr>
                </tbody>
            </table>
        </div>



    </div>
)


storiesOf('Button', module).add('默认Button', defaultButton)
