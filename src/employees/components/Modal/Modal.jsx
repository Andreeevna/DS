import React from 'react'

import cn from 'classnames'
import styles from './Modal.module.css'

const Modal = ({ active, setActive, children }) => {
	return (
		<div
			className={cn(styles.modal, {
				[styles.active]: active,
				[styles.modal]: active,
			})}
			onClick={() => setActive(false)}
		>
			<div
				className={cn(styles.modal__content, {
					[styles.active]: active,
					[styles.modal__content]: active,
				})}
				onClick={e => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	)
}

export default Modal
