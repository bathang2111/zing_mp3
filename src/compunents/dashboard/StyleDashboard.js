import styled from "styled-components/macro";
import { Link, NavLink } from "react-router-dom";

export const active = true;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100vh;
  background: ${props=>props.background};
`;

export const Logo = styled(NavLink)`
  text-decoration: none;
  text-indent:50px; 
  font-size: 40px;
  color: ${props=>props.dashboard_logo_color};
  width: 100%;
  margin-bottom: 20px;
  &:hover {
    color: ${props=>props.dashboard_logo_hover_color};
  }
`;

export const Item = styled(NavLink)`
  text-indent:50px; 
  text-decoration: none;
  line-height: 40px;
  width: 100%;
  height: 40px;
  color:${props=>props.dashboard_item_color};
  letter-spacing: 1px;
  transition: all 0.1s;
  &:hover {
    color: ${props=>props.dashboard_item_hover_color};
  }
  &.${active} {
    color: ${props=>props.dashboard_item_active_color};
    background: ${props=>props.dashboard_item_active_background};
  }
`;
