import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DonutChart from "./DonutChart";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import style from "./Table.module.css";

const data = [
  {
    group: "Male",
    clicks: 348,
    cost: "USD 12,528",
    conversion: 42,
    revenue: "USD 62,118",
  },
  {
    group: "Female",
    clicks: 692,
    cost: "USD 24,912",
    conversion: 35,
    revenue: "5,175",
  },
  {
    group: "Unknown",
    clicks: 105,
    cost: "USD 3,943",
    conversion: 3,
    revenue: "USD 4,489",
  },
];

const TableSecond = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const handleSort = (key) => {
    let direction = "ascending";

    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }

    setSortConfig({ key, direction });
  };

  const [isDClick, setIsDClick] = useState(false);

  const toggleButtonClick = () => {
    setIsDClick(!isDClick);
  };

  const renderHeaderCell = (label, columnName) => (
    <TableCell style={{ width: "18%" }}>
      <Box display="flex" flexDirection="row" alignItems="center">
        {label}
        <Box display="flex" flexDirection="column">
          <IconButton onClick={() => handleSort(columnName)} size="small">
            <ExpandLessIcon
              color={
                sortConfig.key === columnName &&
                sortConfig.direction === "ascending"
                  ? "black"
                  : "rgba(0, 0, 0, 0.54)"
              }
              fontSize="small"
            />
          </IconButton>
          <IconButton
            onClick={() => handleSort(columnName)}
            size="small"
            style={{ marginTop: "-18px" }}
          >
            <ExpandMoreIcon
              color={
                sortConfig.key === columnName &&
                sortConfig.direction === "descending"
                  ? "black"
                  : "rgba(0, 0, 0, 0.54)"
              }
              fontSize="small"
            />
          </IconButton>
        </Box>
      </Box>
    </TableCell>
  );

  const sortedData = [...data].sort((a, b) => {
    if (sortConfig.direction === "ascending") {
      return a[sortConfig.key] - b[sortConfig.key];
    } else if (sortConfig.direction === "descending") {
      return b[sortConfig.key] - a[sortConfig.key];
    }
    return 0;
  });

  const totals = {
    clicks: sortedData.reduce((sum, row) => sum + row.clicks, 0),
    cost: sortedData.reduce(
      (sum, row) =>
        sum + parseFloat(row.cost.replace("USD ", "").replace(",", "")),
      0
    ),
    conversion: sortedData.reduce((sum, row) => sum + row.conversion, 0),
    revenue: sortedData.reduce(
      (sum, row) =>
        sum + parseFloat(row.revenue.replace("USD ", "").replace(",", "")),
      0
    ),
  };

  const formatTotal = (value) =>
    value % 1 === 0 ? value.toFixed(0) : value.toFixed(2);

  return (
    <Box mt={4} width="55%">
      <TableContainer style={{minHeight: "640px"}} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                colSpan={6}
                style={{ fontWeight: "bold", fontSize: "15px" }}
              >
                Ad Insights
              </TableCell>
            </TableRow>
            {isDClick ? null : (
              <TableRow>
                {renderHeaderCell("Groups", "group")}
                {renderHeaderCell("Clicks", "clicks")}
                {renderHeaderCell("Cost", "cost")}
                {renderHeaderCell("Conversion", "conversion")}
                {renderHeaderCell("Revenue", "revenue")}
              </TableRow>
            )}
          </TableHead>
          {isDClick ? (
            <DonutChart />
          ) : (
            <TableBody>
              {sortedData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.group}</TableCell>
                  <TableCell>{row.clicks}</TableCell>
                  <TableCell>{row.cost}</TableCell>
                  <TableCell>{row.conversion}</TableCell>
                  <TableCell>{row.revenue}</TableCell>
                </TableRow>
              ))}
              {/* Totals row */}
              <TableRow>
                <TableCell>Total</TableCell>
                <TableCell>{totals.clicks}</TableCell>
                <TableCell>{`USD ${formatTotal(totals.cost)}`}</TableCell>
                <TableCell>{totals.conversion}</TableCell>
                <TableCell>{`USD ${formatTotal(totals.revenue)}`}</TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
        <div className={style.cont}>
        <button
          onClick={toggleButtonClick}
          style={{
            backgroundColor: isDClick ? "blue" : "#D3D3D3",
            color: isDClick ? "white" : "black",
          }}
          className={style.dbtn}
        >
          <DonutLargeOutlinedIcon />
        </button>
        <button
          onClick={toggleButtonClick}
          style={{
            backgroundColor: !isDClick ? "blue" : "#D3D3D3",
            color: !isDClick ? "white" : "black",
          }}
          className={style.tbtn}
        >
          <TableChartOutlinedIcon />
        </button>
      </div>
      </TableContainer>
    </Box>
  );
};

export default TableSecond;
