import { Client, EClientType } from "../types/client";
const client2: Client = {
    id: 2,
    name: "John Smith",
    type: EClientType.Individual,
    contactName: "John Smith",
    emailList: ["john.smith@example.com"],
    phoneList: [{ val: 3456789012, prefix: 1 }],
    addressesList: [
        { postalCode: 60601, isDefault: true, val: "789 Elm St, Chicago, IL 60601" }
    ]
};
const client1: Client = {
    id: 1,
    name: "Global Corp Inc.",
    type: EClientType.Enterprise,
    contactName: "Jane Doe",
    emailList: ["info@globalcorpinc.com", "jane.doe@globalcorpinc.com"],
    phoneList: [
        { val: 1234567890, prefix: 1 },
        { val: 2345678901, prefix: 1 }
    ],
    addressesList: [
        { postalCode: 10001, isDefault: true, val: "123 Main St, New York, NY 10001" },
        { postalCode: 90001, isDefault: false, val: "456 Market St, Los Angeles, CA 90001" }
    ]
};
export const clients: Client[] = [client1, client2]