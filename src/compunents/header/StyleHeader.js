import styled from "styled-components/macro";
import arrowBack from "./Icon/arrowBack.png";
import arrowNext from "./Icon/arrowNext.png";
import { Link } from "react-router-dom";

export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  // justify-content: center;
  align-items: center;
  // width: 100%;
  height: 60px;
  // background: rgba(0, 100, 0, 0.3);
  margin: 0px 20px;
`;

export const iconBack = styled(Link)`
  width: 30px;
  height: 30px;
  background: url(${arrowBack});
  background-size: cover;
  background-position: center;
  margin-left: 20px;
`;

export const iconNext = styled(Link)`
  width: 30px;
  height: 30px;
  background: url(${arrowNext});
  background-size: cover;
  background-position: center;
  margin-left: 20px;
`;

export const Control = styled.div`
  // display: flex;
  // flex-direction: row;
  position: relative;
  height: 40px;
  width: 300px;
  margin-left: auto;
`;

export const Topic = styled.button`
  position: absolute;
  // margin-right:10px; 
  right: 50px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: rgba(200, 200, 200, 0.3);
  :focus {
    outline: none;
  }
`;

export const Private = styled.div`
  position: absolute;
  right: 0;
  top:0;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: rgba(200, 200, 200, 0.3);
`;
