import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';

class CreateResourcesForm extends React.Component {
  state = {
    data: {
      email: '',
      password: '',
      id: '',
      projectId: ''
    },
    loading: false,
    errors: {}
  };

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });

    if(Object.keys(errors).length === 0){
      this.props.submit(this.state.data);
      this.props.history.push('/dashbord');
    }
  };

  render() {
    const { data } = this.state;

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
                          <h3>Add New Resources</h3>
                      </div>
                  </div>
                  <div className="clearfix"></div>
              </div>
          </div>
          {/*<!-- /card below navbar -->*/}
          <div className="card card-no-border-top">
              <div className="card-body">
                  <div className="k_content">
                      <form className="container">
                          <div className="row justify-content-md-center">
                              <div className="form-group col-md-4">
                                  <div className="row">
                                      <div className="col-md-9 col-sm-9 col-xs-12">
                                          <input type="text" className="form-control custom-input" placeholder="Enter new role" />
                                      </div>
                                  </div>
                                  <br />
                                  <div className="row">
                                      <div className="col-md-9 col-sm-9 col-xs-12">
                                          <textarea type="text" rows="6" className="form-control custom-input" placeholder="Brief Info" />
                                      </div>
                                  </div>
                                  <br />
                                  <div className="row col-md-9 col-sm-9 col-xs-12">
                                      <table className="table">
                                          <thead className="thead-dark">
                                              <tr>
                                                  <th scope="col">Role</th>
                                                  <th scope="col">Brief Info</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <tr>
                                                  <th scope="row">R1</th>
                                                  <td>Maluleke Project</td>
                                              </tr>
                                              <tr>
                                                  <th scope="row">R2</th>
                                                  <td>Other Project</td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div>

                                  <br />
                                  <div className="row col-md-9 col-sm-9 col-xs-12">
                                      <button type="submit" className="btn btn-success form-control">Save Role</button>
                                  </div>

                              </div>
                              <div className="form-group col-md-4">
                                  <div className="row">
                                      <div className="col-md-9 col-sm-9 col-xs-12">
                                          <input type="text" className="form-control custom-input" placeholder="Enter new employee type" />
                                      </div>
                                  </div>
                                  <br />
                                  <div className="row">
                                      <div className="col-md-9 col-sm-9 col-xs-12">
                                          <textarea type="text" rows="6" className="form-control custom-input" placeholder="Brief Info" />
                                      </div>
                                  </div>

                                  <br />
                                  <div className="row col-md-9 col-sm-9 col-xs-12">
                                      <table className="table">
                                          <thead className="thead-dark">
                                              <tr>
                                                  <th scope="col">Type</th>
                                                  <th scope="col">Brief Info</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <tr>
                                                  <th scope="row">T1</th>
                                                  <td>Maluleke Project</td>
                                              </tr>
                                              <tr>
                                                  <th scope="row">T2</th>
                                                  <td>Other Project</td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div>

                                  <br />
                                  <div className="row col-md-9 col-sm-9 col-xs-12">
                                      <button type="submit" className="btn btn-success form-control">Save Employee Type</button>
                                  </div>

                              </div>
                              <div className="form-group col-md-4">
                                  <div className="row">
                                      <div className="col-md-9 col-sm-9 col-xs-12">
                                          <input type="text" className="form-control custom-input" placeholder="Enter new access level" />
                                      </div>
                                  </div>
                                  <br />
                                  <div className="row">
                                      <div className="col-md-9 col-sm-9 col-xs-12">
                                          <textarea type="text"  rows="6" className="form-control custom-input" placeholder="Brief Info" />
                                      </div>
                                  </div>

                                  <br />
                                  <div className="row col-md-9 col-sm-9 col-xs-12">
                                      <table className="table">
                                          <thead className="thead-dark">
                                              <tr>
                                                  <th scope="col">Level</th>
                                                  <th scope="col">Brief Info</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <tr>
                                                  <th scope="row">L1</th>
                                                  <td>Maluleke Project</td>
                                              </tr>
                                              <tr>
                                                  <th scope="row">L2</th>
                                                  <td>Other Project</td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div>

                                  <br />
                                  <div className="row col-md-9 col-sm-9 col-xs-12">
                                      <button type="submit" className="btn btn-success form-control">Save Access Level</button>
                                  </div>

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



export default CreateResourcesForm;
