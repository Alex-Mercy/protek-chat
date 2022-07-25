import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chatSlice } from "../store/reducers/chatSlice";

const Navbar = ({ onChangeActiveUser }) => {
  const dispatch = useDispatch();
  const { userName, isMainUser } = useSelector((state) => state.chatSlice);
  const { logout, setRoom, setActiveFriend, setIsmainUser, setActiveUser } =
    chatSlice.actions;

  useEffect(() => {
    if (isMainUser) {
      dispatch(setActiveUser(userName));
      onChangeActiveUser(userName);
    } else {
      dispatch(setActiveUser("Иван Иванов"));
      onChangeActiveUser("Иван Иванов");
    }
  }, [dispatch, userName, isMainUser, setRoom, setActiveFriend, setActiveUser]);

  const changeUser = () => {
    dispatch(setIsmainUser(!isMainUser));
  };

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <div className="navbar">
      <p className={isMainUser && "boldText"}>{userName}</p>
      <label className="checkbox-google">
        <input type="checkbox" onClick={changeUser} />
        <span className="checkbox-google-switch"></span>
      </label>
      <p className={!isMainUser && "boldText"}>Иван Иванов</p>
      <div onClick={handleClick} className="logout">
        Выход
      </div>
    </div>
  );
};

export default Navbar;
