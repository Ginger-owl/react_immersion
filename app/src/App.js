import React from 'react';
import './App.css';
import Form from './Components/Form/Form';
import Profile from './Components/Profile/Profile';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isFormSubmit: false,
      submitData: {},
    }
  }

  render() {
    return (
      <div>
      ({
        this.state.isFormSubmit ?
        <Profile data={this.state.submitData} onReturn={() =>
          this.setState({
            isFormSubmit: false,
          })}
          /> :
        <Form onSubmit={(data) => {
          this.setState({ isFormSubmit: true, submitData: data })
        }}/>
      })
      </div>
    )
  }
}
