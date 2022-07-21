import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import {privateRoutes, publicRoutes} from "../routes.js";

const AppRouter = () => {
    const user = true
    return user ? (
		<Routes>
			{privateRoutes.map(({path, Component}) => (
				<Route key={path} path={path} element={<Component />} />
			))}
			<Route path='*' element={<Navigate to={CHAT_ROUTE} replace />} />
		</Routes>
	) : (
		<Routes>
			{publicRoutes.map(({path, Component}) => (
				<Route key={path} path={path} element={<Component />} />
			))}
			<Route path='*' element={<Navigate to={LOGIN_ROUTE} replace />} />
		</Routes>
	)
}



export default AppRouter