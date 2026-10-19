
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Employees from "./pages/Employees";
import Organization from "./pages/Organization";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/employees" />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/organization" element={<Organization />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
