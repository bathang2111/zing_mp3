import { useState } from "react";
import { useSelector } from "react-redux";
import * as SC from "./StyleSearch";

const Search = (props) => {
  const [check, setCheck] = useState(false);
  const [text, setText] = useState({ value: "" });
  const topic = useSelector((state) => state.topic.mainTopic);

  const OnHandleChange = (event) => {
    setText({ value: event.target.value });
    if (event.target.value) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };

  const OnHandleCancle = (event) => {
    // console.log(text);
    setText({ value: "" });
    setCheck(false);
  };

  const OnHandleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <SC.Form
      onSubmit={OnHandleSubmit}
      header_search_form_background={topic.header_search_form_background}
    >
      <SC.SearchButton type="submit" />
      <SC.SearchText
        header_search_searchText_color={topic.header_search_searchText_color}
        header_search_searchText_placeholder_color={
          topic.header_search_searchText_placeholder_color
        }
        value={text.value}
        onChange={OnHandleChange}
        type="text"
        placeholder="nhap ten bai hat"
      />
      {check ? (
        <SC.CancleButton type="button" onClick={OnHandleCancle} />
      ) : null}
    </SC.Form>
  );
};
export default Search;
