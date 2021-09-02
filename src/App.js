import React from 'react';
import "./components/Fontawsomeicons"
import LoginPages from "./pages/LoginRegister/LoginPages";
import RegisterPages from './pages/LoginRegister/RegisterPages';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import './App.css';


function App() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={LoginPages} />
          <Route path="/register" component={RegisterPages} />
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
