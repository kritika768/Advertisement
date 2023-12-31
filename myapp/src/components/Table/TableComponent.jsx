import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const data = [
  { campaigns: 'Cosmetics', clicks: 712, cost: 'USD 4,272', conversion: 8, revenue: 'USD 16,568' },
  { campaigns: 'Serums', clicks: 3961, cost: 'USD 27,331', conversion: 115, revenue: 'USD 362,256' },
  { campaigns: 'Facewash', clicks: 9462, cost: 'USD 76,831', conversion: 123, revenue: 'USD 266,800' },
  { campaigns: 'Shampoos', clicks: 439, cost: 'USD 2,151', conversion: 5, revenue: 'USD 11,029' },
  { campaigns: 'Conditioners', clicks: 1680, cost: 'USD 3,864', conversion: 49, revenue: 'USD 175,245' },
  { campaigns: 'Facewash 2', clicks: 4978, cost: 'USD 29,370', conversion: 189, revenue: 'USD 623,106' },
];

const TableComponent = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const handleSort = (key) => {
    let direction = 'ascending';

    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    setSortConfig({ key, direction });
  };

  const renderHeaderCell = (label, columnName) => (
    <TableCell style={{ width: '18%' }}>
      <Box display="flex" flexDirection="row" alignItems="center">
        {label}
        <Box display="flex" flexDirection="column" >
          <IconButton onClick={() => handleSort(columnName)} size="small">
            <ExpandLessIcon
              color={
                sortConfig.key === columnName && sortConfig.direction === 'ascending'
                  ? 'black'
                  : 'rgba(0, 0, 0, 0.54)'
              }
              fontSize="small"
              
            />
          </IconButton>
          <IconButton onClick={() => handleSort(columnName)} size="small" style={{ marginTop: "-18px"}}>
            <ExpandMoreIcon
              color={
                sortConfig.key === columnName && sortConfig.direction === 'descending'
                  ? 'black'
                  : 'rgba(0, 0, 0, 0.54)'
              }
              fontSize="small"
             
            />
          </IconButton>
        </Box>
      </Box>
    </TableCell>
  );

  const sortedData = [...data].sort((a, b) => {
    if (sortConfig.direction === 'ascending') {
      return a[sortConfig.key] - b[sortConfig.key];
    } else if (sortConfig.direction === 'descending') {
      return b[sortConfig.key] - a[sortConfig.key];
    }
    return 0;
  });

  // Calculate totals for each column
  const totals = {
    clicks: sortedData.reduce((sum, row) => sum + row.clicks, 0),
    cost: sortedData.reduce((sum, row) => sum + parseFloat(row.cost.replace('USD ', '').replace(',', '')), 0),
    conversion: sortedData.reduce((sum, row) => sum + row.conversion, 0),
    revenue: sortedData.reduce((sum, row) => sum + parseFloat(row.revenue.replace('USD ', '').replace(',', '')), 0),
  };

  const formatTotal = (value) => (value % 1 === 0 ? value.toFixed(0) : value.toFixed(2));

  return (
    <Box mt={4} width="55%">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan={6} style={{ fontWeight: 'bold', fontSize: '15px' }}>
                Ad Insights
              </TableCell>
            </TableRow>
            <TableRow>
              {renderHeaderCell('Campaign', 'campaign')}
              {renderHeaderCell('Clicks', 'clicks')}
              {renderHeaderCell('Cost', 'cost')}
              {renderHeaderCell('Conversion', 'conversion')}
              {renderHeaderCell('Revenue', 'revenue')}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.campaigns}</TableCell>
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
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableComponent;
