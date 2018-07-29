import React from "react";
import DashboardWelcomeForm from "../forms/DashboardWelcomeForm"
import '../data/Content/css/bootstrap.min.css';
import '../data/Content/web-fonts-with-css/css/fontawesome-all.css';

import '../data/Content/css/custom.css';
import '../data/Content/css/calendar.css';
import '../data/Content/css/fullcalendar.min.css';
import '../data/Content/css/fullcalendar.print.css';
import '../data/Content/js/calendar.js';


class DashboardWelcome extends React.Component{
  submit = data => {
    console.log(data);
  };

  render(){
    return(
      <div>
        <DashboardWelcomeForm submit={this.submit}/>
      </div>
    );
  }
}

export default DashboardWelcome;
