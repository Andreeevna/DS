import React from 'react'

import { AiOutlineMenu } from 'react-icons/ai'

import './Hamburger.css'

const Hamburger = ({ active, setActive }) => {
	return (
		<AiOutlineMenu
			className={active ? 'active burger_btn' : 'burger_btn'}
			onClick={() => setActive(!active)}
		></AiOutlineMenu>
	)
}

export default Hamburger
