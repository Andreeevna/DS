import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../logo/Logo'
import './../../assets/styles/index.css'
import styles from './Header.module.css'

import { AiOutlinePhone } from 'react-icons/ai'

import Hamburger from '../hamburger/Hamburger'
import HamburgerMenu from '../hamburgerMenu/HamburgerMenu'
import './../../assets/styles/index.css'

const Header = ({ loading }) => {
	const [menuActive, setMenuActive] = useState(false)
	const [header, setHeader] = useState(false)

	const changeColorHeader = () => {
		if (window.scrollY >= 80) {
			setHeader(true)
		} else {
			setHeader(false)
		}
	}

	window.addEventListener('scroll', changeColorHeader)

	return (
		<header
			className={
				header || menuActive ? 'header headerActive' : 'header'
				// (loading ? 'header_pos' : 'header')
			}
		>
			<div className='bg_container'>
				<div className={styles.nav}>
					<div className={styles.header__menu}>
						<Hamburger active={menuActive} setActive={setMenuActive} />
						<span>Меню</span>
					</div>
					<HamburgerMenu active={menuActive} setActive={setMenuActive} />
					<Logo />
					<div className={styles.header__contact}>
						<span className={styles.contact__text}>Связь с компанией</span>
						<Link to='tel:89102688080' className={styles.contact__link}>
							8-910-268-80-80
						</Link>
					</div>
					<Link to='tel:89102688080' className={styles.contact__link_icon}>
						<AiOutlinePhone className={styles.icon__contact} />
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
