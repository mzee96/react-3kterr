import React from 'react';
import PropTypes from 'prop-types';

import '../data/Content/css/bootstrap.min.css';
import styles from '../data/Content/css/login.css';
import '../data/Content/web-fonts-with-css/css/fontawesome.css';

class LoginForm extends React.Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  };

  onChange = e => this.setState({
    data: { ...this.state.data, [e.target.id]: e.target.value}
  });

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });

    if(Object.keys(errors).length === 0){
      this.props.submit(this.state.data);
      this.props.history.push('/dashbord');
    }
  };

  validate = (data) => {
    const errors = {};
    if (!data.password) errors.password = "Password can't be empty";
    return errors;
  }

  render() {
    const { data } = this.state;

    return(
      <div>
        <div className="containerL">
            <h1 className="welcomeL text-center">3kterr</h1>
            <div className="cardL card-containerL bg_colorL">
                <br />
                <h2 className='login_titleL text-center'>Login</h2>
                <hr />
                <form className="form-signinL"  onSubmit={this.onSubmit}>
                    <span id="reauth-email" className="reauth-emailL"></span>
                    <p className="input_titleL">Email</p>
                    <input type="text" id="inputEmail" className="login_boxL" placeholder="user@mail.com"
                      onChange={this.onchange} required autoFocus />
                    <p className="input_titleL">Password</p>
                    <input type="password" id="inputPassword" className="login_boxL" placeholder="******" onChange={this.onchange}  required />
                    <div id="remember" className="checkbox">
                        <label>

                        </label>
                    </div>
                    <button className="btnL btn-sm btn-primary" type="submit" >Submit</button>
                </form>
            </div>
        </div>
      </div>

    )
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default LoginForm;
