import React, { useState } from "react";
import "./insurance.css";
import EmployeeSidebar from "../../../../components/dashboard/employee/sidebar/Sidebar";
import EmployeeHeader from "../../../../components/dashboard/employee/header/Header";
import DataTable from "../../../../components/dashboard/employee/DataTable/DataTable";
import {
  dummyAllInsurance,
  insuranceCategory,
} from "../../../../utils/dummyChart/data";
import CheckIcon from "@mui/icons-material/Check";
import SyncIcon from "@mui/icons-material/Sync";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Typography } from "@mui/material";

const statusStyles = {
  accepted: {
    color: "green",
    icon: <CheckIcon fontSize="small" />,
    backgroundColor: "#e0f7ea",
    borderColor: "green",
  },
  rejected: {
    color: "red",
    icon: <CloseIcon fontSize="small" />,
    backgroundColor: "#fde0e0",
    borderColor: "red",
  },
  pending: {
    color: "orange",
    icon: <SyncIcon fontSize="small" />,
    backgroundColor: "#fff4e5",
    borderColor: "orange",
  },
};

const renderStatus = (params) => {
  const status = params.value || "unknown";
  const { color, icon, backgroundColor, borderColor } =
    statusStyles[status] || {};
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "16px",
        backgroundColor,
        color,
        border: `1px solid ${borderColor}`,
        width: "100px",
        height: "30px",
        margin: "10px auto",
        cursor: "pointer",
      }}
    >
      {icon && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mr: 0.5,
          }}
        >
          {icon}
        </Box>
      )}
      <Typography variant="body2" sx={{ fontWeight: "bold", lineHeight: 1 }}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Typography>
    </Box>
  );
};

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "FullName",
    headerName: "Full Name",
    width: 200,
    editable: true,
    align: "left",
    headerAlign: "center",
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 100,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "username",
    headerName: "username",
    width: 200,
    sortable: false,
    valueGetter: (value, row) =>
      `@${row.FullName.replace(/\s+/g, "").toLowerCase()}`,
    align: "left",
    headerAlign: "center",
  },
  {
    field: "phone",
    headerName: "Phone",
    type: "number",
    width: 200,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "category",
    headerName: "Category",
    width: 200,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    editable: false,
    renderCell: renderStatus,
    headerAlign: "center",
  },
];

const Insurance = () => {
  const [activeTab, setActiveTab] = useState("all-insurance");
  const [showInsuranceFile, setShowInsuranceFile] = useState(false);

  const showTab = (tab) => {
    setActiveTab(tab);
  };

  const handleCreateInsuranceClick = () => {
    setShowInsuranceFile(true);
  };

  const handleCloseInsuranceFile = () => {
    setShowInsuranceFile(false);
  };

  return (
    <div className="emp-base">
      <div className="emp-base-sidebar">
        <EmployeeSidebar />
      </div>
      <div className="emp-container">
        <div className="emp-base-header">
          <EmployeeHeader />
        </div>
        <div className="emp-base-main insurance">
          <div className="insurance-tabButton">
            <button
              onClick={() => showTab("all-insurance")}
              className={activeTab === "all-insurance" ? "btn-active" : ""}
            >
              All Insurance
            </button>
            <button
              onClick={() => showTab("insurance-category")}
              className={activeTab === "insurance-category" ? "btn-active" : ""}
            >
              Insurance category
            </button>
          </div>
          <div
            className={`insurance-tab all-insurance ${
              activeTab === "all-insurance" ? "show" : ""
            }`}
          >
            <div className="top">
              <div className="title">
                <span>All Insurance</span>
                <p>
                  Here you can see all insurance holder and can open insurance
                  file
                </p>
              </div>
              <div className="open-file">
                <button
                  className="open-file-btn"
                  onClick={handleCreateInsuranceClick}
                >
                  Create insurance file
                </button>
                {showInsuranceFile && (
                  <>
                    <div className="overlay"></div>
                    <div className="insurance-file-panel show">
                      <div className="title">
                        <span>Create Insurance File</span>
                        <i
                          className="ph ph-x"
                          onClick={handleCloseInsuranceFile}
                        />
                      </div>
                      <div className="form-body">
                        <form action="" className="new-insurance-form">
                          <div className="form-item"></div>
                          <div className="form-group">
                            <div className="form-item"></div>
                            <div className="form-item"></div>
                          </div>
                          <div className="form-group">
                            <div className="form-item"></div>
                            <div className="form-item"></div>
                          </div>
                          <div className="form-group">
                            <div className="form-item"></div>
                          </div>
                          <div className="form-group">
                            <div className="form-item"></div>
                            <div className="form-item"></div>
                          </div>
                          <div className="create-btn">
                            <div className="btn"></div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="bottom">
              <DataTable columns={columns} rows={dummyAllInsurance} />
            </div>
          </div>
          <div
            className={`insurance-tab insurance-category ${
              activeTab === "insurance-category" ? "show" : ""
            }`}
          >
            insurance-category
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
