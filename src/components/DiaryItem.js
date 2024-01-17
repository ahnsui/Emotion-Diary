import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom";

const DiaryItem = ({ id, emotion, content, date }) => {
  const strDate = new Date(parseInt(date)).toLocaleDateString();
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/diary/${id}`);
  };

  return (
    <div className="DiaryItem">
      <div onClick={goDetail} className="emotion_img_wrapper">
        <img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`} />
      </div>

      <div onClick={goDetail} className="info_wrapper">
        <div className="diary_date">{strDate}</div>
        <div className="diary_content">{content.slice(0, 25)}</div>
      </div>

      <div className="btn_wrapper">
        <MyButton
          text={"EDIT"}
          type={"negative"}
          onClick={() => navigate(`/edit/${id}`)}
        />
      </div>
    </div>
  );
};

export default DiaryItem;