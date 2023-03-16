// Write your code here
import {Component} from 'react'
import './index.css'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {islogin: false}

  LoginChange = () => {
    this.setState({islogin: true})
  }

  logoutChange = () => {
    this.setState({islogin: false})
  }

  render() {
    const {islogin} = this.state
    return (
      <div className="homeContainer">
        <Message login={islogin} />
        {!islogin && <Login LoginChange={this.LoginChange} />}
        {islogin && <Logout LogoutChange={this.logoutChange} />}
      </div>
    )
  }
}
export default Home
