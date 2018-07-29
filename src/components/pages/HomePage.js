import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div>
    <Link to="/login">Login</Link>
    <br/>
    <Link to="/DashboardWelcome">DashboardWelcome</Link>
    <br/>
    <Link to="/CreateEmployee">CreateEmployee</Link>
    <br/>
    <Link to="/CreateResources">CreateResources</Link>
    <br/>
    <Link to="/CreateProject">CreateProject</Link>
    <br/>
    <Link to="/CreateTeam">CreateTeam</Link>

  </div>
);

export default HomePage;
