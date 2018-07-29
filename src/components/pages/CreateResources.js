import React from "react";
import CreateResourcesForm from "../forms/CreateResourcesForm"
import "react-bootstrap";
import '../data/Content/web-fonts-with-css/css/fontawesome-all.css';

import '../data/Content/css/custom.css';
import '../data/Content/css/calendar.css';
import '../data/Content/css/fullcalendar.min.css';
import '../data/Content/css/fullcalendar.print.css';
import '../data/Content/js/calendar.js';


class CreateResources extends React.Component{
  submit = data => {
    console.log(data);
  };

  render(){
    return(
      <div>

        <script src="../data/Content/js/bootstrap.min.js"></script>
        <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
        <script src="../data/Content/js/custom.js"></script>
        <script src="../data/Content/js/calendar.js"></script>
        <script src="../data/Content/js/jquery.tagsinput.js"></script>
        <CreateResourcesForm submit={this.submit}/>
      </div>
    );
  }
}

export default CreateResources;
