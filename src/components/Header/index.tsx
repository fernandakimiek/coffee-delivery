import { CartContainer, HeaderContainer } from "./styles";

import Logo from "../../assets/Logo.svg";
import LocationButton from "../../assets/Location.svg";
import Cart from "../../assets/Cart.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <CartContainer>
        <img src={LocationButton} />
        <img src={Cart} />
      </CartContainer>
    </HeaderContainer>
  );
}
