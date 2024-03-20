import React from 'react'

import { Link } from 'react-router-dom'
import styles from './HamburgerMenu.module.css'

import './../../assets/styles/index.css'

const HamburgerMenu = ({ active, setActive }) => {
	const items = [
		{ value: 'Главная страница', href: '/' },
		{ value: 'Каталог', href: '/catalog' },
		{ value: 'Акции', href: '/stocks' },
		{ value: 'Новинки', href: '/' },
		{ value: 'Адреса магазинов', href: '/location' },
	]

	return (
		<div
			className={active ? 'menuBurger activeBurger' : 'menuBurger'}
			onClick={() => setActive(false)}
		>
			<div className={styles.blur} />
			<div
				className={styles.menu__container}
				onClick={e => e.stopPropagation()}
			>
				<ul>
					{items &&
						items.map((item, index) => (
							<li key={index + item.value}>
								<Link to={item.href}>{item.value}</Link>
							</li>
						))}
				</ul>
			</div>
		</div>
	)
}

export default HamburgerMenu
