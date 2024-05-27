import React, { PropsWithChildren } from 'react'
import PureButton from '../../../components/button/PureButton'
import { useFormContext } from 'react-hook-form'

function SubmitClientModalFormBtn(props: PropsWithChildren) {
    const { formState } = useFormContext()
    const { isValid, isValidating, isSubmitting } = formState
    return (
        <PureButton
            type="submit"
            disabled={!isValid || isValidating || isSubmitting}
        >
            {props.children}
        </PureButton>
    )
}

export default SubmitClientModalFormBtn
