import { ReactNode } from "react"

export interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  className?: string
}
