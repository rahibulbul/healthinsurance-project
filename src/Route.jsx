import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

// Main Page
import Home from "./pages/landing/home/Home";
// import About from "./components/main/about/About";
// import Services from "./components/main/services/Services";
// import GetQuote from "./components/main/get-quote/GetQuote";
// import Payment from "./components/main/payment/Payment";
// import Shop from "./components/main/shop/Shop";
// import Header from "./components/main/header/Header";
// import Footer from "./components/main/footer/Footer";
// import Login from "./components/main/login/Login";
// import Registration from "./components/main/registration/Registration";
// import Forgot from "./components/main/forgot/Forgot";
// import Appointment from "./components/main/appointment/Appointment";
// import Termsnconditions from "./components/main/termsnconditions/Termsnconditions";
// import Registrationcomplete from "./components/main/registrationcomplete/Registrationcomplete";

// Employee Dashboard Page
// import EmployeeDashboard from "./components/dashboard/employeedashboard/index/Index";

// User Dashboard Page

// Layout Components
const MainLayout = ({ children }) => (
  <>
    <ScrollToTop />
    {/* <Header /> */}
    {children}
    {/* <Footer /> */}
  </>
);

const NoFooterLayout = ({ children }) => (
  <>
    <ScrollToTop />
    {/* <Header /> */}
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
        element={<NoFooterLayout>{/* <Login /> */}</NoFooterLayout>}
      />
      <Route
        path="/registration"
        element={<NoFooterLayout>{/* <Registration /> */}</NoFooterLayout>}
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
              {/* <Route index element={<EmployeeDashboard />} /> */}
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
