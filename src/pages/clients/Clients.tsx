import React, { useMemo, useReducer, useRef, useState } from 'react'
import PureButton from '../../components/button/PureButton'
import './Client.scss'
import ClientsTable from './clients-table/ClientsTable'
import { ClientsContext, reducer } from './clients-context'
import { clients } from '../../assets/clients'
import { ModalControl } from './clients-table/ClientTableModal'
import { Client } from '../../types/client'

function Clients() {
    const [ctx, dispatch] = useReducer(reducer, clients)
    const modalControlStateHook = useState(false)
    const targetClientStateHook = useState<Client>()

    const modalControl: ModalControl = useMemo(() => {
        const [state, setState] = modalControlStateHook
        const [client, setClient] = targetClientStateHook

        return {
            open: (c?: Client) => {
                console.log('client', c)

                const temp = c ?? {
                    type: '',
                    name: '',
                    contactPersonList: [
                        {
                            name: '',
                            emailList: [''],
                            phoneList: [''],
                        },
                    ],
                    addressesList: [{}],
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                }
                console.log('temp', temp)
                setClient(temp)
                setState(true)
            },
            close: () => {
                setState(false)
                setClient(undefined)
            },
            client,
            isOpen: state,
        }
    }, [modalControlStateHook, targetClientStateHook])
    return (
        <ClientsContext.Provider value={[ctx, dispatch]}>
            <div className="clients">
                <div className="clients-operation">
                    <PureButton
                        text={'Add New Client'}
                        onClick={() => modalControl.open()}
                    />
                </div>
                <ClientsTable modalControl={modalControl} />
            </div>
        </ClientsContext.Provider>
    )
}

export default Clients
