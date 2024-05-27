import React, { PropsWithChildren } from 'react'
import PureButton from '../../../components/button/PureButton'
import { useFormContext } from 'react-hook-form'

function SubmitClientModalFormBtn(props: PropsWithChildren) {
    const f = useFormContext()
    console.log('formState', f)
    return (
        <PureButton type="submit" disabled={f?.formState?.isValid}>
            {props.children}
        </PureButton>
    )
}

export default SubmitClientModalFormBtn
