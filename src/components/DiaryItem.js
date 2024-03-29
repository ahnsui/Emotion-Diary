import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";

const DiaryItem = ({ id, title, date, artist, music }) => {
  const strDate = new Date(parseInt(date)).toLocaleDateString();
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/diary/${id}`);
  };

  return (
    <div className="DiaryItem">
      <div onClick={goDetail} className="info_wrapper">
        <div className="diary_date">{strDate}</div>
        <div className="diary_content">{title.slice(0, 25)}</div>
        <div className="diary_content">
          <div className="diary_song_icon">
            <FontAwesomeIcon icon={faHeadphones} />{" "}
          </div>
          <div className="diary_song">
            {artist} - {music}
          </div>
        </div>
      </div>

      <div className="btn_wrapper">
        <MyButton
          text={"Edit"}
          type={"negative"}
          onClick={() => navigate(`/edit/${id}`)}
        />
      </div>
    </div>
  );
};

export default DiaryItem;
