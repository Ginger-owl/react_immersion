import React from 'react';
import './Form.css'
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import Button from '../Button/Button';
import { data, initialState, initialErrors } from '../../utils/data'
import { formatName, formatPhoneNumber } from '../../utils/formatter';


export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'data': initialState,
      'errors': initialErrors,
      'charCounters': {}
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    let isFormValid = true;
    const submittedData = this.state.data
    let errors = {}
    errors = data.reduce((errors, item) => {
      if (!submittedData[item.name]) {
        errors[item.name] = `Поле должно быть заполнено`
        isFormValid = false
      } else if (item.pattern && item.hint) {
        if (!item.pattern.test(submittedData[item.name])) {
          errors[item.name] = item.hint
          isFormValid = false
        }
      }
      return errors
    }, {})

    this.setState({'errors': errors})

    if (isFormValid) {
      this.props.onSubmit(this.state.data)
      this.setState({
        'data': initialState,
        'errors': initialErrors,
        'charCounters': {}
      })
    }
  }

  handleReset() {
    this.setState({
      'data': initialState,
      'errors': initialErrors,
      'charCounters': {}
    })
  }

  handleBlur(e) {
    const { name, value} = e.target
    const inputData = data.find(item => item.name === name)
    let newError = '';

    if (value === '') {
      newError =`Поле должно быть заполнено`
    } else if (inputData.pattern && inputData.hint) {
      if (!inputData.pattern.test(value)) {
        newError = inputData.hint
      }
    }
    if (newError !== '') {
      this.setState({
        errors: { ...this.state, [name]:  newError}
      })
    }
    console.log('blurred!')
}

  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      data: {
        ...this.state.data,
        [name] :
          name === 'phone' ?
          formatPhoneNumber(value.trim()) :
          name === 'firstname' || name === 'lastname' ?
          formatName(value.trim()) :
          value,
      }
    })
    this.setState({
      errors: { ...this.state.errors, [name]: ''}
    })
    this.setState({
      charCounters: { ...this.state.charCounters, [name]: value.length}
    })
  }

  render = () => (
    <form
      className="form"
      method="get"
      autoComplete='off'
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
                    value = {this.state.data[item.name]}
                    onChange={e => this.handleChange(e, item.name)}
                    onBlur={this.handleBlur}
                    counter={this.state.charCounters[item.name]}
                    error={this.state.errors[item.name]}
                    />
        } else {
          return <Input
                  label={item.label}
                  type={item.type}
                  id={item.name}
                  key={item.name}
                  name={item.name}
                  placeholder={item.placeholder}
                  value = {this.state.data[item.name]}
                  onChange={e => this.handleChange(e, item.name)}
                  onBlur={this.handleBlur}
                  error={this.state.errors[item.name]}
                />
        }
      }
      )}
      </div>
      <div className='form__controls'>
        <Button className="btn-reset" text="Отменить" type="button" isDisabled={false} key='btn-reset' onClick={this.handleReset}/>
        <Button className="btn-submit" text="Сохранить" type="button" isDisabled={false} key='btn-submit' onClick={this.handleSubmit} />
      </div>
    </form>
  ) 
}