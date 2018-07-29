import React from 'react';
import {Route} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Login from "./components/pages/Login";
import DashboardWelcome from "./components/pages/DashboardWelcome";
import CreateEmployee from "./components/pages/CreateEmployee";
import CreateResources from "./components/pages/CreateResources";
import CreateProject from "./components/pages/CreateProject";
import CreateTeam from "./components/pages/CreateTeam";

const App = () => (
  <div className="App">
    <Route path="/" exact component={HomePage}/>
    <Route path="/login" exact component={Login}/>
    <Route path="/DashboardWelcome" exact component={DashboardWelcome}/>
    <Route path="/CreateEmployee" exact component={CreateEmployee}/>
    <Route path="/CreateResources" exact component={CreateResources}/>
    <Route path="/CreateProject" exact component={CreateProject} />
    <Route path="/CreateTeam" exact component={CreateTeam} />
  </div>
);

export default App;
