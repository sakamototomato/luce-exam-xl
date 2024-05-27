import { InputLabel, Input, FormControlLabel, Checkbox } from '@mui/material'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Client } from '../../../../types/client'
import PureButton from '../../../../components/button/PureButton'
import DeleteIcon from '../../../../components/button/DeleteIconBtn'
import { mapFormTextFieldProps } from '../../../../utils.ts/form'

function Addresses() {
    const { control, watch, setValue } = useFormContext<Client>()
    const addresses = watch('addressesList') || []

    const addAnotherAddress = () => {
        const tempAddresses = [...addresses]
        tempAddresses.push({
            postalCode: 0,
            isDefault: false,
            val: '',
        })
        setValue('addressesList', tempAddresses)
    }

    const deleteAddress = (index: number) => {
        const tempAddresses = [...addresses]
        tempAddresses.splice(index, 1)
        setValue('addressesList', tempAddresses)
    }

    return (
        <div className="fields-group">
            <h4 className="fields-group-title">
                <span>Add Address</span>
                {addresses?.length < 4 && (
                    <PureButton cssType="link" onClick={addAnotherAddress}>
                        Add Another Address
                    </PureButton>
                )}
            </h4>
            <div className="fields-group-content column">
                {addresses?.map((address, index) => {
                    return (
                        <div className="address-item" key={index}>
                            {addresses.length >= 1 && (
                                <div className="actions">
                                    <DeleteIcon
                                        onClick={() => deleteAddress(index)}
                                    />
                                </div>
                            )}
                            <Controller
                                name={`addressesList.${index}.val`}
                                control={control}
                                render={(f) => {
                                    return (
                                        <>
                                            <InputLabel
                                                required
                                                id={`addressesList.${index}.val`}
                                            >
                                                Address
                                            </InputLabel>
                                            <Input
                                                required
                                                {...mapFormTextFieldProps(f)}
                                                // name={field.name}
                                                fullWidth
                                                placeholder="Enter address"
                                            />
                                        </>
                                    )
                                }}
                            />
                            <Controller
                                name={`addressesList.${index}.postalCode`}
                                control={control}
                                render={(f) => {
                                    return (
                                        <>
                                            <InputLabel
                                                required
                                                id={`addressesList.${index}.postalCode`}
                                            >
                                                Postal Code
                                            </InputLabel>
                                            <Input
                                                required
                                                {...mapFormTextFieldProps(f)}
                                                // name={field.name}
                                                placeholder="Enter postal code"
                                            />
                                        </>
                                    )
                                }}
                            />
                            <Controller
                                control={control}
                                render={({ field }) => {
                                    return (
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    {...field}
                                                    checked={field.value}
                                                    onChange={(e) => {
                                                        const val =
                                                            e.target.value ===
                                                            'false'

                                                        const temp = [
                                                            ...addresses,
                                                        ]

                                                        if (val) {
                                                            // uncheck the other addresses' isDefault
                                                            temp.forEach(
                                                                (item) =>
                                                                    (item.isDefault =
                                                                        false)
                                                            )
                                                        }

                                                        temp[index].isDefault =
                                                            val
                                                        setValue(
                                                            'addressesList',
                                                            temp
                                                        )
                                                    }}
                                                />
                                            }
                                            label="Make this default address"
                                        />
                                    )
                                }}
                                name={`addressesList.${index}.isDefault`}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Addresses
