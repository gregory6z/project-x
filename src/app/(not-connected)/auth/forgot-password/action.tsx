// "use server"

// import { signInWithPassword } from "@/http/sign-in-with-passoword"
// import * as ky from "ky"

// import { cookies } from "next/headers"
// import { z } from "zod"

// const signInSchema = z.object({
//   email: z
//     .string()
//     .email({ message: "Veuillez fournir une adresse e-mail valide." }),
//   password: z
//     .string()
//     .min(1, { message: "Veuillez fournir votre mot de passe." }),
// })

// export async function signInWithEmailAndPassword(data: FormData) {
//   const result = signInSchema.safeParse(Object.fromEntries(data))

//   if (!result.success) {
//     const errors = result.error.flatten().fieldErrors

//     return { success: false, message: null, errors }
//   }

//   const { email, password } = result.data

//   try {
//     // eslint-disable-next-line camelcase
//     const { access_token } = await signInWithPassword({
//       email,
//       password,
//     })

//     cookies().set("ProjectX:token", access_token, {
//       path: "/",
//       maxAge: 60 * 60 * 24 * 7, // 7 days
//     })
//   } catch (err) {
//     if (err instanceof ky.HTTPError) {
//       const { message } = await err.response.json()

//       return { success: false, message, errors: null }
//     }

//     console.error(err)

//     return {
//       success: false,
//       message: "Unexpected error, try again in a few minutes.",
//       errors: null,
//     }
//   }

//   return { success: true, message: null, errors: null }
// }
