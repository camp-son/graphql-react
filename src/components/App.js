import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Detail from '../routes/Detail';
import Home from '../routes/Home';
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
