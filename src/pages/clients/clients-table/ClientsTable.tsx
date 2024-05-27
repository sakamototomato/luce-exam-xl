import React from 'react'
import { useClientsContext } from '../clients-context'
import './ClientsTable.scss'
import ClientTableModal from './ClientTableModal'
import { schema } from '@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
function ClientsTable() {
    const [clients] = useClientsContext()
    const f = useForm({
        resolver: yupResolver(schema),
    })

    return (
        <FormProvider {...f}>
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
                                            <div
                                                className="person"
                                                key={p.name}
                                            >
                                                <p>{p.name}</p>
                                                <p>{p.emailList?.[0]}</p>
                                                <p>{p.phoneList?.[0]}</p>
                                            </div>
                                        )
                                    })}
                                </td>
                                <td>{client.type}</td>
                                <td>{client.addressesList?.[0].val}</td>
                            </tr>
                        )
                    })}
                </tbody>
                <ClientTableModal>
                    <form
                        onSubmit={f.handleSubmit(onSubmitHandler)}
                        className="client-modal-form"
                    ></form>
                </ClientTableModal>
            </table>
        </FormProvider>
    )
}

export default ClientsTable
