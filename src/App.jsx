import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import ForgottenPassword from './components/ForgottenPassword';
import LogIn from './components/LogIn';
import Registration from './components/Registration';
import Account from './components/Account';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/forgotten-password" element={<ForgottenPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
};

export default App;
