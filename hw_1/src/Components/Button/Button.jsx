import React from "react"
import './Button.css'

export default class Button extends React.Component {
  constructor(props) {
    super()
    this.className = "btn " + props.className
    this.text = props.text
    this.type = props.type
    this.isDisabled = props.isDisabled
  }

  render = () => (
    <button className={this.className} type={this.type} disabled={this.isDisabled}>
      {this.text}
    </button>
  )
}