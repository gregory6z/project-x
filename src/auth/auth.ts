import { GetUser } from "@/http/get-user"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export function isAuthenticated() {
  return !!cookies().get("ProjectX:token")?.value
}

export async function auth() {
  const token = cookies().get("ProjectX:token")?.value

  if (!token) {
    redirect("/auth/sign-in")
  }

  try {
    const { user, bankAccount } = await GetUser()

    return { user, bankAccount }
  } catch {}

  redirect("/api/auth/sign-out")
}
