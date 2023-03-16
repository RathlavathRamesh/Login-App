// Write your code here
import {Component} from 'react'

import './index.css'

class Login extends Component {
  render() {
    const {LoginChange} = this.props
    const onDelete = () => {
      LoginChange()
    }
    return (
      <div>
        <button className="but" type="button" onClick={onDelete}>
          Login
        </button>
      </div>
    )
  }
}

export default Login
