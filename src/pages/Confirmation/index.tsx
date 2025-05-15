import {
  ConfirmationContainer,
  IconContainer,
  OrderBorderContainer,
  TextIcon,
  TextRegularL,
  TextRegularM,
  TextRegularMBold,
  TitleL,
} from "./styles";
import ConfirmationImage from "../../assets/ConfirmationImage.svg";
import LocationIcon from "../../assets/LocationIcon.svg";
import ClockIcon from "../../assets/ClockIcon.svg";
import MoneyIcon from "../../assets/Money.svg";

export function Confirmation() {
  return (
    <ConfirmationContainer>
      <div>
        <TitleL>Uhu! Pedido confirmado</TitleL>
        <TextRegularL>
          Agora é só aguardar que logo o café chegará até você
        </TextRegularL>
        <OrderBorderContainer>
          <TextIcon>
            <IconContainer src={LocationIcon} />
            <div>
              <TextRegularM>
                Entrega em Rua João Daniel Martinelli, 102
              </TextRegularM>
              <TextRegularMBold>Farrapos - Porto Alegre, RS</TextRegularMBold>
            </div>
          </TextIcon>

          <TextIcon>
            <IconContainer src={ClockIcon} />
            <div>
              <TextRegularM> Previsão de entrega</TextRegularM>
              <TextRegularMBold> 20 min - 30 min</TextRegularMBold>
            </div>
          </TextIcon>

          <TextIcon>
            <IconContainer src={MoneyIcon} />

            <div>
              <TextRegularM> Pagamento na entrega</TextRegularM>
              <TextRegularMBold>Cartão de Crédito</TextRegularMBold>
            </div>
          </TextIcon>
        </OrderBorderContainer>
      </div>

      <img src={ConfirmationImage} />
    </ConfirmationContainer>
  );
}
