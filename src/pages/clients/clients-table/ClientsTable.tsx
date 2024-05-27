import React from 'react'
import { useClientsContext } from '../clients-context'
import './ClientsTable.scss'
import ClientTableModal, { ModalControl } from './ClientTableModal'
import { FormProvider } from 'react-hook-form'
interface IProps {
    modalControl: ModalControl
}
function ClientsTable(props: IProps) {
    const [clients] = useClientsContext()

    return (
        <>
            <table className="clients-table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Account Type</th>
                        <th scope="col">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map((client) => {
                        return (
                            <tr key={client.id}>
                                <td>{client.name}</td>
                                <td>
                                    {client.contactPersonList?.map((p) => {
                                        return (
                                            <React.Fragment key={p.name}>
                                                <p>{p.name}</p>
                                                <p>{p.emailList?.[0]}</p>
                                                <p>{p.phoneList?.[0]}</p>
                                            </React.Fragment>
                                        )
                                    })}
                                </td>
                                <td>{client.type}</td>
                                <td>{client.addressesList?.[0].val}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <ClientTableModal
                modalControl={props.modalControl}
            ></ClientTableModal>
        </>
    )
}

export default ClientsTable
