//Usuários de teste

export const workingUser = {
    name: "Felipe",
    email: "felipe@felipeholanda.dev",
    phone: "63900000000",
    sharing: false,
    password: "123456"
}
export const workingUser2 = {
    name: "Felipe",
    email: "felipe@felipeholanda.dot",
    phone: "63900000011",
    sharing: false,
    password: "123456"
}

export const conflictingMailUser = {
    name: "Felipe",
    email: "felipe@felipeholanda.dev",
    phone: "11900000000",
    password: "123456"
}

export const conflictingPhoneUser = {
    name: "Felipe",
    email: "felipe.holanda@mail.com",
    phone: "63900000000",
    password: "123456"
}

export const invalidUser = {
    name: "Felipe",
    email: "",
    phone: "63900000001",
    password: "123456"
}