import React from "react";
import './Input.css'

export default class Input extends React.Component {
  /* constructor(props) {
    super()
    this.label = props.label
    this.type = props.type
    this.id = props.id
    this.name= props.name;
    this.placeholder = props.placeholder
    this.onChange = props.onChange
    this.value = props.value
    this.error = props.error
  } */
  

  render = () => {
    const {id, type, label, name, placeholder, value, onChange, error} = this.props

    return (
      <div className="fields__field field">
        <label className="field__label" htmlFor={id}>
          {label}
        </label>
        <input
          className="field__input field__input-text"
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