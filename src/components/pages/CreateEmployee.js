import React,{Component} from "react";
import CreateEmployeeForm from "../forms/CreateEmployeeForm"
import '../data/Content/css/bootstrap.min.css';
import '../data/Content/web-fonts-with-css/css/fontawesome-all.css';

import '../data/Content/css/custom.css';
import '../data/Content/css/calendar.css';
import '../data/Content/css/fullcalendar.min.css';
import '../data/Content/css/fullcalendar.print.css';
import '../data/Content/js/calendar.js';
import axios from 'axios';


class CreateEmployee extends React.Component{
  constructor(props){
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  submit = data => {
    console.log(data);
  };

  onSubmit(data){

    var Request = require("request");

Request.post({
    "headers": { "content-type": "application/json" },
    "url": "http://45.77.59.132:53335/api/getEmployee/byEmployeeNumber",
    "body": JSON.stringify({
        "id": 1
    })
}, (error, response, body) => {
    console.log(response);
    console.log(body);
    if(error) {
        return console.log(error);
    }
    console.log(JSON.parse(body));
});



    console.log(JSON.stringify(data));
    axios.post('http://45.77.59.132:53335/swagger-ui.html#!/employee45controller/createEmployeeUsingPOST',data)
     .then(res => {
       console.log(res);
       console.log(res.data);
       //Perform action based on response
   })
     .catch(function(error){
       console.log(error);
       //Perform action based on error
     });

     var headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '/*',
            'Accept': '*'
        }

     axios.post('http://jsonplaceholder.typicode.com/users',headers, data).then(function(response) {
         console.log(response.data);
         console.log(response.status);
         console.log(response.statusText);
         console.log(response.headers);
         console.log(response.config);
         });

    axios.post('http://45.77.59.132:53335/api/getEmployee/byEmployeeNumber',headers, {'id':1}).then(function(response) {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
        })
        .catch(function(error){
          console.log(error);
          //Perform action based on error
        });
      }

  render(){
    return(
      <div>
        <CreateEmployeeForm submit={this.submit}
        onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

export default CreateEmployee;
