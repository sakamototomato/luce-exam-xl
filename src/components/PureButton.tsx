import React from 'react'
import './PureButton.scss'
interface IProps {
    text: string
    type: 'primary' | 'secondary'
    onClick: () => void
}
function PureButton(props: IProps) {
    return (
        <div className="pure-button" onClick={props.onClick}>
            <button>{props.text}</button>
        </div>
    )
}

export default PureButton
