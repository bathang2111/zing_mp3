import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import TopicApi from "../../api/topicAPI";
import { TopicDefault } from "../../constants/topicDefault";

export const fetchTopicList = createAsyncThunk(
  "topic/getTopicList",
  async () => {
    try {
      const response = await axios.get('http://localhost:3000/topic')//TopicApi.getTopic();
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

const Topic = createSlice({
  name: "CHủ Đề",
  initialState: {
    listTopic: [],
    mainTopic: TopicDefault,
  },
  reducers: {
    setTopicApp: (state, action) => {
      state.mainTopic = action.payload;
      return state;
    },
  },
  extraReducers: {
    [fetchTopicList.fulfilled]: (state, action) => {
      state.listTopic = action.payload;
      return state;
    },
  },
});

const { reducer, actions } = Topic;
export const { setTopicApp } = actions;
export default reducer;
