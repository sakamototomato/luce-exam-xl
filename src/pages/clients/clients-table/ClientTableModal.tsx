import React, {
    ComponentProps,
    PropsWithChildren,
    useCallback,
    useEffect,
    useId,
    useRef,
} from 'react'
import PureModal from '../../../components/modal/PureModal'
import { Client } from '../../../types/client'
import PureButton from '../../../components/button/PureButton'
import Addresses from './fields.tsx/Addresses'
import ContactPersons from './fields.tsx/ContactPersons'
import BasicInformation from './fields.tsx/BasicInformation'
import './ClientTableModal.scss'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
import SubmitClientModalFormBtn from './SubmitClientModalFormBtn'
import { ClientSchema } from './clientSchema'
import { ACTION, useClientsContext } from '../clients-context'
export type ModalControl = {
    open: (client?: Client) => void
    close: () => void
    isOpen: boolean
    client?: Client
}
interface IProps {
    modalControl: ModalControl
}
enum EMode {
    edit = 'edit',
    new = 'new',
}

function ClientTableModal(
    props: PropsWithChildren<
        IProps & Pick<Partial<ComponentProps<typeof PureModal>>, 'onClose'>
    >
) {
    const { modalControl } = props

    const mode = modalControl?.client ? EMode.edit : EMode.new
    const f = useForm({
        name: 'client-form',
        mode: 'all',
        resolver: yupResolver(ClientSchema),
    })

    const [, dispatch] = useClientsContext()
    const onSubmitHandler = useCallback(
        (data: Client) => {
            console.log('data', data, mode)
            dispatch({
                type: mode == EMode.new ? ACTION.ADD : ACTION.SET,
                payload: data,
            })
            modalControl.close()
        },
        [mode, dispatch, modalControl.close]
    )
    const closeModal = () => {
        modalControl.close()
        props?.onClose?.()
    }

    f.watch()
    const uuid = useId()
    const idRef = useRef(modalControl.client?.id || uuid)
    useEffect(() => {
        f.reset({ ...modalControl.client })
        f.register('id', {
            value: idRef.current,
        })
    }, [f, f.register, modalControl.client])
    return (
        <div className="client-table-modal">
            <PureModal
                isOpen={modalControl.isOpen}
                title={
                    mode === EMode.edit ? 'Update Client' : 'Create New Client'
                }
                onClose={props.onClose}
            >
                <FormProvider {...f}>
                    <form
                        onSubmit={f.handleSubmit(onSubmitHandler)}
                        className="client-modal-form"
                    >
                        <div className="grid-information ">
                            <div className="column">
                                <BasicInformation />
                                <ContactPersons />
                            </div>
                            <Addresses />
                        </div>
                        <div className="modal-footer">
                            <PureButton
                                cssType="secondary"
                                onClick={closeModal}
                            >
                                Cancel
                            </PureButton>
                            <SubmitClientModalFormBtn>
                                {mode === EMode.new ? 'Next' : 'Save'}
                            </SubmitClientModalFormBtn>
                        </div>
                    </form>
                </FormProvider>
            </PureModal>
        </div>
    )
}

export default ClientTableModal
