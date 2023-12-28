export interface Supplier {
    publicId: string;
    name: string;
    cnpj: string;
    phoneNumber: string;
    zipCode: string;
    address: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    ownerName: string;
    ownerEmail: string;
    ownerPhoneNumber: string;
}

export interface Suppliers {
    publicId: string;
    name: string;
    cnpj: string;
    phoneNumber: string;
    ownerName: string;
}
