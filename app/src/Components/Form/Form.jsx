import React, { useState } from 'react';
import './Form.css'
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import Button from '../Button/Button';
import { data, initialState, initialErrors } from '../../utils/data'
import { formatName, formatPhoneNumber } from '../../utils/formatter';


export default function Form (props) {
  const [formData, setFormData] = useState(initialState)
  const [formErros, setFormErros] = useState(initialErrors)
  const [charCounters, setCharCounters] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    let isFormValid = true;
    const submittedData = formData
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

    if (isFormValid) {
      props.onSubmit(formData)
      setFormData(initialState)
      setFormErros(initialErrors)
      setCharCounters({})
    }

    setFormErros(errors)
  }

  const handleReset = () => {
    setFormData(initialState)
    setFormErros(initialErrors)
    setCharCounters({})
  }

  const handleBlur = (e) => {
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
      setFormErros(prev => ({...prev, [name]:  newError}))
    }
}

  const handleChange = (e) => {
    const { name, value } = e.target

    const formattedValue = name === 'phone' ? formatPhoneNumber(value.trim()) : name === 'firstname' || name === 'lastname' ? formatName(value.trim()) : value
    
    setFormData((prev) => ({...prev, [name]: formattedValue}))
    setFormErros(prev => ({...prev, [name]:  ''}))
    setCharCounters(prev => ({...prev, [name]: formattedValue.length}))
  }

  return (
    <form
      className="form"
      method="get"
      autoComplete='off'
      onSubmit={handleSubmit}
      >
      <h1 className='form__title' >Создание Анкеты</h1>
      <div className='form__fields'>
      {data.map((item) => (
        item.type === 'textarea' ? 
          <Textarea
            label={item.label}
            id={item.name}
            key={item.name}
            name={item.name}
            placeholder={item.placeholder}
            value = {formData[item.name]}
            onChange={e => handleChange(e, item.name)}
            onBlur={handleBlur}
            counter={charCounters[item.name]}
            error={formErros[item.name]}
          /> :
           <Input
              label={item.label}
              type={item.type}
              id={item.name}
              key={item.name}
              name={item.name}
              placeholder={item.placeholder}
              value = {formData[item.name]}
              onChange={e => handleChange(e, item.name)}
              onBlur={handleBlur}
              error={formErros[item.name]}
          />
        )
      )}
      </div>
      <div className='form__controls'>
        <Button className="btn-reset" text="Отменить" type="button" isDisabled={false} key='btn-reset' onClick={handleReset}/>
        <Button className="btn-submit" text="Сохранить" type="button" isDisabled={false} key='btn-submit' onClick={handleSubmit} />
      </div>
    </form>
  ) 
}