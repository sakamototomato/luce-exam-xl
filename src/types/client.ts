
export type Client = {
    id: number;
    name: string;
    type: EClientType;
    contactPersonList: ContactPerson[];
    addressesList: Address[]
}


export type ContactPerson = {
    name: string;
    emailList: string[];
    phoneList: string[];
}
export type Address = {
    postalCode: number;
    isDefault: boolean
    val: string;
}

export enum EClientType {
    Enterprise = "Enterprise",
    Individual = "Individual"
}