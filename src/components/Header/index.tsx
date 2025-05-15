import { CartContainer, HeaderContainer } from "./styles";

import Logo from "../../assets/Logo.svg";
import LocationButton from "../../assets/Location.svg";
import Cart from "../../assets/Cart.svg";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="Coffee Delivery" />
      </Link>

      <CartContainer>
        <img src={LocationButton} />
        <img src={Cart} />
      </CartContainer>
    </HeaderContainer>
  );
}
