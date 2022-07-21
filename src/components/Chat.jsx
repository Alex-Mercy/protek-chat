import React, { useState } from 'react'
import Navbar from './Navbar'

const Chat = () => {
  const [isactiveFriend, setIsActiveFriend] = useState(1);

  const changeUser = () => {
    setIsActiveFriend(!isactiveFriend);
  }


  return (
    <div>
      <Navbar />
      <div className="chatBody">
        <div className="friends">
          <div className="friend">
            Список друзей:
          </div>
          <hr />
          <div className="friend" onClick={changeUser}>
            <img src="https://fs.kinomania.ru/file/film_frame/0/0e/00e7d6d38bfc50a89ee25fbff9fb84d0.jpeg"
              alt="" className='avatar' />
            <p className={isactiveFriend && 'boldText'}>Иван Иванов</p>
          </div>
          <hr />
          <div className="friend" onClick={changeUser}>
            <img src="https://fs.kinomania.ru/file/film_frame/0/0e/00e7d6d38bfc50a89ee25fbff9fb84d0.jpeg"
              alt="" className='avatar' />
            <p className={!isactiveFriend && 'boldText'}>Client 1 (Saved Messages)</p>
          </div>
          <hr />
        </div>
        <div className="messageForm">
          <div className="messages">
          Иван Иванов: Привет
          </div>
          <div className="textarea">
            <input type="text" className='inputMessage' placeholder='Введите ваше сообщение' />
            <div className="sendButton">
              <img src="https://swimfed23.ru/wp-content/uploads/2022/04/telegram-logo.png" alt="" className='imageButton' />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Chat