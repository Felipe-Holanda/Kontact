import { Document } from 'mongoose'

export interface iUser extends Document {
    name: string,
    email: string,
    secondaryEmail?: string,
    phone: string,
    secondaryPhone?: string,
    password?: string | undefined,
    createdAt: Date,
    updatedAt: Date
}

export interface iUserRequest {
    name: string,
    email: string,
    secondaryEmail?: string,
    phone: string,
    secondaryPhone?: string,
    password: string,
    sharing: boolean
}

export interface iContact extends Document {
    name: string,
    email: string,
    secondaryEmail?: string,
    phone: string,
    secondaryPhone?: string,
    createdAt: Date,
    updatedAt: Date
    owner: string
}

export interface iContactRequest {
    name: string,
    email?: string,
    secondaryEmail?: string,
    phone: string,
    secondaryPhone?: string,
}

export interface iContactUpdateRequest {
    name?: string,
    email?: string,
    secondaryEmail?: string,
    phone?: string,
    secondaryPhone?: string,
}