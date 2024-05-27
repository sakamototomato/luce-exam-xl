import React, { MouseEventHandler, PropsWithChildren } from 'react'
import './PureButton.scss'
import classNames from 'classnames'
interface IProps {
    text?: string
    type?: 'button' | 'submit' | 'reset' | undefined
    cssType?: 'primary' | 'secondary' | 'link'
    onClick?: MouseEventHandler<HTMLDivElement>
    disabled?: boolean
}
function PureButton(props: PropsWithChildren<IProps>) {
    const type = props.cssType || 'primary'
    return (
        <div
            className={classNames('pure-button', type, {
                disabled: props.disabled,
            })}
            onClick={props.onClick}
        >
            <button type={props.type}>{props.text || props.children}</button>
        </div>
    )
}

export default PureButton
