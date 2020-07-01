# icon选用解决方案为 react-fontawesome

安装

```$xslt
$ yarn add @fortawesome/fontawesome-svg-core
$ yarn add @fortawesome/free-solid-svg-icons
$ yarn add @fortawesome/react-fontawesome
```

使用

```$xslt
// 引入图标的interface props
import { FontAwesomeIcon,FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

//引入图标所有的图标名字
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

<FontAwesomeIcon icon="spinner" spin size="10x" />
```

具体使用文档FontAwesomeIcon的各种属性参考：https://github.com/FortAwesome/react-fontawesome

官网地址：https://fontawesome.com/icons?d=gallery&m=free

注意：选用免费的 icon
