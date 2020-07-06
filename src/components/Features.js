import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="side-by-side-feature">
    {gridItems.map((item) => (
      <div key={item.text} className="columns is-marginless is-relative">
          <div className="column is-6 has-text-centered">
            <div
              style={{
                width: '100%',
                maxWidth: '320px',
                display: 'inline-block',
              }}
            >
              
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <div className="column is-6 m-auto content-container">
            <h3>{item.testheading}</h3>
            <p>{item.text}</p>
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
