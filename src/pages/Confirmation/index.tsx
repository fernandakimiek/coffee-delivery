import {
  ConfirmationContainer,
  OrderBorderContainer,
  TextRegularL,
  TitleL,
} from "./styles";
import ConfirmationImage from "../../assets/ConfirmationImage.svg";

export function Confirmation() {
  return (
    <ConfirmationContainer>
      <div>
        <TitleL>Uhu! Pedido confirmado</TitleL>
        <TextRegularL>
          Agora é só aguardar que logo o café chegará até você
        </TextRegularL>
        <OrderBorderContainer>teste</OrderBorderContainer>
      </div>

      <img src={ConfirmationImage} />
    </ConfirmationContainer>
  );
}
