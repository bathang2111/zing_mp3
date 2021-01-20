import { unwrapResult } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopicList, setTopicApp } from "../../features/topic/topic";
import * as SC from "./styleTopicModal";

const PopUp = (props) => {
  const dispatch = useDispatch();
  const [topic, setTopic] = useState([]);
  const mainTopic = useSelector((state) => state.topic.mainTopic);

   useEffect(async () => {
      const response = await dispatch(fetchTopicList());
      const list = unwrapResult(response);
      setTopic(list);
  }, []);

  const closeModal = () => {
    props.closeModall(false);
  };

  const topicApp = (value) => {
    const action = setTopicApp(value);
    dispatch(action);
  };

  const renderTopicItem = () => {
    const listItem = topic.map((item) => {
      return (
        <SC.TopicItem
          key={item.id}
          background={item.background_App}
          topicModal_topicitem_color={mainTopic.topicModal_topicitem_color}
          onClick={() => topicApp(item)}
        >
          {item.name}
        </SC.TopicItem>
      );
    });
    return listItem;
  };

  return (
    <SC.Modall
      isOpen={props.openModal}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      topicModal_background={mainTopic.topicModal_background}
      style={{
        overlay: {
          background: "rgba(0,0,0,0.3)",
        },
      }}
    >
      <SC.Title
        topicModal_title_background={mainTopic.topicModal_title_background}
        topicModal_title_color={mainTopic.topicModal_title_color}
      >
        Chủ Đề
      </SC.Title>
      <SC.Topic>{renderTopicItem()}</SC.Topic>
    </SC.Modall>
  );
};
export default PopUp;
