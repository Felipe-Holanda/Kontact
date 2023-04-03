import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
    password: yup.string().required('Senha obrigatória')
})

export const registerSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
    phone: yup.string().required('Telefone obrigatório'),
    password: yup.string().required('Senha obrigatória'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Senhas não conferem').required('Confirmação de senha obrigatória')
})

export const createContactSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().email('E-Mail inválido'),
    phone: yup.string().required('Telefone obrigatório'),
    secondaryEmail: yup.string().email('E-Mail inválido'),
    secondaryPhone: yup.string(),
})