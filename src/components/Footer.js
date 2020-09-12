import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo-slc-t.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
    render () {
        return (
            <footer className='footer has-background-black has-text-white-ter'>
            
                <div className='content has-text-centered has-background-black has-text-white-ter'>
                    <div className='container has-background-black has-text-white-ter'>
                        <div className='columns'>
                            <div className='column is-half contact'>
                                <h5>Get in touch</h5>
                                <ul className='contact-list'>
                                    <li>
                                        <span>
                                            <i class='fas fa-phone-alt' />
                                        </span>XXXXXXXXX
                                    </li>
                                    <li>
                                        <span>
                                            <i class='fas fa-envelope' />
                                        </span>test@slc-fitness.co.uk
                                    </li>
                                </ul>
                            </div>
                            <div className='column is-half social'>
                                <h5>Stay connected</h5>
                                <a title='facebook' href='https://www.facebook.com/slcfitness1/'>
                                    <img src={facebook} alt='Facebook' style={{ width: '1em', height: '1em' }} />
                                </a>
                                <a title='instagram' href='https://www.instagram.com/_slcfitness/'>
                                    <img src={instagram} alt='Instagram' style={{ width: '1em', height: '1em' }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
