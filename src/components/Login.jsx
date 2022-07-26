import React, { useContext, useEffect, useState } from 'react';
import { Context } from '..';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { chatSlice } from '../store/reducers/chatSlice';
import userAvatar from '../assets/images/user.jpg';
import Loader from './Loader';

const Login = () => {
  const { storage } = useContext(Context);
  const { isLoading } = useSelector((state) => state.chatSlice);
  const [userName, setUsername] = useState('');
  const [imageUpload, setImageUpload] = useState('');
  const [userNameDirty, setUserNameDirty] = useState(false);
  const [userNameError, setUserNameError] = useState('Имя не может быть пустым');
  const [formValid, setFormValid] = useState(false);

  const dispatch = useDispatch();
  const { login, setIsLoading } = chatSlice.actions;

  const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);

  const handleChange = (e) => {
    setUsername(e.target.value);
    if (!e.target.value) {
      setUserNameError('Имя не может быть пустым');
    } else {
      setUserNameError('');
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'userName':
        setUserNameDirty(true);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (userNameError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [userNameError]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!userName) {
      setUserNameError(true);
    }
    if (!imageUpload) {
      dispatch(login({ userName, url: userAvatar }));
    } else {
      dispatch(setIsLoading(true));
      uploadBytes(imageRef, imageUpload).then(() => {
        getDownloadURL(imageRef).then((url) => {
          dispatch(setIsLoading(false));
          dispatch(login({ userName, url }));
        });
      });
    }
  };

  const selectImage = (e) => {
    if (e.target.files && e.target.files.length) {
      setImageUpload(e.target.files[0]);
    }
  };

  return (
    <div className='loginPage'>
      <form className='loginForm' onSubmit={handleSubmit}>
        <h1 className='header'>ВОЙТИ В ЧАТ</h1>
        Ваше имя
        {userNameDirty && userNameError && <div className='error'>{userNameError}</div>}
        <input
          type='text'
          name='userName'
          value={userName}
          onChange={handleChange}
          className='input'
          placeholder='Введите имя'
          onBlur={(e) => blurHandler(e)}
        />
        Загрузите изоображение
        <input type='file' onChange={selectImage} className='imageUpload' name='imageUpload' />
        <button disabled={!formValid} type='submit' className='button'>
          <h3>Войти в чат</h3>
        </button>
        {isLoading && <Loader />}
      </form>
    </div>
  );
};

export default Login;
