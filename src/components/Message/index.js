// Write your code here

import './index.css'
import {Component} from 'react'

class Message extends Component {
  render() {
    const {login} = this.props
    console.log(login)
    return (
      <div>
        {login && <h1 className="para">Welcome User</h1>}
        {!login && <h1 className="para">Please Login</h1>}
      </div>
    )
  }
}

export default Message
