import React from 'react'

import { BiLogoTelegram } from 'react-icons/bi'
import { BsFillChatTextFill } from 'react-icons/bs'

import СommunicationForm from './СommunicationForm.jsx'

import './../../assets/styles/index.css'
import styles from './Communication.module.css'

const Сommunication = () => {
	return (
		<section className={styles.communication}>
			<div className='bg_container'>
				<div className={styles.communication_box}>
					<div className={styles.communication_box__form}>
						<h2 className={styles.communication_box__title}>
							{' '}
							Обсудите проект со специалистом
						</h2>
						<СommunicationForm />
					</div>
					<div className={styles.desc_box}>
						<div className={styles.desc_box__item}>
							<BiLogoTelegram color='blue' fontSize='2em' />
							<p className={styles.desc_box__text}>
								Ответим на любые вопросы, поможем определиться с выбором и
								сделать заказ
							</p>
						</div>
						<div className={styles.desc_box__item}>
							<BsFillChatTextFill color='blue' fontSize='1em' />
							<p className={styles.desc_box__text}>
								Заполните форму и мы свяжемся с вами
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Сommunication
