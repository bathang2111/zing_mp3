import SongItem from "../../compunents/common/songItem/songItem";
import SongPlay from "../../compunents/common/songPlay/songPlay";
import { View } from "../common/pagestyle.js/style";
import * as SC from "./styleBangXepHang";

const BangXepHang = () => {
  return (
    <View>
      <SC.View>
        <SongPlay />
        <SongItem />
      </SC.View>
    </View>
  );
};
export default BangXepHang;
