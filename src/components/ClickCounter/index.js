// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {
    count: 0,
  }

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg">
        <h1 className="heading">
          The Button has been Clicked
          <br /> <span className="span"> {count} </span>
          times
        </h1>
        <p className="description">Click the button to increase the count</p>
        <div className="btn-container">
          <button type="button" className="buttons" onClick={this.onIncrement}>
            Click me!
          </button>
        </div>
      </div>
    )
  }
}
export default ClickCounter
