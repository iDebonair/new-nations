// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import OfferingForm from './components/OfferingForm';
import LiveStream from './components/LiveStream';
import Calendar from './components/Calendar';
import Home from './components/Home';
import Visit from './components/Visit';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/visit" element={<Visit />} />
          <Route path="/live-stream" element={<LiveStream />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/offering" element={<OfferingForm />} /> 
          <Route path="/" element={<Home />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
