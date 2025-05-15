import styled from "styled-components";

export const ConfirmationContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 5rem;
`;

export const TitleL = styled.p`
  font-family: "Baloo 2", monospace;
  font-size: 32px;
  line-height: 130%;
  font-weight: bolder;
  color: ${(props) => props.theme["yellow-dark"]};
`;

export const TextRegular = styled.p`
  font-family: "Roboto", sans-serif;
  line-height: 130%;
`;

export const TextRegularM = styled(TextRegular)`
  font-size: 16px;
  color: ${(props) => props.theme["base-text"]};
  font-weight: lighter;
`;
export const TextRegularMBold = styled(TextRegular)`
  font-size: 16px;
  color: ${(props) => props.theme["base-text"]};
  font-weight: bold;
`;

export const TextRegularL = styled(TextRegular)`
  font-size: 20px;
  color: ${(props) => props.theme["base-subtitle"]};
  font-weight: lighter;
`;

export const OrderBorderContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 270px;
  min-width: 570px;
  border-radius: 10px 50px 10px 50px;
  background-color: transparent;
  border: solid ${(props) => props.theme["purple"]} 1px;
  gap: 2rem;
`;

export const TextIcon = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 130%;
  color: ${(props) => props.theme["base-text"]};
  display: flex;
  align-items: center;
  margin-left: 3rem;
`;

export const IconContainer = styled.img`
  margin-right: 12px;
`;
