import React from 'react';
import PropTypes from 'prop-types';


var $  = require( 'jquery' );
$.DataTable = require( 'datatables.net-bs4' );
require( 'datatables.net-select' );
require( 'datatables.net-buttons-bs4' );
{/*//
  Handle form submission event for table
   $('#frm-example').on('submit', function(e){
      var form = this;

      var rows_selected = table.column(0).checkboxes.selected();

      // Iterate over all selected checkboxes
      $.each(rows_selected, function(index, rowId){
         // Create a hidden element
         $(form).append(
             $('<input>')
                .attr('type', 'hidden')
                .attr('name', 'id[]')
                .val(rowId)
         );
      });
   });
});

**/}


class CreateTeamForm extends React.Component {
  componentDidMount(){

    $('#usersForTeam').DataTable( {

        data: this.props.data,
        columns: [
            { title: "Name" },
            { title: "Position" },
            { title: "Office" },
            { title: "Extn." },
            { title: "Start date" },
            { title: "Salary" }
        ],
        columnDefs: [ {
          'targets': 0,
          'checkboxes': 'select-checkbox'
        } ],
        select: {
            style:    'multi'
        },
        order: [[ 1, 'asc' ]]
    } );

  }





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
        {/*  <!-- navbar --> */}
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
                          <h3>Create New Team</h3>
                      </div>
                  </div>
                  <div className="clearfix"></div>
              </div>
          </div>
          {/*<!-- /card below navbar -->*/}

          <div className="card card-no-border-top">
              <div className="card-body">
                  <div className="container">
                      <div className="k_content">
                          <form className="form-horizontal form-label-left">
                              <div className="form-group row">
                                  <label className="control-label col-md-3 col-sm-3 col-xs-12">Team Name</label>
                                  <div className="col-md-9 col-sm-9 col-xs-12">
                                      <input type="text" className="form-control custom-input col-md-9 col-sm-9" placeholder="Team Name" />
                                  </div>
                              </div>

                              <div className="container">
                                  <div className="row justify-content-md-center">
                                      <div className="col-md-8">
                                          <div className="k_content">
                                              <br />
                                              <table id="usersForTeam" className="table table-striped" ref={el => this.el = el}>

                                              </table>
                                          </div>
                                      </div>
                                  </div>

                              </div>

                              <div className="ln_solid"></div>
                              <div className="row">
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
    )
  }
}



export default CreateTeamForm;
