import React from "react";
import Button from "../Button/Button";
import './profile.css'


export default class Profile extends React.Component {
  render = () => {
    const {data, onReturn} = this.props
    //const {firstname, lastname, birthdate, phone, site, about, stack, last_project} = data

    return (
      <div className="profile">
        <h1>{data.firstname} {data.lastname}</h1>

        <h5 className="profile__subtitle">Дата рождения:</h5>
        <p className="profile__text">{data.birthdate}</p>

        <h5 className="profile__subtitle">Телефон:</h5>
        <p className="profile__text">{data.phone}</p>

        <h5 className="profile__subtitle">Веб-сайт:</h5>
        <p className="profile__text">{data.site}</p>

        <h5 className="profile__subtitle">О себе:</h5>
        <p className="profile__text">{data.about}</p>

        <h5 className="profile__subtitle">Стек технологий:</h5>
        <p className="profile__text">{data.stack}</p>

        <h5 className="profile__subtitle">Описание последнего проекта:</h5>
        <p className="profile__text">{data.last_project}</p>
        <Button className="btn-back" text="Назад" type="button" isDisabled={false} key='btn-reset' onClick={onReturn} />
      </div>
      )
  }
}