import React from "react"
import './Button.css'

export default function Button(props) {
  const {className, type, text, onClick, isDisabled} = props

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