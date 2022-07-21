import React, {useState } from 'react'
import { getStorage, ref } from "firebase/storage";

const Login = ({login}) => {
  const storage = getStorage();
  const [value, setValue] = useState();
  const [file, setFile] = useState();
  
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleClick = () => {
    login(value, file)
  }

  const selectNewAvatar = (e) => {
    if (e.target.files && e.target.files.length) {
      setFile(e.target.files[0]);
    }
  }


  return (
    <div className='loginPage'>
      <div className='loginForm'>
        <h1 className='header'>ВОЙТИ В ЧАТ</h1>
        Ваше имя
        <input type="text" value={value} onChange={handleChange} className='input' placeholder='Введите имя'/>
        Загрузите изоображение
        <input type="file"  onChange={selectNewAvatar} className='inputFile'name="inputFile" id="inputFile" />
        <button className='button' onClick={handleClick} ><h3>Войти в чат</h3></button>
      </div>
    </div>
  )
}

export default Login