import cn from 'classnames'
import React from 'react'

import { Link } from 'react-router-dom'
import './../../assets/styles/index.css'
import styles from './Logo.module.css'

const Logo = ({ footerLogo }) => {
	return (
		<Link to={'/'} className={cn(styles.logo, footerLogo)}>
			<h2 className={styles.logo__name}>Дверная история</h2>
			<p className={styles.logo__text}>16 лет вместе</p>
		</Link>
	)
}

export default Logo
