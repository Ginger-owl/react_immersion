import React from "react"
import './Button.css'

export default class Button extends React.Component {
  render = () => {
    const {className, type, text, onClick, isDisabled} = this.props

    return (
      <button
        className={"btn " + className}
        type={type}
        onClick={onClick}
        disabled={isDisabled}>
        {text}
      </button>
    )
  }
}