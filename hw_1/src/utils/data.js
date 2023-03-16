export const data = [
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
  },
  {
    'type': 'textarea',
    'label': 'О себе',
    'name': 'about',
    'placeholder': 'Разработчик который всегда успевает в срок (и делает хорошо)'
  },
  {
    'type': 'textarea',
    'label': 'Стек технологий',
    'name': 'stack',
    'placeholder': 'HTML, CSS, Js, React, PHP'
  },
  {
    'type': 'textarea',
    'label': 'Описание последнего проекта',
    'name': 'last-project',
    'placeholder': 'Developed an awesone HTML5 game, with three.js'
  }
]

export const initialState = data.reduce((initState, item) => {
  console.log(initState);
  return {...initState, [item.name]: ''}
}, {})