import React from "react";
import './Input.css'

//label="Input your text", type="text", id="1", name="firstname", placeholder="John Winks"
export default class Input extends React.Component {
  constructor(props) {
    super()
    this.label = props.label
    this.type = props.type
    this.id = props.id
    this.name= props.name;
    this.placeholder = props.placeholder
    this.onChange = props.onChange
    this.value = props.value
  }
  

  render = () => {
    const onChange = this.props.onChange
    const value = this.props.value

    
    return (
      <div className="fields__field field">
        <label className="field__label" htmlFor={this.id}>
          {this.label}
        </label>
        <input className="field__input field__input-text" type={this.type} id={this.id} name={this.name} placeholder={this.placeholder} value={value} onChange={onChange} />
      </div>
    )
    }
}