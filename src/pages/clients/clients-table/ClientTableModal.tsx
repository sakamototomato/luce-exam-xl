import React, { ComponentProps, PropsWithChildren, useCallback } from 'react'
import PureModal from '../../../components/modal/PureModal'
import { Client } from '../../../types/client'
import PureButton from '../../../components/button/PureButton'
import Addresses from './fields.tsx/Addresses'
import ContactPersons from './fields.tsx/ContactPersons'
import BasicInformation from './fields.tsx/BasicInformation'
import './ClientTableModal.scss'
import { schema } from '@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
import SubmitClientModalFormBtn from './SubmitClientModalFormBtn'
export type ModalControl = {
    open: () => void
    close: () => void
    isOpen: boolean
}
interface IProps {
    targetClient?: Client
    modalControl: ModalControl
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
    const { modalControl } = props
    const mode = props.targetClient ? EMode.edit : EMode.new
    const f = useForm<Client>({
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
        resolver: yupResolver(schema),
    })

    const onSubmitHandler = useCallback((data: Client) => {
        console.log('data', data)
    }, [])
    const closeModal = () => {
        modalControl.close()
        props?.onClose?.()
    }

    console.log('ff', f.formState)
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
                        // onSubmit={f.handleSubmit(onSubmitHandler)}
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
