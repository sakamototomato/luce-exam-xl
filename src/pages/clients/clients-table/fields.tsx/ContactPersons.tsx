import React from 'react'
import PureButton from '../../../../components/button/PureButton'
import { Controller, useFormContext } from 'react-hook-form'
import { Client } from '../../../../types/client'
import { InputLabel, Input } from '@mui/material'
import DeleteIcon from '../../../../components/button/DeleteIconBtn'
import './ContactPersons.scss'
import { mapFormTextFieldProps } from '../../../../utils.ts/form'
function ContactPersons() {
    const { watch, setValue, control } = useFormContext<Client>()
    const contacts = watch('contactPersonList') || []
    const addContactPerson = () => {
        const temp = [...contacts]
        temp.push({
            name: '',
            emailList: [''],
            phoneList: [''],
        })
        setValue('contactPersonList', temp)
    }
    const deleteContact = (index: number) => {
        const temp = [...contacts]
        temp.splice(index, 1)
        setValue('contactPersonList', temp)
    }
    return (
        <div className="fields-group">
            <h4 className="fields-group-title">
                <span>Contact Person</span>
                {contacts?.length < 4 && (
                    <PureButton cssType="link" onClick={addContactPerson}>
                        Add Contact Person
                    </PureButton>
                )}
            </h4>
            <div className="fields-group-content column">
                {contacts?.map((contact, personIndex) => {
                    return (
                        <div className="contact-item" key={personIndex}>
                            {personIndex === 0 && (
                                <h3 className="contact-primary">
                                    Primary Contact
                                </h3>
                            )}
                            {contacts.length >= 1 && (
                                <div className="actions">
                                    <DeleteIcon
                                        onClick={() =>
                                            deleteContact(personIndex)
                                        }
                                    />
                                </div>
                            )}
                            <Controller
                                name={`contactPersonList.${personIndex}.name`}
                                control={control}
                                render={(f) => {
                                    return (
                                        <>
                                            <InputLabel
                                                required
                                                id={`contactPersonList.${personIndex}.name`}
                                            >
                                                Name
                                            </InputLabel>
                                            <Input
                                                fullWidth
                                                required
                                                {...mapFormTextFieldProps(f)}
                                                placeholder="Enter contact name"
                                            />
                                        </>
                                    )
                                }}
                            />
                            <Controller
                                name={`contactPersonList.${personIndex}.emailList`}
                                control={control}
                                render={(f) => {
                                    const field = f.field
                                    return (
                                        <>
                                            {field?.value?.map(
                                                (email, emailIndex) => {
                                                    return (
                                                        <Controller
                                                            key={emailIndex}
                                                            control={control}
                                                            name={`${field.name}.${emailIndex}`}
                                                            render={(
                                                                emailField
                                                            ) => {
                                                                return (
                                                                    <div
                                                                        className="email-item"
                                                                        key={
                                                                            emailIndex
                                                                        }
                                                                    >
                                                                        <InputLabel
                                                                            required
                                                                            id={`contactPersonList.${personIndex}.emailList.${emailIndex}`}
                                                                        >
                                                                            Email
                                                                        </InputLabel>
                                                                        <div className="row-between">
                                                                            <Input
                                                                                fullWidth
                                                                                required
                                                                                // {...field}
                                                                                {...mapFormTextFieldProps(
                                                                                    emailField
                                                                                )}
                                                                                placeholder="Enter email address"
                                                                            />
                                                                            {emailIndex ===
                                                                            0 ? (
                                                                                <PureButton
                                                                                    cssType="link"
                                                                                    disabled={
                                                                                        field
                                                                                            .value
                                                                                            ?.length ===
                                                                                        2
                                                                                    }
                                                                                    onClick={() => {
                                                                                        setValue(
                                                                                            `contactPersonList.${personIndex}.emailList`,
                                                                                            [
                                                                                                ...field.value,
                                                                                                '',
                                                                                            ]
                                                                                        )
                                                                                    }}
                                                                                >
                                                                                    Add
                                                                                    Other
                                                                                </PureButton>
                                                                            ) : (
                                                                                <DeleteIcon
                                                                                    type="trash"
                                                                                    onClick={() => {
                                                                                        const temp =
                                                                                            [
                                                                                                ...field.value,
                                                                                            ]
                                                                                        temp.splice(
                                                                                            emailIndex,
                                                                                            1
                                                                                        )
                                                                                        setValue(
                                                                                            `contactPersonList.${personIndex}.emailList`,
                                                                                            temp
                                                                                        )
                                                                                    }}
                                                                                ></DeleteIcon>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                )
                                                            }}
                                                        ></Controller>
                                                    )
                                                }
                                            )}
                                        </>
                                    )
                                }}
                            />
                            <Controller
                                name={`contactPersonList.${personIndex}.phoneList`}
                                control={control}
                                render={(f) => {
                                    const { field } = f
                                    return (
                                        <>
                                            {field.value?.map?.(
                                                (phone, phoneIndex) => {
                                                    return (
                                                        <Controller
                                                            key={phoneIndex}
                                                            control={control}
                                                            name={`${field.name}.${phoneIndex}`}
                                                            render={(
                                                                phoenField
                                                            ) => {
                                                                return (
                                                                    <div
                                                                        className="email-item"
                                                                        key={
                                                                            phoneIndex
                                                                        }
                                                                    >
                                                                        <InputLabel
                                                                            required
                                                                            id={`contactPersonList.${personIndex}.phoneList.${phoneIndex}`}
                                                                        >
                                                                            Phone
                                                                            Number
                                                                        </InputLabel>
                                                                        <div className="row-between">
                                                                            <Input
                                                                                required
                                                                                fullWidth
                                                                                {...mapFormTextFieldProps(
                                                                                    phoenField
                                                                                )}
                                                                                placeholder="Enter phone number"
                                                                            />
                                                                            {phoneIndex ===
                                                                            0 ? (
                                                                                <PureButton
                                                                                    cssType="link"
                                                                                    disabled={
                                                                                        field
                                                                                            .value
                                                                                            ?.length ===
                                                                                        2
                                                                                    }
                                                                                    onClick={() => {
                                                                                        setValue(
                                                                                            `contactPersonList.${personIndex}.phoneList`,
                                                                                            [
                                                                                                ...field.value,
                                                                                                '',
                                                                                            ]
                                                                                        )
                                                                                    }}
                                                                                >
                                                                                    Add
                                                                                    Other
                                                                                </PureButton>
                                                                            ) : (
                                                                                <DeleteIcon
                                                                                    type="trash"
                                                                                    onClick={() => {
                                                                                        const temp =
                                                                                            [
                                                                                                ...field.value,
                                                                                            ]
                                                                                        temp.splice(
                                                                                            phoneIndex,
                                                                                            1
                                                                                        )

                                                                                        setValue(
                                                                                            `contactPersonList.${personIndex}.phoneList`,
                                                                                            temp
                                                                                        )
                                                                                    }}
                                                                                ></DeleteIcon>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                )
                                                            }}
                                                        />
                                                    )
                                                }
                                            )}
                                        </>
                                    )
                                }}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ContactPersons
