import { ControllerFieldState, ControllerRenderProps, FieldValues, UseFormStateReturn } from "react-hook-form";

type F = {
    field: ControllerRenderProps<FieldValues, string>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<FieldValues>;
}
export const mapFormTextFieldProps = (f: F) => {
    return {
        name: f.field.name,
        error: !!f.formState.errors.root?.message,
        helpertext: f.formState.errors.root?.message
    }
}

export const mapFormSelectProps = (f: F) => {
    return {
        // value: f.field.value,
        name: f.field.name,
        error: !!f.formState.errors.root?.message,
        helpertext: f.formState.errors.root?.message
    }
}