
export type Client = {
    id: string;
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
    na = "N/A",
    Enterprise = "Enterprise",
    Individual = "Individual"
}