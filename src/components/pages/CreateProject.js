import React, {Component} from "react";
import CreateProjectForm from "../forms/CreateProjectForm"

import '../data/Content/css/bootstrap.min.css';
import '../data/Content/web-fonts-with-css/css/fontawesome-all.css';

import '../data/Content/css/custom.css';
import '../data/Content/css/calendar.css';
import '../data/Content/css/fullcalendar.min.css';
import '../data/Content/css/fullcalendar.print.css';


import "../data/Content/js/custom.js";
import "../data/Content/js/calendar.js";
import "../data/Content/js/jquery.tagsinput.js";

class CreateProject extends React.Component{

  submit = data => {
    console.log(data);
  };

  render(){
    return(
      <div>
        <CreateProjectForm submit={this.submit}/>
      </div>
    );
  }


}

export default CreateProject;
