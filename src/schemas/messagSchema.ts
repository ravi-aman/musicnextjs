import {z} from "zod"

export const MessageSchema=z.object({
    content:z
    .string()
    .min(10,{message:"content must be at leat of 10 character"})
    .max(10,{message:"content must be no longer then 300 character"})
})