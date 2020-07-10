import React, { FC, CSSProperties } from 'react'
import { ThemeProps } from '../Icon/icon'
import classNames from 'classnames'

type textPositionProps = 'in' | 'out'
export interface ProgressProps {
    /** 进度条多少的进度 */
    percent: number;
    /** 进度条的高度 */
    strokeHeight?: number;
    /** 是否显示进度条的文字 */
    showText?: boolean;
    textPosition?: textPositionProps;
    styles?: CSSProperties;
    theme?: ThemeProps;
}
/**
 * ### 引入方式
 * ~~~js
 * import { Progress } from 'mack-design';
 * ~~~
 */
export const Progress: FC<ProgressProps> = ({
    percent,
    strokeHeight,
    showText,
    styles,
    theme,
    textPosition
}) => {
    if(percent<0 || percent>100){
        console.error('percent 应在范围在 0 ～ 100')
    }
    return (
        <div className="progress-bar" style={styles}>
            <div className="progress-bar-outer" style={{ height: `${strokeHeight}px` }}>
                <div
                    className={`progress-bar-inner color-${theme}`}
                    style={{ width: `${percent}%` }}
                >
                    { showText && textPosition === 'in'  && <span className='inner-text in'>{`${percent}%`}</span> }
                </div>
                { showText && textPosition === 'out'  && <span className='inner-text out'>{`${percent}%`}</span> }

            </div>

        </div>
    )
}
Progress.defaultProps = {
    strokeHeight: 15,
    showText: true,
    textPosition: 'in',
    theme: 'primary'
}
export default Progress
