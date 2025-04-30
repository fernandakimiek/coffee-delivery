import {
  BackgroundContainer,
  CoffeeMainImg,
  CoffeesContainer,
  CoffeesItemsContainer,
  IconContainer,
  IntroContainer,
  MainCoffeeContainer,
  TextIcon,
  TextIconContainer,
  TitleContainer,
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
import { CoffeesItems } from "./coffees";

export function Menu() {
  return (
    <div>
      <BackgroundContainer>
        <IntroContainer>
          <TitleContainer>
            <div>
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
                <IconContainer src={CoffeeIcon} />O café chega fresquinho até
                você
              </TextIcon>
            </TextIconContainer>
          </TitleContainer>

          <MainCoffeeContainer>
            <CoffeeMainImg src={MainCoffee} />
          </MainCoffeeContainer>
        </IntroContainer>
      </BackgroundContainer>

      <CoffeesContainer>
        <TitleL> Nossos cafés </TitleL>
        <CoffeesItemsContainer>
          {CoffeesItems.map((coffeeItem) => (
            <CoffeeCard coffeeItem={coffeeItem} />
          ))}
        </CoffeesItemsContainer>
      </CoffeesContainer>
    </div>
  );
}
