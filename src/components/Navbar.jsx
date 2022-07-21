import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isFirstuser, setisFirstser] = useState(true);
  
  const changeUser = () => {
    setisFirstser(!isFirstuser);
  }

  console.log(isFirstuser);

  return (
    <div className='navbar'>
      <p className={isFirstuser && 'boldText'}>Client1</p>
      <label className="checkbox-google" >
        <input type="checkbox" onClick={changeUser}/>
        <span className="checkbox-google-switch"></span>
      </label>
      <p className={!isFirstuser && 'boldText'}>Иван Иванов</p>
      <Link className='logout' to='login'>Выход</Link>
    </div>
  )
}

export default Navbar