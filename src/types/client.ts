
export type Client = {
    id: number;
    name: string;
    type: EClientType;
    contactName: string;
    emailList: string[];
    phoneList: Phone[];
    addressesList: Address[]
}



export type Phone = {
    val: number
    prefix: number

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