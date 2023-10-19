import { HeaderContent } from "./components/HeaderContent"
import { HeaderScroll } from "./components/HeaderScroll"

export function Header() {
  return (
    <HeaderScroll>
      <HeaderContent />
    </HeaderScroll>
  )
}
