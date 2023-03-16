import React from 'react';
import './Form.css'

export default class Form extends React.Component {

  render = () => (
    <forn className="form" method="get">
      <h1 className='form__title' >Создание Анкеты</h1>
      <div className='form__fields'>
        <div className=' fields_field'>
        <label className='field__label' htmlFor="input"></label>
        <input className='field__input'type="text" id="input" placeholder="example" />
        </div>
        <div className='form__controls'>
          <button type='reset'>Отменить</button>
          <button type='submit'>Отправить</button>
        </div>
      </div>
    </forn>
  ) 
}