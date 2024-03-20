import React from 'react'
import HeaderMain from '../headerMain/HeaderMain'
import './../../assets/styles/index.css'

const Layout = ({ children }) => {
	return (
		<>
			<HeaderMain />

			{children && children}
		</>
	)
}

export default Layout
