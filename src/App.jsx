import './App.css'
import { Component } from 'react'

// react week 2 exercise part 1

function App() {
  return <WelcomeComponent name="Ethan" />
}

class WelcomeComponent extends Component {
  render() {
    return <h1>{this.props.name} is awesome, react works!!!!</h1>
  }
}

export default App;