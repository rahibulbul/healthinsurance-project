import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

// Main Page
import Home from "./pages/webpage/home/Home";
import Login from "./pages/webpage/login/Login";
import Registration from "./pages/webpage/register/Register";

// Components
import Header from "./components/webpage/header/Header";

// Employee Dashboard
import EmployeeDashboard from "./pages/dashboard/employee/home/Home";

// Layout Components
const MainLayout = ({ children }) => (
  <>
    <ScrollToTop />
    <Header />
    {children}
    {/* <Footer /> */}
  </>
);

const NoFooterLayout = ({ children }) => (
  <>
    <ScrollToTop />
    <Header />
    {children}
  </>
);

const DashboardLayout = ({ children }) => (
  <>
    <ScrollToTop />
    {children}
  </>
);

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/about"
        element={<MainLayout>{/* <About /> */}</MainLayout>}
      />
      <Route
        path="/services"
        element={<MainLayout>{/* <Services /> */}</MainLayout>}
      />
      <Route
        path="/get-quote"
        element={<MainLayout>{/* <GetQuote /> */}</MainLayout>}
      />
      <Route
        path="/payment"
        element={<MainLayout>{/* <Payment /> */}</MainLayout>}
      />
      <Route path="/shop" element={<MainLayout>{/* <Shop /> */}</MainLayout>} />

      <Route
        path="/login"
        element={<NoFooterLayout>{<Login />}</NoFooterLayout>}
      />
      <Route
        path="/registration"
        element={<NoFooterLayout>{<Registration />}</NoFooterLayout>}
      />
      <Route
        path="/forgot-password"
        element={<NoFooterLayout>{/* <Forgot /> */}</NoFooterLayout>}
      />
      <Route
        path="/appointment"
        element={<MainLayout>{/* <Appointment /> */}</MainLayout>}
      />
      <Route
        path="/terms-and-conditions"
        element={<MainLayout>{/* <Termsnconditions /> */}</MainLayout>}
      />
      <Route
        path="/registration-complete"
        element={
          <NoFooterLayout>{/* <Registrationcomplete /> */}</NoFooterLayout>
        }
      />
      <Route
        path="/employeedashboard/*"
        element={
          <DashboardLayout>
            <Routes>
              <Route index element={<EmployeeDashboard />} />
              {/* <Route path="newinsurance" element={<NewInsurance />} />
              <Route path="insurancecategory" element={<InsuranceCategory />} />
              <Route path="insurancerecord" element={<InsuranceRecord />} />
              <Route path="manageinsurance" element={<ManageInsurance />} />
              <Route path="patientlist" element={<PatientList />} />
              <Route path="managepatient" element={<ManagePatient />} />
              <Route path="medicalrecord" element={<MedicalRecord />} />
              <Route path="doctorlist" element={<DoctorList />} />
              <Route path="managedoctor" element={<ManageDoctor />} /> */}
            </Routes>
          </DashboardLayout>
        }
      />

      <Route
        path="/userdashboard/*"
        element={<DashboardLayout>{/* <UserDashboard /> */}</DashboardLayout>}
      />
    </Routes>
  </Router>
);

export default AppRoutes;
