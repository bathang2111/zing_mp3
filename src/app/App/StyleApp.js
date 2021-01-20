import styled from "styled-components/macro";
import background from "./Images/mainBackground.jpg";

export const View = styled.div`
  display: flex;
  flex-direction: row;
`;
export const RightView = styled.div`
  background: ${props=>props.background};
  display: flex;
  width: calc(100% - 300px);
  height: 100vh;
  flex-direction: column;
`;
