import React from "react";
import Button from "../Button/Button";
import { profileFields } from "../../utils/data";
import './profile.css'


export default class Profile extends React.Component {
  render = (props) => (
    <div className="profile">

      <h1>{props.data.firstname} {props.data.lastname}</h1>
      {profileFields.map((item) => (
        <React.Fragment>
          <h5 className="profile__subtitle">{item.label}:</h5>
          <p className="profile__text">{props.data[item.name]}</p>
        </React.Fragment>
      ))}
      
      <Button className="btn-back" text="Назад" type="button" isDisabled={false} key='btn-reset' onClick={props.onReturn} />
    </div>
    )
}