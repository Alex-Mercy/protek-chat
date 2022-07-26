import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { chatSlice } from '../store/reducers/chatSlice'

const Navbar = ({ onChangeActiveUser, friend }) => {
  const dispatch = useDispatch()
  const { userName, isMainUser } = useSelector((state) => state.chatSlice)
  const { logout, setIsmainUser, setActiveUser } = chatSlice.actions

  useEffect(() => {
    if (isMainUser) {
      dispatch(setActiveUser(userName))
      onChangeActiveUser(userName)
    } else {
      dispatch(setActiveUser(friend))
      onChangeActiveUser(friend)
    }
  }, [dispatch, isMainUser])

  const changeUser = () => {
    dispatch(setIsmainUser(!isMainUser))
  }

  const handleClick = () => {
    dispatch(logout())
  }

  return (
    <div className='navbar'>
      <p className={isMainUser && 'boldText'}>{userName}</p>
      <label className='checkbox-google'>
        <input type='checkbox' onClick={changeUser} />
        <span className='checkbox-google-switch'></span>
      </label>
      <p className={!isMainUser && 'boldText'}>{friend}</p>
      <div onClick={handleClick} className='logout'>
        Выход
      </div>
    </div>
  )
}

export default Navbar
