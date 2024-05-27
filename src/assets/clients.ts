import { Client, EClientType } from "../types/client";
const enterpriseClient: Client = {
    id: 1,
    name: "Tech Innovations Ltd.",
    type: EClientType.Enterprise,
    contactPersonList: [
        {
            name: "Alice Johnson",
            emailList: ["alice.johnson@techinnovations.com", "alice.johnson@gmail.com"],
            phoneList: ["+1234567890", "+0987654321"]
        },
        {
            name: "Bob Smith",
            emailList: ["bob.smith@techinnovations.com"],
            phoneList: ["+1122334455"]
        }
    ],
    addressesList: [
        { postalCode: 10001, isDefault: true, val: "1 Main St, Tech City, NY 10001" },
        { postalCode: 94103, isDefault: false, val: "456 Market St, San Francisco, CA 94103" }
    ]
};
const individualClient: Client = {
    id: 2,
    name: "Emma Watson",
    type: EClientType.Individual,
    contactPersonList: [
        {
            name: "Emma Watson",
            emailList: ["emma.watson@example.com", "emmwatson@gmail.com"],
            phoneList: ["+9876543210"]
        }
    ],
    addressesList: [
        { postalCode: 60605, isDefault: true, val: "789 Oak Ave, Chicago, IL 60605" }
    ]
};
export const clients: Client[] = [enterpriseClient, individualClient]