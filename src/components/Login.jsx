import React from 'react'

const Login = () => {
  return (
    <div className='loginPage'>
      <div className='loginForm'>
        <h1 className='header'>ВОЙТИ В ЧАТ</h1>
        Ваше имя
        <input type="text" className='input' placeholder='Введите имя'/>
        Загрузите изоображение
        <input type="file" className='inputFile'name="inputFile" id="inputFile" />
        <button className='button'><h3>Войти в чат</h3></button>
      </div>
    </div>
  )
}

export default Login