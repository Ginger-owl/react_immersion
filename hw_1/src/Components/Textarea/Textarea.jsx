import React from "react";
import './Textarea.css';
import Input from "../Input/Input";

export default class Textarea extends Input {

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