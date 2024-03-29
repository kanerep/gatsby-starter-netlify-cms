import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/dark-logo.jpeg'

const Navbar = class extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			active: false,
			navBarActiveClass: '',
		}
	}

	toggleHamburger = () => {
		// toggle the active boolean in the state
		this.setState(
			{
				active: !this.state.active,
			},
			// after state has been updated,
			() => {
				// set the class in state for the navbar accordingly
				this.state.active
					? this.setState({
							navBarActiveClass: 'is-active',
					  })
					: this.setState({
							navBarActiveClass: '',
					  })
			}
		)
	}

	render() {
		return (
			<nav
				className='navbar is-transparent is-fixed-top'
				role='navigation'
				aria-label='main-navigation'
			>
				<div className='container'>
					<div className='navbar-brand'>
						<Link to='/' className='navbar-item logo-wrap' title='Logo'>
							<img className='logo' src={logo} alt='SLC Fitness Logo' />
							{/* <h1 className='nav-heading has-text-weight-bold'>SLC Fitness</h1> */}
						</Link>
						<div
							className={`navbar-burger burger ${this.state.navBarActiveClass}`}
							data-target='navMenu'
							onClick={() => this.toggleHamburger()}
							role='navigation'
						>
							<span />
							<span />
							<span />
						</div>
					</div>

					<div
						id='navMenu'
						className={`navbar-menu ${this.state.navBarActiveClass}`}
					>
						<div className='navbar-end has-text-centered'>
							<Link
								className='navbar-item has-text-weight-semibold'
								activeClassName='active'
								to='/'
							>
								<span className='navbar-text-item'>Home</span>
							</Link>
							<Link
								className='navbar-item has-text-weight-semibold'
								activeClassName='active'
								to='/about'
							>
								<span className='navbar-text-item'>About</span>
							</Link>
							<Link
								className='navbar-item has-text-weight-semibold'
								activeClassName='active'
								to='/classes'
							>
								<span className='navbar-text-item'>Classes</span>
							</Link>
							<Link
								className='navbar-item has-text-weight-semibold'
								activeClassName='active'
								to='/mum-and-baby-fitness-classes'
							>
								<span className='navbar-text-item'>
									Mum &#38; Baby Fitness Classes{' '}
								</span>
							</Link>
							<Link
								className='navbar-item has-text-weight-semibold'
								activeClassName='active'
								to='/contact'
							>
								<span className='navbar-text-item'>Contact</span>
							</Link>
						</div>
					</div>
				</div>
			</nav>
		)
	}
}

export default Navbar
