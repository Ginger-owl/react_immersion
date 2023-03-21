import React from "react";
import './Textarea.css';
import Input from "../Input/Input";

export default class Textarea extends Input {
  render = () => {
    const {id, label, name, placeholder, value, onChange, counter, error} = this.props
    
    return (
      <div className="fields__field field field-textarea">
        <label className="field__label" htmlFor={id}>
          {label}
        </label>
        <textarea 
          className="field__input field__input-textarea"
          id={id}
          key={id}
          name={name}
          placeholder={placeholder}
          rows="7"
          value={value}
          onChange={onChange}
          maxLength={'600'}
          ></textarea>
          <p className="textarea-counter">Осталось { counter == null ? 600 : 600 - counter }/600 символов</p>
          {error && <p className="textarea-error">{error}</p>}
      </div>
    )
    }
}