import { create } from "zustand"

type Store = {
  Open: boolean
  toggleOpen: () => void
  setOpen: (value: boolean) => void
}

export const useStore = create<Store>((set) => ({
  Open: false,
  toggleOpen: () => set((state) => ({ Open: !state.Open })),
  setOpen: (value) => set({ Open: value }),
}))
