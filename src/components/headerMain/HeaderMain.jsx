import cn from 'classnames'
import React from 'react'

import './../../assets/styles/index.css'

import styles from './HeaderMain.module.css'

import Breadcrumbs from '../breadcrumbs/Breadcrumbs'
import BG1 from './../../assets/images/backgrounds/header_top.jpg'

const HeaderMain = () => {
	return (
		<>
			<img src={BG1} alt='Интерьер' className={styles.header_main__img} />
			<div className={cn('bg_container', styles.header_main)}>
				<Breadcrumbs />
			</div>
		</>
	)
}

export default HeaderMain
