import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      password: '',
      errormsg: 'A password is required'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ password: value });
    if (!value) {
      this.setState({
        status: false,
        errormsg: 'A password is required'
      });
    } else if (value.length < 8) {
      this.setState({
        status: false,
        errormsg: 'Your password is too short'
      });
    } else {
      this.setState({
        status: true,
        errormsg: ''
      });
    }
  }

  render() {
    // console.log('STATE:', this.state);
    // console.log('VALUE:', this.state.value);
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="container">
          <label>
          Password
          </label>
          <div className="passwordbox">
            <input
            name="password"
            type="password"
            id="pwd"
            onChange={this.handleChange}/>
            <i className={this.state.status ? 'fas fa-check text-green' : 'fas fa-times text-red'}></i>
          </div>
          <p>{this.state.errormsg}</p>
        </div>
      </form>
    );
  }
}

export default ValidatedInput;
