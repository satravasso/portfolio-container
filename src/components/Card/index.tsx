import { CardProps } from "./interfaces"
import styles from "./styles.module.scss"

function Card(props: CardProps) {
  const { children, backgroundColor } = props

  return (
    <div className={styles.cardContainer} style={{ backgroundColor }}>
      <div className={styles.cardContent}>{children}</div>
    </div>
  )
}

export default Card
