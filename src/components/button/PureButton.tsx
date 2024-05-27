import React, { MouseEventHandler, PropsWithChildren, useRef } from 'react'
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
    const ref = useRef<HTMLButtonElement>(null)
    const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        ref.current?.click()
        props?.onClick?.(e)
    }
    return (
        <div
            className={classNames('pure-button', type, {
                disabled: props.disabled,
            })}
            onClick={onClick}
        >
            <button ref={ref} type={props.type}>
                {props.text || props.children}
            </button>
        </div>
    )
}

export default PureButton
