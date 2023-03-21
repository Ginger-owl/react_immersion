import React from "react";
import './Input.css'

export default class Input extends React.Component {
  render = () => {
    const {id, type, label, name, placeholder, value, onChange, error} = this.props

    return (
      <div className="fields__field field">
        <label className="field__label" htmlFor={id}>
          {label}
        </label>
        <input
          className={!error ? "field__input" : "field__input field__input-error"}
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange} />
          {error && <p className="input-error">{error}</p>}
      </div>
    )
    }
}