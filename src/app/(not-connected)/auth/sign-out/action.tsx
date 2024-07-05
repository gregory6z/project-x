"use server"

import { signOut } from "@/http/sign-out"
import * as ky from "ky"

import { z } from "zod"

const signOutSchema = z
  .object({
    firstName: z.string().min(2, { message: "Veuillez fournir votre prénom." }),
    lastName: z.string().min(2, { message: "Veuillez fournir votre nom." }),
    address: z.string().min(8, { message: "Veuillez fournir votre adresse." }),
    phone: z
      .string()
      .min(8, { message: "Veuillez fournir votre numéro de téléphone." }),
    birthDate: z.string().transform((date) => new Date(date)),

    email: z
      .string()
      .email({ message: "Veuillez fournir une adresse e-mail valide." }),
    password: z
      .string()
      .min(1, { message: "Veuillez fournir votre mot de passe." }),
    passwordConfirmation: z
      .string()
      .min(1, { message: "Veuillez confirmer votre mot de passe." }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Les mots de passe doivent correspondre.",
    path: ["passwordConfirmation"],
  })

export async function signOutAction(data: FormData) {
  const result = signOutSchema.safeParse(Object.fromEntries(data))

  console.log(result)

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors

    return { success: false, message: null, errors }
  }

  const { firstName, lastName, address, phone, birthDate, email, password } =
    result.data

  try {
    await signOut({
      firstName,
      lastName,
      address,
      phone,
      birthDate,
      email,
      password,
    })
  } catch (err) {
    if (err instanceof ky.HTTPError) {
      const { message } = await err.response.json()

      return { success: false, message, errors: null }
    }

    console.error(err)

    return {
      success: false,
      message: "Unexpected error, try again in a few minutes.",
      errors: null,
    }
  }

  return { success: true, message: "Compte crée avec success", errors: null }
}
