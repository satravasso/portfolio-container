import DropdownProps from "./interfaces"
import styles from "./styles.module.scss"

function Dropdown(props: DropdownProps) {
  const { children, open } = props

  return (
    <>
      {open && (
        <div className={styles.dropdownContainer}>
          <div className={styles.dropdownContent}>{children}</div>
        </div>
      )}
    </>
  )
}

export default Dropdown
