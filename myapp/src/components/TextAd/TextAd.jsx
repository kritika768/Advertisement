import { useNavigate } from "react-router-dom";
import style from "./TextAd.module.css";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const TextAd = () => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const backClick = () => {
    navigate("/create");
  };

  useEffect(() => {
    if (submitted) {
      const timeoutId = setTimeout(() => {
        navigate("/create");
      }, 600);
      return () => clearTimeout(timeoutId);
    }
  }, [submitted]);

  const handleButtonClick = () => {
    setSubmitted(true);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className={style.container}>
        <h4 className={style.heading}>Create Text & Media</h4>
        <div className={style.lg}>
          <div style={{ width: "100%" }}>
            <div style={{ width: "100%" }}>
              <label htmlFor="" className={style.label}>
                Heading 01
              </label>
              <input
                type="text"
                placeholder="Add a heading that would make user intrested"
                className={style.input}
                style={{ width: "97%" }}
              />
            </div>
            <div className={style.cont}>
              <label htmlFor="" className={style.label}>
                Heading 02
              </label>
              <input
                type="text"
                placeholder="Add a heading that would make user intrested"
                className={style.input}
                style={{ width: "97%" }}
              />
            </div>
          </div>

          <div style={{ width: "100%" }}>
            <label htmlFor="" className={style.label}>
              Description 01
            </label>
            <input
              type="text"
              placeholder="Add primary text to help users understand more about your product service and offers"
              className={style.input}
              style={{ width: "97%", height: "70%" }}
            />
          </div>
        </div>
        <div className={style.lg}>
          <div className={style.cont}>
            <label htmlFor="" className={style.label}>
              Buisness Name
            </label>
            <input
              type="text"
              placeholder="Add your buisness name"
              className={style.input}
              style={{ width: "97%" }}
            />
          </div>
          <div
            className={style.bl}
          >
            <label htmlFor="" className={style.label}>
              Button Label
            </label>
            <input
              type="text"
              placeholder="Select a label that best suits your ad"
              className={style.input}
              style={{ width: "97%" }}
            />
          </div>
        </div>
        <div>
          <label htmlFor="" className={style.label}>
            Website URL
          </label>
          <input
            type="text"
            placeholder="Add the URL of the landing page you want to redirect user to"
            className={style.input}
            style={{ width: "98%" }}
          />
        </div>
        <div className={style.btng}>
          <button className={style.btnb} onClick={backClick}>
            Back
          </button>
          <button className={style.btns} onClick={handleButtonClick}>Submit</button>
        </div>
        <Dialog open={open} onClose={handleClose}>
          <DialogContent>
            <CheckCircleIcon sx={{ fontSize: 30, color: "primary" }} />
            <Typography variant="h6">Submitted</Typography>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default TextAd;
