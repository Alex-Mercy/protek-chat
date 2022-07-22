import React, {useContext, useEffect, useState } from 'react'
import { Context } from '..';
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import {v4} from 'uuid';


const Login = ({login}) => {
  const { storage } = useContext(Context);
  const [username, setUsername] = useState();
  const [imageUpload , setImageUpload] = useState('');
  
  const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
 
  const handleChange = (e) => {
    setUsername(e.target.value)
  }

  const handleClick = ()=>{
    if(imageUpload == null)
      return;
      uploadBytes(imageRef, imageUpload).then(() => {
        getDownloadURL(imageRef).then((url) => {
          login(username, url)
        })
      })
  }

  const selectImage = (e) => {
    if (e.target.files && e.target.files.length) {
      setImageUpload(e.target.files[0]);
    }
  }

  return (
    <div className='loginPage'>
      <div className='loginForm'>
        <h1 className='header'>ВОЙТИ В ЧАТ</h1>
        Ваше имя
        <input type="text" value={username} onChange={handleChange} className='input' placeholder='Введите имя'/>
        Загрузите изоображение
        <input type="file"  onChange={selectImage} className='inputFile'name="inputFile" id="inputFile" />
        <button className='button' onClick={handleClick} ><h3>Войти в чат</h3></button>
      </div>
    </div>
  )
}

export default Login