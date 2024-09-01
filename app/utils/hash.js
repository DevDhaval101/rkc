import {hash ,compare } from "bcrypt";

export async function hashPassword(password){
    const hashedPassword = await hash(password, 10)
    return hashedPassword
}

export async function checkPassword(plainPassword, hashedPassword){
    const isValid = await compare(plainPassword, hashedPassword)
    return isValid
}