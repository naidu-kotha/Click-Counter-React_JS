// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  incrementCount = () => {
    this.setState(prevState => {
      console.log(`Previous State Value ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked
          <span className="count"> {count}</span> times
        </h1>
        <p className="instructions">Click the button to increase the count!</p>
        <button type="button" className="button" onClick={this.incrementCount}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
