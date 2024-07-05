import { FormEvent, useState, useTransition } from 'react'
import { toast } from 'sonner'

interface FormState {
  success: boolean
  message: string | null
  errors: Record<string, string[]> | null
}


export function useFormState(
  action: (data: FormData) => Promise<FormState>,
  onSuccess?: () => Promise<void> | void,
  initialState?: FormState,
) {
  const [isPending, startTransition] = useTransition()

  const [formState, setFormState] = useState(
    initialState ?? { success: false, message: null, errors: null },
  )



  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const data = new FormData(form)

    startTransition(async () => {
      const state = await action(data)

      if (state.success && onSuccess ) {

        toast.success(state.message)

        await onSuccess()
      }



      if(state.message && !state.success){
         toast.error(state.message)
      }
     
     setFormState(state)
    })
  }

  return [formState, handleSubmit, isPending] as const
}