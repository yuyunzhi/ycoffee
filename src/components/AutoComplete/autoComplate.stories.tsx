import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import '../../styles/index.scss'
import '../../styles/storybook.scss'
import AutoComplete from './autoComplete'

const lakersWithNumber = [
  { value: 'bradley', number: 11 },
  { value: 'pope', number: 1 },
  { value: 'caruso', number: 4 },
  { value: 'cook', number: 2 },
  { value: 'cousins', number: 15 },
  { value: 'james', number: 23 },
  { value: 'AD', number: 3 },
  { value: 'green', number: 14 },
  { value: 'howard', number: 39 },
  { value: 'kuzma', number: 0 }
]

const handleFetch = (query: string) => {
  return lakersWithNumber.filter((player) => player.value.includes(query))
}

const renderOption = (item: any): any => {
  return item.value+'这是操作的值'
}
const autoComplete = () => (
  <div className="story-container">
    <div className="story-header">AutoComplete 自动填充</div>
    <div className="story-demo-box">
      <div className="story-demo-main">
        <div className="story-content">
          <div style={{ width: '200px' }}>
            <AutoComplete
              fetchSuggestions={handleFetch}
              onSelect={action('selected')}
              style={{ marginRight: '20px' }}
            />
          </div>
        </div>
        <div className="story-desc">
          <a className="story-desc-title">基础</a>
          <div>
            使用 onSelect 方法 触发选中的元素，使用 fetchSuggestions
            方法拿到input的值并且返回渲染数据
          </div>
        </div>
        <div className="story-code">
          <pre>
            <code className="story-code-hljs">
              {`<AutoComplete
  fetchSuggestions={handleFetch}
  onSelect={action('selected')}
/>

const lakersWithNumber = [
  { value: 'bradley', number: 11 },
  { value: 'pope', number: 1 },
  { value: 'caruso', number: 4 },
  { value: 'cook', number: 2 },
  { value: 'cousins', number: 15 },
  { value: 'james', number: 23 },
  { value: 'AD', number: 3 },
  { value: 'green', number: 14 },
  { value: 'howard', number: 39 },
  { value: 'kuzma', number: 0 }
]

const handleFetch = (query: string) => {
  return lakersWithNumber.filter((player) => player.value.includes(query))
}`}
            </code>
          </pre>
        </div>
        <div className="story-liner"></div>
      </div>

      <div className="story-demo-main">
        <div className="story-content">
          <div style={{ width: '200px' }}>
            <AutoComplete
              fetchSuggestions={handleFetch}
              onSelect={action('selected')}
              style={{ marginRight: '20px' }}
              renderOption={renderOption}
            />
          </div>
        </div>
        <div className="story-desc">
          <a className="story-desc-title">修改列表展示值</a>
          <div>
            使用 renderOption 方法 拿到每一项的item, 进行修改并返回展示得值
          </div>
        </div>
        <div className="story-code">
          <pre>
            <code className="story-code-hljs">
              {`<AutoComplete
  fetchSuggestions={handleFetch}
  onSelect={action('selected')}
  renderOption={renderOption}
/>

const renderOption = (item: DataSourceType): ReactElement => {
  return item.value+'这是操作的值'
}`}
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
            <th>fetchSuggestions</th>
            <th>
              {`fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]`}
            </th>
            <th>-</th>
            <th>-</th>
          </tr>
          <tr>
            <th>onSelect</th>
            <th>{`onSelect?: (item: DataSourceType) => void`}</th>
            <th>-</th>
            <th>-</th>
          </tr>
          <tr>
            <th>renderOption</th>
            <th>{`renderOption?: (item: DataSourceType) => ReactElement`}</th>
            <th>-</th>
            <th>-</th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)

storiesOf('AutoComplete', module).add('AutoComplete', autoComplete)
