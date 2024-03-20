import emailjs from '@emailjs/browser'
import React, { useRef, useState } from 'react'
import Modal from '../../employees/components/Modal/Modal'
import styles from './СommunicationForm.module.css'

const СommunicationForm = () => {
	const form = useRef()
	const [value, setValue] = useState('')
	const [value2, setValue2] = useState('')
	const [modalActive, setModalActive] = useState(false)

	const sendEmail = e => {
		e.preventDefault()

		emailjs
			.sendForm(
				'service_j5yempc',
				'template_7ntdx7c',
				form.current,
				'XxypEImd3uR6t2F3C'
			)
			.then(
				result => {
					console.log(result.text)
					setValue('')
					setValue2('')
					// setModalActive(true)
				},
				error => {
					console.log(error.text)
				}
			)
	}

	return (
		<>
			<form ref={form} onSubmit={sendEmail} className={styles.form}>
				<input
					type='text'
					placeholder='Ваше имя'
					name='user_name'
					value={value}
					onChange={e => {
						setValue(e.target.value)
					}}
				/>
				<input
					type='number'
					placeholder='+7 (888) 888-88-88'
					name='user_number'
					value={value2}
					onChange={e => {
						setValue2(e.target.value)
					}}
				/>
				<button
					type='submit'
					value='Send'
					className={styles.form__submit_btn}
					onClick={() => setModalActive(true)}
				>
					Оставить заявку
				</button>
			</form>
			<Modal active={modalActive} setActive={setModalActive}>
				<div className={styles.answer_сontainer}>
					<h2 className={styles.answer_сontainer__title}>
						Ваша заявка успешно отправлена
					</h2>
					<p className={styles.answer_сontainer__text}>
						Мы ответим вам в течение 24 часов.
					</p>
					<button
						className={styles.answer_сontainer__button}
						onClick={() => setModalActive(false)}
					>
						OK
					</button>
				</div>
			</Modal>
		</>
	)
}

export default СommunicationForm
