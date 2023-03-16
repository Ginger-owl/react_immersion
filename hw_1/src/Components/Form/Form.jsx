import React from 'react';
import './Form.css'
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import Button from '../Button/Button';
import { data, initialState } from '../../utils/data'


export default class Form extends React.Component {
  constructor() {
    super()
    this.state = {...initialState}
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state)
    this.setState(() => initialState)
  }

  render = () => (
    <form
      className="form"
      method="get"
      onSubmit={this.handleSubmit}
      >
      <h1 className='form__title' >Создание Анкеты</h1>
      <div className='form__fields'>
      {data.map((item) => {
        if (item.type === 'textarea') {
          return <Textarea
                    label={item.label}
                    id={item.name}
                    key={item.name}
                    name={item.name}
                    placeholder={item.placeholder}
                    value = {this.state[item.name]}
                    onChange={(e) => {
                      this.setState({ [item.name]: e.target.value })
                    }
                  }/>
        } else {
          return <Input
                  label={item.label}
                  type={item.type}
                  id={item.name}
                  key={item.name}
                  name={item.name}
                  placeholder={item.placeholder}
                  value = {this.state[item.name]}
                  onChange={(e) => {
                    this.setState({ [item.name]: e.target.value })
                  }
                }/>
        }
      }
      )}
      </div>
      <div className='form__controls'>
        <Button className="btn-alert" text="Отменить" type="reset" isDisabled={false} key='btn-reset'/>
        <Button className="btn-continue" text="Сохранить" type="submit" isDisabled={false} key='btn-submit'/>
      </div>
    </form>
  ) 
}