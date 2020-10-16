import React from 'react';
import axios from 'axios';

class LoginForm extends React.Component {
    state = {
        credentials: {
            username: '',
            password: '',
        }
    };

    handleChange = (e) => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

   login = e => {
        e.preventDefault();

        axios
        .post(('api/login'), this.state.credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token);
        })
        .catch((err) => {
            console.log(err);
        });
    };

    render() {
    return(
        <div>
        <form>
        <input
        type="text"
        name="username"
        value={this.state.credentials.username}
        onChange={this.handleChange}
        />
        <input
        type="password"
        name="password"
        value={this.state.credentials.password}
        onChange={this.handleChange}
        />
        <button>Submit Credentials</button>
        </form>
        </div>
    )
}
}
export default LoginForm;