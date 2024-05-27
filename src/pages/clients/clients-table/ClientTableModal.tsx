import React, { ComponentProps, PropsWithChildren } from 'react'
import PureModal from '../../../components/modal/PureModal'
import { Client } from '../../../types/client'
interface IProps {
    targetClient?: Client
}
enum EMode {
    edit,
    new,
}
function ClientTableModal(
    props: PropsWithChildren<
        IProps & Pick<Partial<ComponentProps<typeof PureModal>>, 'onClose'>
    >
) {
    const mode = props.targetClient ? EMode.edit : EMode.new
    return (
        <div>
            <PureModal
                isOpen={true}
                title={
                    mode === EMode.edit ? 'Update Client' : 'Create New Client'
                }
                onClose={props.onClose}
            ></PureModal>
        </div>
    )
}

export default ClientTableModal
