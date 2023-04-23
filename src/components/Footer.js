import React from 'react'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import email from '../img/social/email.svg'
import phone from '../img/social/phone.svg'

const Footer = class extends React.Component {
	render() {
		return (
			<footer className='footer has-text-white-ter'>
				<div className='content has-text-centered has-text-white-ter'>
					<div className='container has-text-white-ter'>
						<div
							className='columns'
							style={{ padding: 0, margin: 0, width: '100%' }}
						>
							<div
								className='column social'
								style={{ padding: 0, width: '100%' }}
							>
								<h5>Stay Connected</h5>
								<a
									title='facebook'
									href='https://www.facebook.com/slcfitness1/'
								>
									<img
										src={facebook}
										alt='Facebook'
										style={{ width: '1em', height: '1em' }}
									/>
								</a>
								<a
									title='instagram'
									href='https://www.instagram.com/_slcfitness/'
								>
									<img
										src={instagram}
										alt='Instagram'
										style={{ width: '1em', height: '1em' }}
									/>
								</a>
								<a
									title='Email us'
									href='mailto:samchandler93@hotmail.co.uk'
									target='_blank'
									rel='noreferrer'
								>
									<img
										src={email}
										alt='email'
										style={{ width: '1em', height: '1em' }}
									/>
								</a>
								<a title='Call us' href='tel:07562750711'>
									<img
										src={phone}
										alt='phone'
										style={{ width: '1em', height: '1em' }}
									/>
								</a>

								<div className='copyright-wrapper'>
									<p>
										&copy; Copyright {new Date().getFullYear()} All rights
										reserved SLC Fitness.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		)
	}
}

export default Footer
