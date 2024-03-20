import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../logo/Logo'
import './../../assets/styles/index.css'
import styles from './Footer.module.css'

import Tg from './../../assets/images/icons/telegram-svgrepo-com.svg'
import Vk from './../../assets/images/icons/vk-svgrepo-com.svg'
import Wh from './../../assets/images/icons/whatsapp-svgrepo-com.svg'

const Footer = () => {
	const footerLogo = 'footer__logo'
	return (
		<footer className={styles.footer}>
			<div className='bg_container'>
				<div className={styles.footer_top}>
					<div className={styles.footer_top__contact}>
						<h2 className={styles.footer_top__title}>Контакты:</h2>
						<Link to='tel:89102688080' className={styles.footer_top__link}>
							8-910-268-80-80
						</Link>{' '}
						<Link to='tel:89536153888' className={styles.footer_top__link}>
							8-953-615-38-88
						</Link>
					</div>
					<Logo footerLogo={footerLogo} />
					<div className={styles.footer_top__adress}>
						<h2 className={styles.footer_top__title}>Адрес:</h2>
						<p className={styles.footer_top__desc}>
							г. Орел, ул. Полесская, д. 9 (р-н ТЦ "Атолл", рядом с кафе
							"Жар-Пицца")
						</p>
					</div>
				</div>
				<div className={styles.footer_bottom}>
					<h2 className={styles.footer_bottom__title}>Мы в соцсетях:</h2>
					<ul className={styles.social__list}>
						<li className={styles.social__item}>
							<Link
								to='https://vk.com/dveri.orel'
								className={styles.social__link}
							>
								<img className={styles.social__img} src={Vk} alt='Vkontakte' />
							</Link>
						</li>

						<li className={styles.social__item}>
							<Link
								to=' https://wa.me/79536153888'
								className={styles.social__link}
							>
								<img className={styles.social__img} src={Wh} alt='WhatsApp' />
							</Link>
						</li>
						<li className={styles.social__item}>
							<Link
								to='https://t.me/Histori3022'
								className={styles.social__link}
							>
								<img className={styles.social__img} src={Tg} alt='Telegram' />
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}

export default Footer
