import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import {privateRoutes, publicRoutes} from "../routes.js";

const AppRouter = () => {
    const [userName, setUserName] = useState();
    const [isAuth, setisAuth] = useState(false);
    const [avatarUrl, setAvatarUrl] = useState();


    const login = (value, imageUrl) => {
        setUserName(value);
        setisAuth(true);
        setAvatarUrl(imageUrl)
    }

    return isAuth ? (
		<Routes>
			{privateRoutes.map(({path, Component}) => (
				<Route key={path} path={path} element={<Component userName={userName} avatarUrl={avatarUrl}/>} />
			))}
			<Route path='*' element={<Navigate to={CHAT_ROUTE} replace />} />
		</Routes>
	) : (
		<Routes>
			{publicRoutes.map(({path, Component}) => (
				<Route key={path} path={path} element={<Component login={login}/>} />
			))}
			<Route path='*' element={<Navigate to={LOGIN_ROUTE} replace />} />
		</Routes>
	)
}



export default AppRouter