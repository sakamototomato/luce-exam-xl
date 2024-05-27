import React, { useReducer } from 'react'
import PureButton from '../../components/PureButton'
import './Client.scss'
import ClientsTable from './clients-table/ClientsTable'
import { ClientsContext, reducer } from './clients-context'
import { clients } from '../../assets/clients'
function Clients() {
    const [ctx, dispatch] = useReducer(reducer, clients)
    return (
        <ClientsContext.Provider value={[ctx, dispatch]}>
            <div className="clients">
                <div className="clients-operation">
                    <PureButton
                        text={'Add New Client'}
                        type={'primary'}
                        onClick={function (): void {
                            throw new Error('Function not implemented.')
                        }}
                    />
                </div>
                <ClientsTable />
            </div>
        </ClientsContext.Provider>
    )
}

export default Clients
