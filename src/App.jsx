import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import SignupForm from './components/SignupForm';
import Home from './pages/Home';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<SignupForm />} />
    </Routes>
    <Footer />
  </>
);

export default App;
