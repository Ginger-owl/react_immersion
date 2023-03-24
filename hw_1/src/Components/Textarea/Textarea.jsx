import React from "react";
import './Textarea.css';
import Input from "../Input/Input";

export default class Textarea extends Input {
  render = () => {
    const {id, label, name, placeholder, value, onChange, onBlur, counter, error} = this.props
    
    return (
      <div className="fields__field field field-textarea">
        <label className="field__label" htmlFor={id}>
          {label}
        </label>
        <textarea 
          className={!error ? "field__input field__input-textarea" : "field__input field__input-error field__input-textarea"}
          id={id}
          key={id}
          name={name}
          placeholder={placeholder}
          rows="7"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          maxLength={'600'}
          ></textarea>
          <p className="textarea-counter">Осталось { counter == null ? 600 : 600 - counter }/600 символов</p>
          {error && <p className="input-error textarea-error">{error}</p>}
      </div>
    )
    }
}