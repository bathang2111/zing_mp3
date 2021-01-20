import styled from "styled-components";

export const View = styled.div`
  width: calc(100% - 330px);
  height: 65px;
  margin-left: 30px;
  background: rgba(75,30,110,0.2);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
`;

export const Contain = styled.div`
  height: 50px;
  margin-left: 20px;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  background: black;
  margin-left: 10px;
`;

export const Title = styled.h4`
  color: #ffffff;
  margin: 0px;
`;

export const Musician = styled.p`
  margin-top: 5px;
  font-size: 13px;
  color: rgb(150, 100, 200);
`;
