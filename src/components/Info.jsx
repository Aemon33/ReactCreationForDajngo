import React from 'react'
import DjangoLogo from '../assets/djangoLogo.png';

function Info({children}) {
  return (
    <div className='in-container'>
      <img  src={DjangoLogo} alt="django-logo" />
      <h1>Django Essentials</h1>
      <p>Fundamental Django concepts you will need for almost any app you are going to build!</p>
      {children}
    </div>
  )
}

export default Info