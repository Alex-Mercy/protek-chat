import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ userName, onChangeUser }) => {
  const [isFirstuser, setisFirstser] = useState(true);

  useEffect(() => {
    if (isFirstuser) {
      onChangeUser(userName, isFirstuser)
    } else {
      onChangeUser('Иван Иванов', isFirstuser)
    }
  }, [isFirstuser])

  const changeUser = () => {
    setisFirstser(!isFirstuser);
  }

  return (
    <div className='navbar'>
      <p className={isFirstuser && 'boldText'}>{userName}</p>
      <label className="checkbox-google" >
        <input type="checkbox" onClick={changeUser} />
        <span className="checkbox-google-switch"></span>
      </label>
      <p className={!isFirstuser && 'boldText'}>Иван Иванов</p>
      <Link className='logout' to='login'>Выход</Link>
    </div>
  )
}

export default Navbar