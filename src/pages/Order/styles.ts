import styled from "styled-components";

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  margin-left: 10rem;
  margin-right: 10rem;
  margin-top: 5rem;
  gap: 3rem;
  justify-content: center;
`;

export const TitleXS = styled.p`
  font-family: "Baloo 2", monospace;
  font-size: 18px;
  line-height: 130%;
  font-weight: bold;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 640px;
  border-radius: 10px;
  margin-top: 1rem;
  background-color: ${(props) => props.theme["base-card"]};
`;

export const CheckoutTextContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;
`;

export const CheckoutMapImg = styled.img`
  align-self: start;
  margin-right: 1rem;
`;

export const TextRegular = styled.p`
  font-family: "Roboto", sans-serif;
  line-height: 130%;
`;

export const TextRegularM = styled(TextRegular)`
  font-size: 16px;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const TextRegularS = styled(TextRegular)`
  font-size: 14px;
  color: ${(props) => props.theme["base-text"]};
`;

export const TextBoldL = styled(TextRegular)`
  font-size: 20px;
  color: ${(props) => props.theme["base-subtitle"]};
  font-weight: bold;
`;

export const CheckoutFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  width: 90%;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const BaseInput = styled.input`
  background: ${(props) => props.theme["base-input"]};
  height: 2.5rem;
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme["base-button"]};
  padding: 0 0.5rem;
  color: ${(props) => props.theme["base-text"]};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme["yellow-dark"]};
  }

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }
`;

export const InputContainer = styled.div`
  max-width: 100%;
  gap: 1rem;
  display: flex;
`;

export const BaseButton = styled.button`
  border: 2;
  border-color: transparent;
  padding: 1rem;
  border-radius: 6px;
  background: ${(props) => props.theme["base-button"]};

  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 0.5rem;
  font-size: 12px;
  font-family: "Roboto", sans-serif;

  cursor: pointer;
  height: 51px;

  color: ${(props) => props.theme["base-subtitle"]};

  &:not(:disabled):hover {
    background: ${(props) => props.theme["base-hover"]};
  }

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme["purple"]};
    background: ${(props) => props.theme["purple-light"]};
  }
`;

export const OptionPaymentContainer = styled.div`
  max-width: 100%;
  gap: 1rem;
  display: flex;
  justify-content: start;
  place-self: center;
  margin-bottom: 2rem;
`;

export const CoffeesOrderContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 498px;
  min-width: 448px;
  border-radius: 10px 50px 10px 50px;
  background-color: ${(props) => props.theme["base-card"]};
`;

export const CoffeesItemsContainer = styled.div`
  max-height: 280px;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  margin-top: 1rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 2rem 1rem 2rem;
  gap: 1rem;
`;

export const ConfirmButton = styled.button`
  border: 2;
  border-color: transparent;
  padding: 1rem;
  border-radius: 6px;
  background: ${(props) => props.theme["yellow"]};

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-size: 12px;
  font-family: "Roboto", sans-serif;

  cursor: pointer;
  height: 51px;

  color: ${(props) => props.theme["white"]};

  &:not(:disabled):hover {
    background: ${(props) => props.theme["yellow-dark"]};
  }
`;
