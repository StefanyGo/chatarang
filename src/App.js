import React, { Component } from 'react'
import Main from './Main'
import SignIn from './SignIn'
import './App.css'

class App extends Component {
  constructor() {
    super() 

    this.state = {
      user : {},
    }
  }

  handleAuth = (user) => {
    this.setState({ user: user })
  }

  signedIn = () => {
    return this.state.user.uid
  }

  signOut = () => {
    this.setState({user: {}})
  }

  render() {
    return (
      <div className="App">
        {
          this.signedIn()
          ? <Main
              user={this.state.user} 
              signOut={this.signOut}
            />
          : <SignIn handleAuth={this.handleAuth} />
        }
        
      </div>
    )
  }
}

export default App
