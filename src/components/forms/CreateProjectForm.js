import React from 'react';
import PropTypes from 'prop-types';

class CreateProjectForm extends React.Component {

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
      <div>
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
                            <h3>Create Project</h3>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
            {/*<!-- /card below navbar -->*/}
            <div className="card card-no-border-top">
                <div className="card-body">
                    <div className="k_content">
                        <form className="form-horizontal form-label-left">
                            <div className="form-group row">
                                <label className="control-label col-md-3 col-sm-3 col-xs-12">Project Name</label>
                                <div className="col-md-9 col-sm-9 col-xs-12">
                                    <input type="text" className="form-control custom-input col-md-9 col-sm-9" placeholder="Project Name" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="control-label col-md-3 col-sm-3 col-xs-12">Project Code</label>
                                <div className="col-md-9 col-sm-9 col-xs-12">
                                    <input type="text" className="form-control custom-input col-md-9 col-sm-9" placeholder="Project Code" />
                                </div>
                            </div>
                            <div className="from-group row">
                                <label className="control-label col-md-3 col-sm-3 col-xs-12">Add Tasks</label>
                                <div className="col-md-9 col-sm-9 col-xs-12">
                                    <input id="tags_1" type="text" className="tags form-control custom-input-textarea col-md-9 col-sm-9" value="initial, feasibility study, development" />
                                    <div id="suggestions-container" style={{ position: 'relative', float: 'left', width: 250, margin: 10 }}></div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="control-label col-md-3 col-sm-3 col-xs-12">Number of Sprints</label>
                                <div className="col-md-9 col-sm-9 col-xs-12">
                                    <input type="number" className="form-control custom-input col-md-9 col-sm-9" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="control-label col-md-3 col-sm-3 col-xs-12">Assign Team</label>
                                <div className="col-md-9 col-sm-9 col-xs-12">
                                    <select className="form-control custom-input col-md-9 col-sm-9">
                                        <option>Choose Team</option>
                                        <option>Option one</option>
                                        <option>Option two</option>
                                        <option>Option three</option>
                                        <option>Option four</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="control-label col-md-3 col-sm-3 col-xs-12">Time to Complete(Months)</label>
                                <div className="col-md-9 col-sm-9 col-xs-12">
                                    <input type="number" className="form-control custom-input col-md-9 col-sm-9" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="control-label col-md-3 col-sm-3 col-xs-12">Project Description</label>
                                <div className="col-md-9 col-sm-9 col-xs-12">
                                    <textarea className="form-control col-md-9 col-sm-9 custom-input-textarea" rows="3"></textarea>
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
      </div>

    );
  }
}


export default CreateProjectForm;
