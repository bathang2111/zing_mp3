import styled from "styled-components";
import Modal from "react-modal";

export const Modall = styled(Modal)`
  position: absolute;
  width: 40%;
  height: 75%;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  marginright: -50%;
  transform: translate(-50%, -50%);
  background: ${(props) => props.topicModal_background};
  // transition: all 1s;
  outline: none;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin-top: 0;
  padding: 10px;
  text-align: center;
  color:${(props) => props.topicModal_title_color};
  background: ${(props) => props.topicModal_title_background};
`;
export const Topic = styled.div`
  // width: 100%;
  margin: 20px;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden;
`;

export const TopicItem = styled.div`
  color: ${(props) => props.topicModal_topicitem_color};
  text-align: center;
  padding-top: 3px;
  width: 150px;
  height: 100px;
  background: ${(props) => props.background};
`;
