import styled from "styled-components";

export const LayoutContainer = styled.div`
  height: 100%;
  max-width: 100%;

  background-color: ${(props) => props.theme["background"]};
  display: flex;
  flex-direction: column;
`;
