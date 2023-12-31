import { useNavigate } from "react-router-dom";
import style from "./CreateAd.module.css";
import { useState } from "react";

const CreateAd = () => {
  const [selectedAdType, setSelectedAdType] = useState(null);
  const navigate = useNavigate();

  const handleAdTypeChange = (adType) => {
    setSelectedAdType(adType);
  };

  const clickHandler = () => {
    if (selectedAdType === "text") {
      navigate("/text");
    } else if (selectedAdType === "media") {
      navigate("/media");
    }
  };
  return (
    <>
      <div className={style.container}>
        <h4 className={style.heading}>Create Ads</h4>
        <div
          className={style.cont1}
        >
          <div
           className={style.imgdiv}
          >
            <div
             className={style.cont2}
            >
              <input
                type="checkbox"
                id="text"
                className={style.inp}
                onChange={() => handleAdTypeChange("text")}
              />
              <label for="text">
                <img src="/images/text.png" alt="" className={style.image} />
              </label>
            </div>
            <div
              className={style.cont3}
            >
              <p style={{ color: "#E8E8E8" }}>create</p>
              <p style={{ marginTop: "-18px", fontWeight: "bold" }}>Text Ad</p>
            </div>
          </div>

          <div
            style={{
              border: "1px solid rgb(231, 218, 218)",
              borderRadius: "20px",
            }}
          >
            <div
              className={style.cont2}
            >
              <input
                id="testCheck"
                type="checkbox"
                className={style.inp}
                onChange={() => handleAdTypeChange("media")}
              />
              <label for="testCheck">
                <img src="/images/media.png" alt="" className={style.image} />
              </label>
            </div>
            <div
              className={style.cont3}
            >
              <p style={{ color: "#E8E8E8" }}>create</p>
              <p style={{ marginTop: "-18px", fontWeight: "bold" }}>Media Ad</p>
            </div>
          </div>
        </div>
        <div className={style.btndiv}>
          <button className={style.btn} onClick={clickHandler}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateAd;
