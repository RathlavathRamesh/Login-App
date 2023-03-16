// Write your code here
import './index.css'
import {Component} from 'react'

class Logout extends Component {
  render() {
    const {LogoutChange} = this.props
    const onDelete = () => {
      LogoutChange()
    }
    return (
      <div>
        <button className="but" type="button" onClick={onDelete}>
          Logout
        </button>
      </div>
    )
  }
}

export default Logout
