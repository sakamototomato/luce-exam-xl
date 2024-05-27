import * as Yup from "yup"
import { Address, Client, ContactPerson, EClientType } from "../../../types/client";


const AddressSchema = Yup.object<Address>().shape({
    postalCode: Yup.number()
        .positive('Postal code must be a positive number')
        .integer('Postal code must be an integer')
        .required('Postal code is required'),
    isDefault: Yup.boolean(),
    val: Yup.string()
        .required('Address value is required')
});

const ContactPersonSchema = Yup.object<ContactPerson>().shape({
    name: Yup.string()
        .required('Contact person name is required'),
    emailList: Yup.array()
        .of(Yup.string().email('Invalid email'))
        .min(1, 'At least one email is required'),
    phoneList: Yup.array()
        .of(Yup.string()
            .matches(/^\+?\d+$/, 'Phone number must be a valid number'))
        .min(1, 'At least one phone number is required')
});

export const ClientSchema = Yup.object<Client>().shape({
    id: Yup.number()
        .positive('ID must be a positive number')
        .integer('ID must be an integer')
        .required('ID is required'),
    name: Yup.string()
        .required('Client name is required'),
    type: Yup.mixed<EClientType>()
        .oneOf(Object.values(EClientType), 'Invalid client type'),
    contactPersonList: Yup.array()
        .of(ContactPersonSchema)
        .min(1, 'At least one contact person is required'),
    addressesList: Yup.array()
        .of(AddressSchema)
        .min(1, 'At least one address is required')
});