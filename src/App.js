import './App.css';
import { useState } from 'react';
import Navbar from './components/navbar';
import TextForm from './components/textForm';
import Alert from './components/alert';
import About from './components/about';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  //Dark Mode
  const toggleMode = () => {
    if (theme === 'primary') {
      setTheme('dark');
      document.body.style.backgroundColor = '#343a40';
      document.body.style.color = '#0d6efd';
      showAlert("Dark mode enable", "success");

    } else {
      setTheme('primary');
      document.body.style.backgroundColor = '#f8f9fa';
      document.body.style.color = '#343a40';
      showAlert("Light mode enable", "success")
    }
  }
  //Alert Showing
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }
  const [theme, setTheme] = useState('primary');
  const [alert, setAlert] = useState(null);
  return (
    <Router>
      <Navbar aboutTite='About Us' homeTitle='Dashboard' theme={theme} toggle={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route exact path="/" element={<TextForm heading='Enter the text to analyze' showAlert={showAlert} />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <Navbar /> */}
    </Router>
  );
}

export default App;
