import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./admin/pages/auth/Login";
import Dashboard from "./admin/pages/dashboard/Dashboard";
import Question from "./admin/pages/question/Question";
import Newquestion from "./admin/pages/question/Newquestion";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* admin routes */}
          <Route path="/" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/question" element={<Question/>} />
          <Route path="/new-question" element={<Newquestion/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
