import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserStory1 from './pages/UserStory1';
import UserStory2 from './pages/UserStory2';
import UserStory3 from './pages/UserStory3';
import UserStory4 from './pages/UserStory4';
import Navigation from './Navigation';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/userstory1" element={<UserStory1 />} />
        <Route path="/userstory2" element={<UserStory2 />} />
        <Route path="/userstory3" element={<UserStory3 />} />
        <Route path="/userstory4" element={<UserStory4 />} />
      </Routes>
    </Router>
  );
};

export default App;
