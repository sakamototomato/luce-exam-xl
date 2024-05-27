import React, { PropsWithChildren } from 'react'
import './PureModal.scss'

interface IProps {
    isOpen: boolean
    title: string
    onClose?: () => void
}
function PureModal(props: PropsWithChildren<IProps>) {
    if (!props.isOpen) return <></>
    return (
        <div className="pure-modal">
            <div className="modal-bg"></div>
            <div className="container">
                <h3 className="modal-title">{props.title}</h3>
                <div className="modal-content">{props.children}</div>
            </div>
        </div>
    )
}

export default PureModal
