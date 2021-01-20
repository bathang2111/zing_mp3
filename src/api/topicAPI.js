import axiosClien from "./axiosClient";

const TopicApi={
    getTopic:()=>{
        const url='/topic';
        return axiosClien.get(url);
    }
}
export default TopicApi;