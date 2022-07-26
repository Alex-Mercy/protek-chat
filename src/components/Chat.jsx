import React, { useContext, useState } from 'react';
import { Context } from '..';
import Navbar from './Navbar';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/compat/app';
import { useDispatch, useSelector } from 'react-redux';
import { chatSlice } from '../store/reducers/chatSlice';
import friendImage from '../assets/images/user.jpg';

const Chat = ({ friend }) => {
  const dispatch = useDispatch();
  const { userName, avatarUrl, activeFriend, room } = useSelector((state) => state.chatSlice);
  const [activeUser, setActiveUser] = useState(userName);
  const { setActiveFriend, setRoom } = chatSlice.actions;
  const [value, setValue] = useState('');
  const { firestore } = useContext(Context);
  const [messages] = useCollectionData(firestore.collection(room).orderBy('createdAt'));

  const dialogs = [
    { name: userName, avatar: avatarUrl },
    { name: friend, avatar: friendImage },
  ];

  const onChangeActiveUser = (name) => {
    setActiveUser(name);
  };

  const changeMessageTo = (e) => {
    const eventName = e.currentTarget.textContent;
    if (eventName === activeUser) {
      dispatch(setRoom(eventName));
      dispatch(setActiveFriend(eventName));
    } else {
      dispatch(setRoom(userName + ' & ' + friend));
      dispatch(setActiveFriend(eventName));
    }
  };

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const sendMessage = async () => {
    firestore.collection(room).add({
      userName: activeUser,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      text: value,
    });
    setValue('');
  };

  return (
    <div>
      <Navbar onChangeActiveUser={onChangeActiveUser} friend={friend} />
      <div className='chatBody'>
        <div className='friends'>
          <div className='friend'>Список друзей:</div>
          <hr />
          {dialogs.map((user) => {
            return (
              <div key={user.name}>
                <div className='friend' onClick={changeMessageTo}>
                  <img src={user.avatar} alt='avatar' className='avatar' />
                  <p className={activeFriend === user.name && 'boldText'}>{user.name}</p>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
        <div className='messageForm'>
          <div className='messages'>
            {messages &&
              messages.map((message) => (
                <div
                  key={message.createdAt}
                  className={message.userName === activeUser ? 'myMessages' : 'friendMessages'}
                >
                  {message.userName} : {message.text}
                </div>
              ))}
          </div>
          <div className='textarea'>
            <input
              type='text'
              value={value}
              onChange={changeHandler}
              className='inputMessage'
              placeholder='Введите ваше сообщение'
            />
            <div className='sendButton' onClick={sendMessage}>
              <img
                src='https://swimfed23.ru/wp-content/uploads/2022/04/telegram-logo.png'
                alt=''
                className='imageButton'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
