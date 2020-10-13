import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import '../../styles/index.scss'
import '../../styles/storybook.scss'
import Button from './button'
import Icon from '../Icon/icon'

const defaultButton = () => (
    <div className="story-container">
      <div className="story-header">Button 按钮</div>
      <div className="story-demo-box">
        <div className="story-demo-main"><div className="story-content">
            <div>
              <Button onClick={action('clicked')} style={{marginRight: '20px'}}>
                {' '}
                default{' '}
              </Button>
              <Button
                  onClick={action('clicked')}
                  btnType="primary"
                  style={{marginRight: '20px'}}
              >
                {' '}
                primary{' '}
              </Button>
              <Button
                  onClick={action('clicked')}
                  btnType="danger"
                  style={{marginRight: '20px'}}
              >
                {' '}
                danger{' '}
              </Button>
              <Button btnType="link" href="https://www.baidu.com" target="_blank">
                {' '}
                link
              </Button>
            </div>
          </div>
          <div className="story-desc">
            <a className="story-desc-title">基础</a>
            <div>
              使用 btnType 属性来定义 Button 的主题。提供了四种 ：primary ,
              default , danger , link{' '}
            </div>
          </div>
          <div className="story-code">
          <pre>
            <code className="story-code-hljs">
              {`<Button onClick={action('clicked')}> default </Button>
<Button onClick={action('clicked')} btnType='primary'> primary </Button>
<Button onClick={action('clicked')} btnType='danger'> danger </Button>
<Button btnType='link' href='https://www.baidu.com' target='_blank' > link </Button>`}
            </code>
          </pre>
          </div>
          <div className="story-liner"></div>
        </div>
        <div className="story-demo-main">
          <div className="story-content">
            <div>
              <Button btnType="primary" size="lg" style={{marginRight: '20px'}}>
                {' '}
                大
              </Button>
              <Button btnType="primary" style={{marginRight: '20px'}}>
                {' '}
                中
              </Button>
              <Button btnType="primary" size="sm" style={{marginRight: '20px'}}>
                {' '}
                小
              </Button>
            </div>
          </div>
          <div className="story-desc">
            <a className="story-desc-title">大小按钮</a>
            <div>使用 size 属性来定义按钮大小：lg , sm</div>
          </div>
          <div className="story-code">
          <pre>
            <code className="story-code-hljs">
              {`<Button btnType='primary' size='lg'> 大 </Button>
<Button btnType='primary'> 中 </Button>
<Button btnType='primary' size='sm'> 小 </Button>`}
            </code>
          </pre>
          </div>
          <div className="story-liner"></div>
        </div>
        <div className="story-demo-main">
          <div className="story-content">
            <div>
              <Button disabled style={{marginRight: '20px'}}>
                {' '}
                禁用{' '}
              </Button>
              <Button btnType="primary" disabled style={{marginRight: '20px'}}>
                {' '}
                禁用{' '}
              </Button>
              <Button btnType="danger" disabled style={{marginRight: '20px'}}>
                {' '}
                禁用{' '}
              </Button>
              <Button btnType="link" href="https://www.baidu.com" disabled>
                {' '}
                link{' '}
              </Button>
            </div>
          </div>
          <div className="story-desc">
            <a className="story-desc-title">禁用</a>
            <div>使用 disabled 属性来定义按钮是否禁用，boolean值</div>
          </div>
          <div className="story-code">
          <pre>
            <code className="story-code-hljs">
              {`<Button disabled> 禁用 </Button>
<Button btnType='primary' disabled> 禁用 </Button>
<Button btnType='danger' disabled> 禁用 </Button>
<Button btnType='link' href='https://www.baidu.com' disabled> link </Button>`}
            </code>
          </pre>
          </div>
          <div className="story-liner"></div>
        </div>
        <div className="story-demo-main">
          <div className="story-content">
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <Button disabled style={{marginRight: '20px'}}>
                <Icon icon="spinner" spin style={{marginRight: '8px'}}/>
                加载中
              </Button>
              <Button btnType="primary" style={{marginRight: '20px'}}>
                <Icon icon="stop" color="white" size="sm"/>
              </Button>
            </div>
          </div>
          <div className="story-desc">
            <a className="story-desc-title">含有图标</a>
            <div>在Button里加入Icon组件即可，具体Icon参数查看相关页面</div>
          </div>
          <div className="story-code">
          <pre>
            <code className="story-code-hljs">
              {`<Button disabled>
    <Icon icon='spinner' spin style={{marginRight:'8px'}}/>加载中
</Button>
<Button  btnType='primary'>
    <Icon icon="stop"  color="white" size="sm"/>
</Button>    `}
            </code>
          </pre>
          </div>
          <div className="story-liner"></div>
        </div>
      </div>

      <div className="story-api">API</div>
      <div className="story-table-border">
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
          <tr>
            <th>size</th>
            <th>可选参数类型 ：'lg' | 'sm'</th>
            <th>String</th>
            <th>-</th>
          </tr>
          <tr>
            <th>disabled</th>
            <th>是否禁用</th>
            <th>Boolean</th>
            <th>false</th>
          </tr>
          <tr>
            <th>onClick</th>
            <th>点击事件</th>
            <th>-</th>
            <th>-</th>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
)

storiesOf('Button', module).add('Button按钮', defaultButton)
