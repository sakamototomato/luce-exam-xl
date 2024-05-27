import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { InputLabel, Input, NativeSelect } from '@mui/material'
import { EClientType } from '../../../../types/client'
import {
    mapFormSelectProps,
    mapFormTextFieldProps,
} from '../../../../utils.ts/form'

function BasicInformation() {
    const { control } = useFormContext()

    return (
        <div className="fields-group">
            <h4 className="fields-group-title">Basic Information</h4>
            <div className="fields-group-content column">
                <Controller
                    name="name"
                    control={control}
                    render={(f) => {
                        return (
                            <>
                                <InputLabel required id="Client Name">
                                    Client Name
                                </InputLabel>
                                <Input
                                    required
                                    {...mapFormTextFieldProps(f)}
                                    placeholder="Enter client name"
                                />
                            </>
                        )
                    }}
                />
                <Controller
                    name="type"
                    control={control}
                    render={(f) => {
                        return (
                            <>
                                <InputLabel
                                    variant="standard"
                                    htmlFor="Account Type"
                                >
                                    Account Type
                                </InputLabel>
                                <NativeSelect
                                    {...mapFormSelectProps(f)}
                                    defaultValue={30}
                                    inputProps={{
                                        name: 'type',
                                        id: 'Account Type',
                                    }}
                                    placeholder="Select"
                                >
                                    <option value={EClientType.na}>
                                        {EClientType.na}
                                    </option>
                                    <option value={EClientType.Enterprise}>
                                        {EClientType.Enterprise}
                                    </option>
                                    <option value={EClientType.Individual}>
                                        {EClientType.Individual}
                                    </option>
                                </NativeSelect>
                            </>
                        )
                    }}
                />
            </div>
        </div>
    )
}

export default BasicInformation
