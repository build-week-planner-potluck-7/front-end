import React from 'react'
import axios from 'axios'

export class login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = evt => {
        this.state({
            credentials: {
                ...this.state.credentials,
                [evt.target.name]: evt.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        this.setState({
            ...this.state,
            isLoading: true
        })
        console.log(this.state.credentials)
        axios.post(`http://localhost:3000/landing`, this.state.credentials)
            .then( resp => {
                console.log(resp);
                this.setState({
                    ...this.state,
                    isLoading: false
                })
                const { token, username } = resp.data
                localStorage.setItem('token', token)
                localStorage.setItem("username", username);
                // this.props.history.push('/protected')
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
              <form onSubmit={this.login}>
                  <label>Username:
                    <input 
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        placeholder='Enter username'
                    />
                  </label>
                  <label>Password:
                    <input 
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        placeholder='Enter password'
                    />
                  </label>
                  <button type='submit'>Login</button>
                  {this.state.isLoading && 
                  <p>Loading!!!</p>}
              </form>
            </div>
        )
    }
}

export default login
