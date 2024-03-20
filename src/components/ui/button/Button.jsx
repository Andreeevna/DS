import cn from 'classnames'
import React from 'react'

import styles from './Button.module.css'

const Button = ({ clickHandler = null, affiliation = '', btnColor = '' }) => {
	return (
		<button
			className={cn(
				styles[affiliation],
				styles.btn,
				styles[btnColor],
				styles.btn_animation
			)}
			onClick={clickHandler}
		>
			<span>узнать больше</span>
		</button>
	)
}

export default Button
