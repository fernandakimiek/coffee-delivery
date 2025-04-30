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
  margin-left: 15rem;
  margin-right: 10rem;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  flex-flow: wrap;
  gap: 5rem;
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
  gap: 20px;
  max-width: 70%;
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

export const MainCoffeeContainer = styled.div`
  @media (max-width: 2150px) {
    max-width: 50%;
  }
`;

export const TitleContainer = styled.div`
  @media (max-width: 2150px) {
    max-width: 50%;
  }
  @media (max-width: 1590px) {
    max-width: 100%;
  }
`;

export const CoffeeMainImg = styled.img`
  @media (max-width: 1590px) {
    display: none;
  }
`;
export const CoffeesContainer = styled.div`
  height: 10rem;
  margin-left: 10rem;
  margin-right: 10rem;
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

export const TitleL = styled.p`
  font-family: "Baloo 2", monospace;
  font-size: 32px;
  line-height: 130%;
  font-weight: bolder;
  color: ${(props) => props.theme["base-subtitle"]};
  margin-left: 5rem;
`;

export const CoffeesItemsContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  column-gap: 100px;
  row-gap: 50px;
  max-width: 80%;
  justify-content: center;
`;
