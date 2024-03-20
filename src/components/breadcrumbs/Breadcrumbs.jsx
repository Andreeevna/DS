import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import './../../assets/styles/index.css'
import styles from './Breadcrumbs.module.css'

const Breadcrumbs = () => {
	const location = useLocation()

	const listName = {
		['Межкомнатные двери']: 'products',
		Неоклассика: 'neoclassic',
	}

	function getKeyByValue(object, value) {
		return Object.keys(object).find(key => object[key] === value)
	}

	const breadCrumbView = () => {
		const { pathname } = location
		const pathnames = pathname.split('/').filter(item => item)
		// const capatilize = s => s.charAt(0).toUpperCase() + s.slice(1)
		return (
			<nav className={styles.breadcrumbs}>
				{pathnames.length ? (
					<span className={styles.crumb}>
						<Link to='/'>Главная страница</Link>
					</span>
				) : (
					<span className={styles.crumb}>Главная страница</span>
				)}
				{pathnames.map((name, index) => {
					const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
					const isLast = index === pathnames.length - 1
					return isLast ? (
						''
					) : (
						<span className={styles.crumb} key={index + name}>
							<Link to={`${routeTo}`}>{getKeyByValue(listName, name)}</Link>
						</span>
					)
				})}
			</nav>
		)
	}

	return <>{breadCrumbView()}</>
}

export default Breadcrumbs
