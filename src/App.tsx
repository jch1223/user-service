import { BrowserRouter as Router } from 'react-router-dom';

import { Routes } from './pages/Routes';

export default function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}
