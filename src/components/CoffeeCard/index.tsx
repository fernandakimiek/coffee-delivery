import {
  CoffeeContainer,
  BuyContainer,
  ImgIcon,
  TagContainer,
  TagTitle,
  TitleS,
  TextS,
  TitleM,
} from "./styles";

import CartButton from "../../assets/CartButton.svg";
import CounterButton from "../../assets/Counter.svg";

interface CoffeeCardProps {
  icon?: string;
}

export function CoffeeCard({ icon }: CoffeeCardProps) {
  return (
    <CoffeeContainer>
      <ImgIcon src={icon} width={120} height={120} />
      <TagContainer>
        <TagTitle>TRADICIONAL</TagTitle>
      </TagContainer>

      <TitleS>Expresso Tradicional</TitleS>
      <TextS>O tradicional café feito com água quente e grãos moídos</TextS>
      <BuyContainer>
        <TitleM>R$ 9,90</TitleM>
        <div style={{ display: "flex", gap: "10px" }}>
          <img src={CounterButton} />
          <img src={CartButton} />
        </div>
      </BuyContainer>
    </CoffeeContainer>
  );
}
