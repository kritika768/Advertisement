import { useState } from "react";
import TableComponent from "../Table/TableComponent";
import DonutChart from "../TableSecond/DonutChart";
import TableSecond from "../TableSecond/TableSecond";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import { FormControlLabel, FormGroup, Switch, styled } from "@mui/material";

const Dashboard = () => {
  const [isDClick, setIsDClick] = useState(false);

  const toggleButtonClick = () => {
    setIsDClick(!isDClick);
  };

  return (
    <>
      <div style={{ display: "flex", gap: "20px"}}>
        <TableComponent />
        {isDClick ? <DonutChart /> : <TableSecond />}
      </div>
    </>
  );
};

export default Dashboard;
