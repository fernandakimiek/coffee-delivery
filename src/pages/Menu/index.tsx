import {
  BackgroundContainer,
  CoffeesContainer,
  IconContainer,
  IntroContainer,
  TextIcon,
  TextIconContainer,
  TitleL,
  TitleSubtitle,
  TitleXl,
} from "./styles";

import MainCoffee from "../../assets/Maincoffee.svg";
import CartIcon from "../../assets/CartIcon.svg";
import DeliveryIcon from "../../assets/DeliveryIcon.svg";
import ClockIcon from "../../assets/ClockIcon.svg";
import CoffeeIcon from "../../assets/CoffeeIcon.svg";
import { CoffeeCard } from "../../components/CoffeeCard";
import ExpressoTradicional from "../../assets/ExpressoTradicional.svg";

export function Menu() {
  return (
    <BackgroundContainer>
      <IntroContainer>
        <div>
          <div style={{ width: "70%" }}>
            <TitleXl>
              Encontre o café perfeito para qualquer hora do dia
            </TitleXl>
            <TitleSubtitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </TitleSubtitle>
          </div>

          <TextIconContainer>
            <TextIcon>
              <IconContainer src={CartIcon} />
              Compra simples e segura
            </TextIcon>

            <TextIcon>
              <IconContainer src={DeliveryIcon} />
              Embalagem mantém o café intacto
            </TextIcon>

            <TextIcon>
              <IconContainer src={ClockIcon} />
              Entrega rápida e rastreada
            </TextIcon>

            <TextIcon>
              <IconContainer src={CoffeeIcon} />O café chega fresquinho até você
            </TextIcon>
          </TextIconContainer>
        </div>

        <div style={{ width: "30%", marginRight: 250 }}>
          <img src={MainCoffee} />
        </div>
      </IntroContainer>

      <CoffeesContainer>
        <TitleL> Nossos cafés </TitleL>
        <CoffeeCard icon={ExpressoTradicional} />
      </CoffeesContainer>
    </BackgroundContainer>
  );
}
