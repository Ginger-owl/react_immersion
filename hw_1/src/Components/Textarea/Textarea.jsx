import React from "react";
import './Textarea.css';

export default class Textarea extends React.Component {
  constructor(props) {
    super()
    this.label = props.label
    this.id = props.id
    this.name = props.name;
    this.placeholder = props.placeholder
  }

  render = () => (
    <div className="fields__field field">
      <label className="field__label" htmlFor={this.id}>
        {this.label}
      </label>
      <textarea 
        className="field__input field__input-textarea"
        id={this.id}
        name={this.name}
        placeholder={this.placeholder}
        rows="7"
        ></textarea>
    </div>
  )
}