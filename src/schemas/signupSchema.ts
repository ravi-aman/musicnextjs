import {z}from 'zod'


export const usernameValidation=z
.string()
.min(6,"usename must be atleast 6 character")
.regex(/^[a-zA-Z0-9_-]+$/
,"username must not contain special character")

export const signUpSchema =z.object({
    username:usernameValidation,
    email:z.string().email({message:"invalid email adresss"}),
    password:z.string().min(6,{message:"password must be atleast 6 character"})
})