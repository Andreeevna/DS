import React from 'react'

import { ClipLoader } from 'react-spinners'
import styles from './Preloader.module.css'

const Preloader = () => {
	return (
		<div className={styles.preloader}>
			<div className={styles.fade}></div>

			<ClipLoader color='#fff' loading size={60} className={styles.load} />
		</div>
	)
}

export default Preloader
