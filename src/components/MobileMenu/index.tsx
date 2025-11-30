import { useEffect, useRef } from "react"

import { MobileMenuProps } from "./interfaces"
import styles from "./styles.module.scss"

function MobileMenu({ isOpen, onClose, children, className }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    const handleBackdropClick = (e: MouseEvent) => {
      if (e.target === backdropRef.current) {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscape)
    backdropRef.current?.addEventListener("click", handleBackdropClick)

    const firstFocusable = menuRef.current?.querySelector(
      'a, button, [tabindex]:not([tabindex="-1"])'
    ) as HTMLElement | null
    firstFocusable?.focus()

    return () => {
      document.removeEventListener("keydown", handleEscape)
      backdropRef.current?.removeEventListener("click", handleBackdropClick)
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      <div ref={backdropRef} className={`${styles.backdrop} ${isOpen ? styles.backdropOpen : ""}`} aria-hidden='true' />
      <div
        ref={menuRef}
        className={`${styles.menuContainer} ${isOpen ? styles.menuContainerOpen : ""} ${className || ""}`}
        role='dialog'
        aria-modal='true'
        aria-labelledby='mobile-menu-title'
      >
        <div className={styles.menuContent}>{children}</div>
      </div>
    </>
  )
}

export default MobileMenu
