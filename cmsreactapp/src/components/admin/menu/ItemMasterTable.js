import React from "react";
import { Box, Typography, useTheme, Button } from "@mui/material";
import { tokens } from "../../../theme";
import { mockData } from "./mockMenu";
import { DataGrid, GridActionsCellItem, GridRowId } from "@mui/x-data-grid";
import Header from "../common/Header";
import PostAddIcon from '@mui/icons-material/PostAdd';
import { useNavigate } from "react-router-dom";

export default function ItemMasterTable() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate()
  const colStructure = [
    {
      headerName: "Item Id",
      field: "id",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 1
    },
    {
      headerName: "Item Name",
      field: "item_name",
      headerAlign: "center",
      align: "center",
      flex:1
    },
    {
      headerName: "Item Price",
      field: "item_price",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex:1
    },
    {
      headerName: "Item Time",
      field: "item_time",
      type: "text",
      headerAlign: "center",
      align: "center",
    },
  ];

  const addItem=()=>{
    navigate("/admin/menu/add")
  }

  const displayItem=(params, event, details)=>{
    navigate("/admin/menu/display/" + params.id)
  }

  return (
    <Box m="20px">
      <Header
        title="Menu Items in Inventory"
        subtitle="All menu items previously registered"
      ></Header>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[800],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[800],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockData}
          columns={colStructure}
          onRowClick={displayItem}
          checkboxSelection
          disableRowSelectionOnClick {...mockData}
          initialState={{
            ...mockData.initialState,
            pagination: { paginationModel: { pageSize: 5 } },
          }} 
          pageSizeOptions={[5, 10, 25]}
        ></DataGrid>
      </Box>
      <Button
        variant="contained"
        sx={{
          backgroundColor: colors.blueAccent[400],
        }}
        onClick={addItem}
      >
        <PostAddIcon />
        &nbsp;&nbsp;Add Item
      </Button>
    </Box>
  );
}