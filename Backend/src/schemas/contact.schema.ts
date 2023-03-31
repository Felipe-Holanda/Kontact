import * as yup from 'yup'

export const registerSchema = yup.object().shape({
    name: yup.string().required(),
    phone: yup.string().required(),
    secondaryPhone: yup.string(),
    email: yup.string().email(),
    secondaryEmail: yup.string().email(),
})

export const updateSchema = yup.object().shape({
    name: yup.string(),
    phone: yup.string(),
    secondaryPhone: yup.string(),
    email: yup.string().email(),
    secondaryEmail: yup.string().email(),
})