// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import OfferingForm from './components/OfferingForm';
import LiveStream from './components/LiveStream';
import Calendar from './components/Calendar';
import Home from './components/Home';
import Visit from './components/Visit';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pastorate from './components/Pastorate';
import Youth from './components/Youth';
import MinistryList from './components/Ministry';
import MembershipForm from './components/Membership';


const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/visit" element={<Visit />} />
          <Route path="/live-stream" element={<LiveStream />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/about" element={<About />} />
          <Route path="/pastorate" element={<Pastorate />} />
          <Route path="/offering" element={<OfferingForm />} /> 
          <Route exact path="/" element={<Home />} />
          <Route path="/youth-unusual" element={<Youth />} /> 
          <Route path="/ministries" element={<MinistryList />} /> 
          <Route path="/member-database" element={<MembershipForm />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
