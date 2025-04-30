import {
  BaseButton,
  BaseInput,
  CheckoutContainer,
  CheckoutFormContainer,
  CheckoutMapImg,
  CheckoutTextContainer,
  InputContainer,
  OptionPaymentContainer,
  OrderContainer,
  TextRegularM,
  TextRegularS,
  TitleXS,
} from "./styles";
import MapIcon from "../../assets/Map.svg";
import MoneyIcon from "../../assets/IconMoney.svg";
import CreditCardIcon from "../../assets/CreditCard.svg";
import DebitCardIcon from "../../assets/DebitCard.svg";
import MoneyOptionIcon from "../../assets/MoneyOption.svg";

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
              <img src={CreditCardIcon} style={{ alignSelf: "start" }} />
              CARTÃO DE CRÉDITO
            </BaseButton>
            <BaseButton>
              <img src={CreditCardIcon} style={{ alignSelf: "start" }} />
              CARTÃO DE CRÉDITO
            </BaseButton>
          </OptionPaymentContainer>
        </CheckoutContainer>
      </div>

      <div>
        <TitleXS>Cafés selecionados</TitleXS>
      </div>
    </OrderContainer>
  );
}
