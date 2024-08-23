import React from "react";
import "./style.css";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const DataTable = (props) => {
  const actionColumn = {
    field: "action",
    headerName: "Action",
    headerAlign: "center",
    width: 200,
    editable: false,
    renderCell: (params) => {
      return (
        <div className="action">
          <button className="edit">
            <EditIcon style={{ color: "#4bb592" }} />
          </button>
          <button className="delete">
            <DeleteForeverIcon style={{ color: "#d93d3d" }} />
          </button>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <Box sx={{ height: 700, width: "100%" }}>
        <DataGrid
          rows={props.rows}
          columns={[...props.columns, actionColumn]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          sx={{
            "& .status-cell": {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
            "& .action-cell": {
              "&.Mui-selected": {
                backgroundColor: "transparent !important",
              },
            },
            "& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within": {
              outline: "none !important",
            },
          }}
        />
      </Box>
    </div>
  );
};

export default DataTable;
