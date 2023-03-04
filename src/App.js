import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import { Navbar, Login, Profile, WorkoutGen } from './components';

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#fff'}}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/user/:id" exact element={<Profile />} />
        <Route path="/generator" exact element={<WorkoutGen />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
