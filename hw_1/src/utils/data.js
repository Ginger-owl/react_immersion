export const data = [
  {
    'type': 'text',
    'label': 'Имя',
    'name': 'firstname',
    'placeholder': 'Марк',
    'pattern': /^[A-ZА-ЯЁ][A-Za-zА-ЯЁа-яё'-]*$/,
    'hint': 'Имя должно начинаться с заглавной буквы.'
  },
  {
    'type': 'text',
    'label': 'Фамилия',
    'name': 'lastname',
    'placeholder': 'Константинопольский',
    'pattern': /^[A-ZА-ЯЁ][A-Za-zА-ЯЁа-яё'-]*$/,
    'hint': 'Фамилия должна начинаться с заглавной буквы.'
  },
  {
    'type': 'date',
    'label': 'Дата рождения',
    'name': 'birthdate',
    'placeholder': '1988-03-02'
  },
  {
    'type': 'phone',
    'label': 'Телефон',
    'name': 'phone',
    'placeholder': '7-7777-77-90'
  },
  {
    'type': 'text',
    'label': 'Сайт',
    'name': 'site',
    'placeholder': 'https://yoursite.org',
    'pattern': /^https?:\/\/.+/,
    'hint': 'Адрес сайта должен начинаться с \'https://\'!'
  },
  {
    'type': 'textarea',
    'label': 'О себе',
    'name': 'about',
    'placeholder': 'Фронтендер с в опытом проджект-менеджменте и гейм-дизайне, Ph.d в области социальных наук'
  },
  {
    'type': 'textarea',
    'label': 'Стек технологий',
    'name': 'stack',
    'placeholder': 'HTML, CSS, Js, React, Vue, PHP, C++'
  },
  {
    'type': 'textarea',
    'label': 'Описание последнего проекта',
    'name': 'last_project',
    'placeholder': 'Разработал невероятную HTML5 игру, с использованием pixi.js'
  }
]

export const initialState = data.reduce((initState, item) => {
  return {...initState, [item.name]: ''}
}, {})

export const initialErrors = data.reduce((initErrors, item) => {
  return {...initErrors, [item.name]: ''}
}, {})