import React from 'react'
import { useClientsContext } from '../clients-context'
import './ClientsTable.scss'
function ClientsTable() {
    const [clients] = useClientsContext()
    return (
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
                                <p>{client.contactName}</p>
                                <p>{client.emailList?.[0]}</p>
                                <p>{client.phoneList?.[0].val}</p>
                            </td>
                            <td>{client.type}</td>
                            <td>{client.addressesList?.[0].val}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default ClientsTable
