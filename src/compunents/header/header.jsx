import { useState } from "react";
import { useHistory } from "react-router-dom";
import PopUp from "../topicModal/topicModal";
import Search from "./search/search";
import * as SC from "./StyleHeader";

const Header = (props) => {
  const history = useHistory();
  const [modalIsOpen, setIsOpen] = useState(false);

  const closeModal = (value) => {
    setIsOpen(value);
  };

  return (
    <SC.Navbar>
      <SC.iconBack onClick={() => history.goBack()} />
      <SC.iconNext onClick={(undo) => history.goForward()} />
      <Search />
      <SC.Control>
        <SC.Topic onClick={() => setIsOpen(true)} />
        <PopUp openModal={modalIsOpen} closeModall={closeModal} />
        <SC.Private />
      </SC.Control>
    </SC.Navbar>
  );
};
export default Header;
