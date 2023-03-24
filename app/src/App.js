import React from 'react';
import { useState } from 'react';
import './App.css';
import Form from './Components/Form/Form';
import Profile from './Components/Profile/Profile';

export default function App () {
  const [isFormSubmit, setIsFormSubmt] = useState(false)
  const [submitData, setSubmitData] = useState({})
  
  return (
    <div>
    ({
      isFormSubmit ?
      <Profile data={submitData} onReturn={() => {
        setIsFormSubmt(false)
        }
      }
        /> :
      <Form onSubmit={(data) => {
        setIsFormSubmt(true)
        setSubmitData(data)
      }}/>
    })
    </div>
  )
}
