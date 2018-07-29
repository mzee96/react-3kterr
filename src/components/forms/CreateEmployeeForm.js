import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';

const propTypes={
  onSubmit: PropTypes.func
};


class CreateEmployeeForm extends React.Component {
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  state = {
    data: {
    "email": "string",
    "employeeCreationDate": "string",
    "employeeID": 0,
    "idNumber": "string",
    "name": "string",
    "phoneNumber": "string",
    "surname": "string",
    "userlogin": {
      "loginCredentialsID": 0,
      "password": "string",
      "roles": [
        {
          "roleName": "string"
        }
      ],
      "username": "string"
    }
  },
    loading: false,
    errors: {}
  };


  handleChange(event){
    const target = event.target;
    const name = event.target.surname;
    const surname = event.target.surname;

    this.setState({
      [name]: name,
      [surname]: surname
    })

  };

  onSubmit(event){

    event.preventDefault();
    const { data } = this.state;
    data.email = event.target.email.value;
    data.name = this.nameInput.value;
    data.surname = this.surnameInput.value;
    data.idNumber = event.target.idNumber.value;
    data.phoneNumber = event.target.phoneNumber.value;
    data.userlogin.password = event.target.password.value;
    data.userlogin.username = event.target.username.value;
    data.userlogin.roles[0].roleName = event.target.roleName.value;


    this.props.onSubmit(data);


    /*alert('submitted: ' + this.state.name);

    const {onSubmit, data} = this.props;

    onSubmit(data);*?
  };

  /*onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });

    if(Object.keys(errors).length === 0){
      this.props.submit(this.state.data);
      this.props.history.push('/dashbord');
    }*/
  };

  render() {


    return(
      <div className="container-fluid">
          {/*<!-- navbar -->*/}
          <nav id="topNav" className="navbar sticky-top navbar-expand-sm navbar-dark nav-color">
              <div className="container-fluid">
                  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="navbar-collapse collapse">
                      <ul className="nav navbar-nav">
                          <li className="active active-color">
                              <a className="nav-link" href="#">
                                  <div className="text-center">
                                      <span color="black" className="fa fa-bars"></span>
                                      <br />
                                      <font color="black">Menu</font>
                                  </div>
                              </a>
                          </li>
                      </ul>
                  </div>
                  <a className="navbar-brand mx-auto" href="#">3KTERR</a>
                  <div className="navbar-collapse collapse">
                      <ul className="nav navbar-nav ml-auto">
                          <li className="nav-item color1">
                              <a className="nav-link" href="#">
                                  <div className="text-center">
                                      <span className="fa fa-plus"></span>
                                      <br />
                                      <font color="white">New</font>
                                  </div>
                              </a>
                          </li>
                          <li className="nav-item color2">
                              <a className="nav-link" href="#">
                                  <div className="text-center">
                                      <span className="fa fa-bell"></span>
                                      <br />
                                      <font color="white">Notifications</font>
                                  </div>
                              </a>
                          </li>
                          <li className="nav-item color3">
                              <a className="nav-link" href="#">
                                  <div className="text-center">
                                      <span className="fa fa-clock"></span>
                                      <br />
                                      <font color="white">Schedule</font>
                                  </div>
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
          {/*<!-- /navbar -->*/}
          {/*<!-- card below navbar -->*/}
          <div className="card" id="navcard">
              <div className="card-body card-no-padding-bottom">

                  <div className="page-title">
                      <div className="text-center">
                          <h3>Add New Employee</h3>
                      </div>
                  </div>
                  <div className="clearfix"></div>
              </div>
          </div>
          {/*<!-- /card below navbar -->*/}
          <div className="card card-no-border-top">
              <div className="card-body">
                  <div className="k_content">
                      <form className="form-horizontal form-label-left" onSubmit={this.onSubmit}>
                          <div className="form-group row">
                              <label className="control-label col-md-3 col-sm-3 col-xs-12">First Name</label>
                              <div className="col-md-9 col-sm-9 col-xs-12">
                                  <input type="text" ref={nameInput => this.nameInput = nameInput} onChange={this.state.name} className="form-control custom-input col-md-9 col-sm-9" placeholder="First Name" />
                              </div>
                          </div>
                          <div className="form-group row">
                              <label className="control-label col-md-3 col-sm-3 col-xs-12">Surname</label>
                              <div className="col-md-9 col-sm-9 col-xs-12">
                                  <input type="text" ref={surnameInput => this.surnameInput = surnameInput} onChange={this.handleChange} className="form-control custom-input col-md-9 col-sm-9" placeholder="Surname" />
                              </div>
                          </div>
                          <div className="form-group row">
                              <label className="control-label col-md-3 col-sm-3 col-xs-12">Email</label>
                              <div className="col-md-9 col-sm-9 col-xs-12">
                                  <input type="text" id="email" name="email" className="form-control custom-input col-md-9 col-sm-9" placeholder="user@mail.com" />
                              </div>
                          </div>
                          <div className="form-group row">
                              <label className="control-label col-md-3 col-sm-3 col-xs-12">Username</label>
                              <div className="col-md-9 col-sm-9 col-xs-12">
                                  <input type="text" name="username" className="form-control custom-input col-md-9 col-sm-9" placeholder="username" />
                              </div>
                          </div>
                          <div className="form-group row">
                              <label className="control-label col-md-3 col-sm-3 col-xs-12">ID/Passport Number</label>
                              <div className="col-md-9 col-sm-9 col-xs-12">
                                  <input type="text" name="idNumber" className="form-control custom-input col-md-9 col-sm-9" placeholder="9712016531065" />
                              </div>
                          </div>
                          <div className="form-group row">
                              <label className="control-label col-md-3 col-sm-3 col-xs-12">Password</label>
                              <div className="col-md-9 col-sm-9 col-xs-12">
                                  <input type="password" name="password" className="form-control custom-input col-md-9 col-sm-9" placeholder="**********" />
                              </div>
                          </div>
                          <div className="form-group row">
                              <label className="control-label col-md-3 col-sm-3 col-xs-12">Phone</label>
                              <div className="col-md-9 col-sm-9 col-xs-12">
                                  <input type="text" name="phoneNumber" className="form-control custom-input col-md-9 col-sm-9" placeholder="0813124323" />
                              </div>
                          </div>
                          <div className="form-group row">
                              <label className="control-label col-md-3 col-sm-3 col-xs-12">Employee Type</label>
                              <div className="col-md-9 col-sm-9 col-xs-12">
                                  <select name="employeeType" className="form-control custom-input col-md-9 col-sm-9">
                                      <option>Choose option</option>
                                      <option>Option one</option>
                                      <option>Option two</option>
                                      <option>Option three</option>
                                      <option>Option four</option>
                                  </select>
                              </div>
                          </div>

                          <div className="form-group row">
                              <label className="control-label col-md-3 col-sm-3 col-xs-12">Role</label>
                              <div className="col-md-9 col-sm-9 col-xs-12">
                                  <select name="roleName" className="form-control custom-input col-md-9 col-sm-9">
                                      <option>Choose option</option>
                                      <option>Option one</option>
                                      <option>Option two</option>
                                      <option>Option three</option>
                                      <option>Option four</option>
                                  </select>
                              </div>
                          </div>
                          <div className="form-group row">
                              <label className="control-label col-md-3 col-sm-3 col-xs-12">Access Level</label>
                              <div className="col-md-9 col-sm-9 col-xs-12">
                                  <select name="accessLevel" className="form-control custom-input col-md-9 col-sm-9">
                                      <option>Choose option</option>
                                      <option>Option one</option>
                                      <option>Option two</option>
                                      <option>Option three</option>
                                      <option>Option four</option>
                                  </select>
                              </div>
                          </div>

                          <div className="ln_solid"></div>
                          <div className="form-group row">
                              <div className="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
                                  <button type="button" className="btn btn-primary">Cancel</button>
                                  <button type="reset" className="btn btn-primary">Reset</button>
                                  <button type="submit" className="btn btn-success">Submit</button>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
        </div>
    )
  }
}

CreateEmployeeForm.propTypes = propTypes;

export default CreateEmployeeForm;
