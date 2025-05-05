import styled from "styled-components";

export const CoffeeContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 80px;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem;
  margin: 2rem 2rem 1rem 1rem;
`;

export const BuyContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;

export const TitleS = styled.p`
  font-family: "Baloo 2", monospace;
  font-size: 20px;
  line-height: 130%;
  font-weight: bold;
  color: ${(props) => props.theme["base-subtitle"]};
  margin-top: 1rem;
`;

export const TextS = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  line-height: 130%;
  font-weight: lighter;
  width: 70%;
  color: ${(props) => props.theme["base-label"]};
  margin-top: 0.5rem;
`;

export const TextRegular = styled.p`
  font-family: "Roboto", sans-serif;
  line-height: 130%;
`;

export const TextRegularM = styled(TextRegular)`
  font-size: 16px;
  color: ${(props) => props.theme["base-text"]};
`;

export const TitleM = styled.p`
  font-family: "Baloo 2", monospace;
  font-size: 24px;
  line-height: 130%;
  font-weight: bolder;
  color: ${(props) => props.theme["base-text"]};
`;

export const Line = styled.hr`
  border-color: ${(props) => props.theme["base-button"]};
  border-width: thin;
`;
