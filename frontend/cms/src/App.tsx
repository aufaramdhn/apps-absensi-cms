import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Account from "./pages/Account";
// Setting
import Setting from "./pages/Setting";
import Profile from "./pages/Setting/Profile";
import Security from "./pages/Setting/Security";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Attendance" element={<Attendance />} />
          <Route path="/Account" element={<Account />} />
          {/* Setting */}
          <Route path="/Setting" element={<Setting />} />
          <Route path="/Setting/Profile" element={<Profile />} />
          <Route path="/Setting/Security" element={<Security />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
