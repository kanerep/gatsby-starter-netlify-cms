import React from 'react'
import PropTypes from 'prop-types'
import BackgroundImage from 'gatsby-background-image'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { Link } from 'gatsby'

const FeatureGrid = ({ gridItems, book, colours }) => (
  <div className="side-by-side-feature">
    {gridItems.map((item) => (
      <div key={item.text} className="columns is-marginless is-relative">
          <div className="column is-6 is-paddingless has-text-centered">
              <PreviewCompatibleImage imageInfo={item} />
          </div>

          <div className={`column is-6 background-color ${colours ? 'alt-colours' : ''}`}>
            <div className='content-container'>
              <h3>{item.testheading}</h3>
              <p>{item.text}</p>
              <div className='button-container'>
                {book ? 
                    <a className='button is-secondary' href='https://app.gymcatch.com/provider/2313/events' target='_blank'><span>Book Now<span className='right-arrow'>&nbsp;&rarr;</span></span></a> :
                    <Link className='button is-secondary' to='/classes'><span>Explore<span className='right-arrow'>&nbsp;&rarr;</span></span></Link>
                }
              </div>
            </div>
          </div>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
