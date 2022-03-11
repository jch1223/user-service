import { BrowserRouter as Router } from 'react-router-dom';
import SettingProvider from './components/app/SettingContext';

import { Routes } from './pages/routes';

export default function App() {
  return (
    <SettingProvider>
      <Router>
        <Routes />
      </Router>
    </SettingProvider>
  );
}
