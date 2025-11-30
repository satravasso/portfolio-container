import { HamburgerIconProps } from "./interfaces"
import styles from "./styles.module.scss"

function HamburgerIcon({ isOpen, onClick, ariaLabel = "Menu", className }: HamburgerIconProps) {
  return (
    <button
      type='button'
      className={`${styles.hamburgerButton} ${className || ""}`}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-expanded={isOpen}
      role='button'
    >
      <div className={`${styles.hamburgerIcon} ${isOpen ? styles.isOpen : ""}`}>
        <span className={styles.line} />
        <span className={styles.line} />
        <span className={styles.line} />
      </div>
    </button>
  )
}

export default HamburgerIcon
