import React from "react";
import { connect } from "react-redux";
import { loginUser, validateUserDetails } from "../actions/userActions";

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      validationErrors: { email: "", password: "" },
      isValidEmail: false,
      isValidForm: false,
      formSubmitError: ""
    };
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.afterValidateUser().then(() => {
      this.props.history.push("/orders");
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .loginUser(this.state.email, this.state.password)
      .then(res => {
        this.props.history.push("/orders");
      })
      .catch(err => {
        this.setState({ formSubmitError: err.message });
      });
  }

  updateInput(e) {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateInput(name, value);
    });
  }

  validateInput(inputType, value) {
    let validationErrors = this.state.validationErrors;
    let isValidEmail = this.state.isValidEmail;
    const email_regex = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
    switch (inputType) {
      case "email":
        isValidEmail = email_regex.test(value.toLowerCase());
        validationErrors[inputType] = isValidEmail
          ? ""
          : "Invalid email address.";
        break;
      default:
        break;
    }

    this.setState({
      isValidEmail: isValidEmail,
      isValidForm: isValidEmail,
      validationErrors: validationErrors
    });
  }

  render() {
    const validationErrors = this.state.validationErrors;

    return (
      <div className="outer-wrapper">
        <div className="outer-box">
          <div className="header">Sign In</div>
          <div className="inner-box">
            <form id="loginSubmissionForm">
              <div className="form-group">
                <label>Email </label>
                <input
                  id="userinput"
                  name="email"
                  className="input-group-text"
                  type="text"
                  value={this.state.email || ""}
                  onChange={this.updateInput}
                />
                <div className="formErrorPanel">{validationErrors.email} </div>
              </div>

              <div className="form-group">
                <label>Password </label>
                <input
                  id="password"
                  name="password"
                  className="input-group-text"
                  type="password"
                  value={this.state.password || ""}
                  onChange={this.updateInput}
                />
                <div className="formErrorPanel">
                  {validationErrors.password}{" "}
                </div>
              </div>
              <input
                id="submit-button"
                type="submit"
                value="Sign In"
                className="btn btn-info"
                onClick={this.handleSubmit}
                disabled={!this.state.isValidForm}
              />
            </form>
            {this.props.user}
          </div>
          <div className="submitErrorPanel">{this.state.formSubmitError}</div>
        </div>
      </div>
    );
  }
}

const mapActionsToProps = {
  loginUser: loginUser,
  afterValidateUser: validateUserDetails
};

const LoginFormContainer = connect(
  null,
  mapActionsToProps
)(LoginForm);
export default LoginFormContainer;
