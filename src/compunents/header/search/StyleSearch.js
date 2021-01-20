
import styled from "styled-components/macro";
import search from "../Icon/search.png";
import cancle from "../Icon/cancle.png";

export const Form = styled.form`
  margin-left: 40px;
  height: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  background:${props=>props.header_search_form_background};  
  border-radius: 50px;
`;

export const SearchButton = styled.button`
  margin-left: 5px;
  height: 30px;
  width: 30px;
  border: none;
  background: url(${search});
  background-size: cover;
  background-position: center;
  border-radius: 40px 0 0 40px;
  :focus {
    outline: none;
  }
`;

export const CancleButton = styled.button`
  height: 20px;
  width: 20px;
  background: url(${cancle});
  background-size: cover;
  background-position: center;
  border: none;
  border-radius: 0 40px 40px 0;
  margin-right:10px; 
  transition: 2s;
  :focus {
    outline: none;
  }
`;

export const SearchText = styled.input`
  background: none;
  border: none;
  width: 100%;
  border-radius: 0 40px 40px 0;
  color:${props=>props.header_search_searchText_color};  
  ::placeholder {
    color:${props=>props.header_search_searchText_placeholder_color}; 
  }
  :focus {
    outline: none;
  }
`;
