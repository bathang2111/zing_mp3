import * as SC from "./StyleSongItem";

const SongItem = (props) => {
  return (
    <SC.View>
      <SC.Image />
      <SC.Contain>
        <SC.Title>Lac troi</SC.Title>
        <SC.Musician>Son Tung MTP</SC.Musician>
      </SC.Contain>
    </SC.View>
  );
};
export default SongItem;
