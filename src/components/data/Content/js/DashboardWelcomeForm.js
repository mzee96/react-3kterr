import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';

class DashboardWelcomeForm extends React.Component {
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

          <div className="sticky-top">
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

                      {/*<!-- input for search -->*/}
                      <div className="row float-right">
                          <div className="text-center">
                              <div id="" className="form-group pull-right top_search">
                                  <div className="input-group col-md-12">
                                          <input type="text" className="form-control" placeholder="Search..." />
                                          <span className="input-group-btn">
                                              <button className="btn btn-default" type="button">Go!</button>
                                          </span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      {/*<!-- /input for search -->*/}
                      <br />
                      {/*<!-- Header with navigations -->*/}
                      <div className="text-center">
                          <br />
                          <h5 className="card-title">Welcome to Projects</h5>
                          <br />

                      </div>
                      {/*<!-- Header with navigations -->*/}
                  </div>
              </div>
              {/*<!-- /card below navbar -->*/}
          </div>



          <div className="card card-no-border-top">
              <div className="card-body">
                  <div className="tab-content" id="myTabContent">
                      <div className="tab-pane fade show active">
                          <br />
                          <div className="row justify-content-center">
                              <div className="col-md-10">

                                  <div className="hr-line">
                                      <span className="hr-text">
                                          URGENT PROJECTS
                                      </span>
                                  </div>
                                  <br/>

                                      <div className="row">
                                          <a href="Dashboard.html" className="col-sm-4">
                                              <div className="card text-center nav-color">
                                                  <div className="card-body">
                                                      <h4 className="card-title"> <span className="badge badge-dark">15</span></h4>
                                                      <p className="card-text white">Maluleke Project</p>
                                                      <br />
                                                  </div>
                                              </div>
                                          </a>
                                      </div>
                                      <br />


                                  <div className="hr-line">
                                      <span className="hr-text">
                                          OTHER PROJECTS
                                      </span>
                                  </div>
                                  <br />

                                      <div className="row">
                                          <a href="#" className="col-sm-4">
                                              <div className="card text-center color3">
                                                  <div className="card-body">
                                                      <h4 className="card-title"> <span className="badge badge-dark">0</span></h4>
                                                      <p className="card-text white">Hello Project 1</p>
                                                      <br />
                                                  </div>
                                              </div>
                                          </a>

                                          <a href="#" className="col-sm-4">
                                              <div className="card text-center color3">
                                                  <div className="card-body">
                                                      <h4 className="card-title"> <span className="badge badge-dark">0</span></h4>
                                                      <p className="card-text white">Hello Project 2</p>
                                                      <br />
                                                  </div>
                                              </div>
                                          </a>

                                          <a href="#" className="col-sm-4">
                                              <div className="card text-center color3">
                                                  <div className="card-body">
                                                      <h4 className="card-title"> <span className="badge badge-dark">0</span></h4>
                                                      <p className="card-text white">Hello Project 3</p>
                                                      <br/>
                                                  </div>
                                              </div>
                                          </a>
                                      </div>

                              </div>


                          </div>

                      </div>

                  </div>
              </div>
          </div>
        </div>
    )
  }
}



export default DashboardWelcomeForm;
