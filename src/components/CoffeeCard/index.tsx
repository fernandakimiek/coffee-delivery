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
import { CoffeeItem } from "../../pages/Menu/coffees";

interface CoffeeCardProps {
  coffeeItem: CoffeeItem;
}

export function CoffeeCard({ coffeeItem }: CoffeeCardProps) {
  return (
    <CoffeeContainer>
      <ImgIcon src={coffeeItem.icon} width={120} height={120} />
      <div style={{ display: "flex", flexDirection: "row", gap: "2px" }}>
        {coffeeItem.tags.length &&
          coffeeItem.tags.map((item) => (
            <TagContainer>
              <TagTitle>{item}</TagTitle>
            </TagContainer>
          ))}
      </div>
      <TitleS>{coffeeItem.title}</TitleS>
      <TextS>{coffeeItem.description}</TextS>
      <BuyContainer>
        <TitleM>{coffeeItem.cost}</TitleM>
        <div style={{ display: "flex", gap: "10px" }}>
          <img src={CounterButton} />
          <img src={CartButton} />
        </div>
      </BuyContainer>
    </CoffeeContainer>
  );
}
