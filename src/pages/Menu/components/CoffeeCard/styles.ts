import styled from "styled-components";

export const CoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 310px;
  width: 256px;
  border-radius: 10px 50px 10px 50px;
  background-color: ${(props) => props.theme["base-card"]};
`;

export const ImgIcon = styled.img`
  position: relative;
  bottom: 20px;
`;

export const TagContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 100px;
  padding: 6px;
  background-color: ${(props) => props.theme["yellow-light"]};
`;

export const TagTitle = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 10px;
  line-height: 130%;
  font-weight: bold;
  color: ${(props) => props.theme["yellow-dark"]};
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

export const TitleM = styled.p`
  font-family: "Baloo 2", monospace;
  font-size: 24px;
  line-height: 130%;
  font-weight: bolder;
  color: ${(props) => props.theme["base-text"]};
`;
