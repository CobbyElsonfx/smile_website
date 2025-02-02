import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ReactGA from 'react-ga4';
import { useEffect } from 'react';

// Initialize GA4 with your measurement ID
ReactGA.initialize('G-XXXXXXXXXX'); // Replace with your actual Google Analytics measurement ID

function App() {
  // Track pageview on component mount
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
