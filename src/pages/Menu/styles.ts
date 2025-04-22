import styled from "styled-components";
import BackgroundImage from "../../assets/Background.png";

export const BackgroundContainer = styled.div`
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 34rem;
`;

export const IntroContainer = styled.div`
  height: 34rem;
  margin-left: 10rem;
  margin-right: 10rem;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const TitleXl = styled.p`
  font-family: "Baloo 2", monospace;
  font-size: 48px;
  line-height: 130%;
  font-weight: bolder;
  color: ${(props) => props.theme["base-title"]};
`;

export const TitleSubtitle = styled.p`
  margin-top: 1.5rem;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  line-height: 130%;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const TextIconContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  max-width: 70%;
  gap: 20px;
`;

export const TextIcon = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 130%;
  color: ${(props) => props.theme["base-text"]};
  display: flex;
  align-items: center;
`;

export const IconContainer = styled.img`
  margin-right: 12px;
`;

export const CoffeesContainer = styled.div`
  height: 10rem;
  margin-left: 10rem;
  margin-right: 10rem;
  width: 100%;
  margin-top: 3rem;
`;

export const TitleL = styled.p`
  font-family: "Baloo 2", monospace;
  font-size: 32px;
  line-height: 130%;
  font-weight: bolder;
  color: ${(props) => props.theme["base-subtitle"]};
`;
