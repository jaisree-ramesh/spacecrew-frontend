import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import App from './App';
import Mission from './Mission';
import Select from './Select';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={ <App /> } />
        <Route path="mission" element={ <Mission /> } />
        <Route path="select" element={ <Select /> } />

      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

