import React from 'react';
import './Form.css'
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import Button from '../Button/Button';
import { data } from '../../utils/data'


export default class Form extends React.Component {

  render = () => (
    <forn className="form" method="get">
      <h1 className='form__title' >Создание Анкеты</h1>
      <div className='form__fields'>
      {data.map((item) => {
        if (item.type === 'textarea') {
          return <Textarea label={item.label} id={item.name} name={item.name} placeholder={item.placeholder}/>
        } else {
          return <Input label={item.label} type={item.type} id={item.name} name={item.name} placeholder={item.placeholder}/>
        }
      }
      )}
      </div>
      <div className='form__controls'>
        <Button className="btn-alert" text="Отменить" type="reset" isDisabled={false}/>
        <Button className="btn-continue" text="Сохранить" type="button" isDisabled={true}/>
      </div>
    </forn>
  ) 
}