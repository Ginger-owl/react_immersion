import React from 'react';
import './Form.css'
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import Button from '../Button/Button';

const inputs = [
  {
    'type': 'text',
    'label': 'Фамилия',
    'name': 'lastname',
    'placeholder': 'Константинопольский'
  },
  {
    'type': 'text',
    'label': 'Имя',
    'name': 'firstname',
    'placeholder': 'Марк'
  },
  {
    'type': 'date',
    'label': 'Дата рождения',
    'name': 'birthdate',
    'placeholder': ''
  },
  {
    'type': 'phone',
    'label': 'Телефон',
    'name': 'phone',
    'placeholder': '+995891891787'
  },
  {
    'type': 'text',
    'label': 'Сайт',
    'name': 'site',
    'placeholder': 'yoursite.org'
  }
]

const textareas = [
  {
    'label': 'О себе',
    'name': 'about',
    'placeholder': 'Разработчик который всегда успевает в срок (и делает хорошо)'
  },
  {
    'label': 'Стек технологий',
    'name': 'stack',
    'placeholder': 'HTML, CSS, Js, React, PHP'
  },
  {
    'label': 'Описание последнего проекта',
    'name': 'last-project',
    'placeholder': 'Developed an awesone HTML5 game, with three.js'
  }
]

export default class Form extends React.Component {

  render = () => (
    <forn className="form" method="get">
      <h1 className='form__title' >Создание Анкеты</h1>
      <div className='form__fields'>
      {inputs.map((input) => (
            <Input label={input.label} type={input.type} id={input.name} name={input.name} placeholder={input.placeholder}/>
          )
        )}
        {textareas.map((textarea) => (
            <Textarea label={textarea.label} id={textarea.name} name={textarea.name} placeholder={textarea.placeholder}/>
          )
        )}
        <div className='form__controls'>
        <Button className="btn-alert" text="Отменить" type="reset" isDisabled={false}/>
        <Button className="btn-continue" text="Сохранить" type="button" isDisabled={true}/>
        </div>
      </div>
    </forn>
  ) 
}