import { CardProps } from "./interfaces"
import * as S from "./styles"

function Card(props: CardProps) {
  const { children, backgroundColor } = props

  return (
    <S.CardContainer style={{ backgroundColor }}>
      <div style={{ padding: "1rem" }}>{children}</div>
    </S.CardContainer>
  )
}

export default Card
