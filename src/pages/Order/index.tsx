import {
  BaseButton,
  BaseInput,
  CheckoutContainer,
  CheckoutFormContainer,
  CheckoutMapImg,
  CheckoutTextContainer,
  CoffeesItemsContainer,
  CoffeesOrderContainer,
  ConfirmButton,
  InputContainer,
  OptionPaymentContainer,
  OrderContainer,
  TextBoldL,
  TextRegularM,
  TextRegularS,
  TitleXS,
  ValuesContainer,
} from "./styles";
import MapIcon from "../../assets/Map.svg";
import MoneyIcon from "../../assets/IconMoney.svg";
import CreditCardIcon from "../../assets/CreditCard.svg";
import DebitCardIcon from "../../assets/DebitCard.svg";
import MoneyOptionIcon from "../../assets/MoneyOption.svg";
import { CoffeeCard } from "./components/CoffeeCard";
import { CoffeesItems } from "../../utils/coffees";

export function Order() {
  return (
    <OrderContainer>
      <div>
        <TitleXS>Complete seu pedido</TitleXS>
        <CheckoutContainer>
          <CheckoutTextContainer>
            <CheckoutMapImg src={MapIcon} />
            <div>
              <TextRegularM>Endereço de Entrega</TextRegularM>
              <TextRegularS>
                Informe o endereço onde deseja receber seu pedido
              </TextRegularS>
            </div>
          </CheckoutTextContainer>
          <CheckoutFormContainer>
            <BaseInput placeholder="CEP" style={{ maxWidth: "40%" }} />
            <BaseInput placeholder="Rua" />
            <InputContainer>
              <BaseInput placeholder="Número" style={{ width: "40%" }} />
              <BaseInput placeholder="Complemento" style={{ width: "58%" }} />
            </InputContainer>
            <InputContainer>
              <BaseInput placeholder="Bairro" style={{ width: "40%" }} />
              <BaseInput placeholder="Cidade" style={{ width: "45%" }} />
              <BaseInput placeholder="UF" style={{ width: "10%" }} />
            </InputContainer>
          </CheckoutFormContainer>
        </CheckoutContainer>

        <CheckoutContainer>
          <CheckoutTextContainer>
            <CheckoutMapImg src={MoneyIcon} />
            <div>
              <TextRegularM>Pagamento</TextRegularM>
              <TextRegularS>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </TextRegularS>
            </div>
          </CheckoutTextContainer>
          <OptionPaymentContainer>
            <BaseButton>
              <img src={CreditCardIcon} style={{ alignSelf: "start" }} />
              CARTÃO DE CRÉDITO
            </BaseButton>
            <BaseButton>
              <img src={DebitCardIcon} style={{ alignSelf: "start" }} />
              CARTÃO DE DÉBITO
            </BaseButton>
            <BaseButton>
              <img src={MoneyOptionIcon} style={{ alignSelf: "start" }} />
              DINHEIRO
            </BaseButton>
          </OptionPaymentContainer>
        </CheckoutContainer>
      </div>

      <div>
        <TitleXS>Cafés selecionados</TitleXS>
        <CoffeesOrderContainer>
          <CoffeesItemsContainer>
            {CoffeesItems.map((item) => {
              return <CoffeeCard coffeeItem={item} />;
            })}
          </CoffeesItemsContainer>
          <ValuesContainer>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TextRegularS>Total de itens</TextRegularS>
              <TextRegularS>R$ 29,70</TextRegularS>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TextRegularS>Entrega</TextRegularS>
              <TextRegularS>R$ 3,50</TextRegularS>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TextBoldL>Total</TextBoldL>
              <TextBoldL>R$ 33,50</TextBoldL>
            </div>
            <ConfirmButton>CONFIRMAR PEDIDO</ConfirmButton>
          </ValuesContainer>
        </CoffeesOrderContainer>
      </div>
    </OrderContainer>
  );
}
