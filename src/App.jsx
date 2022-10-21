import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import SignupForm from './components/SignupForm';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<SignupForm />} />
      <Route path="/home/dashboard" element={<Dashboard />} />
    </Routes>
    <Footer />
  </>
);

export default App;
