import React from 'react'
import PropTypes from 'prop-types'
import BackgroundImage from 'gatsby-background-image'

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = { borderRadius: '2px' }
  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <BackgroundImage Tag="div" className='background-image-gatsby' fluid={image.childImageSharp.fluid}></BackgroundImage>
    )
  }

  if (!!childImageSharp) {
    return <BackgroundImage Tag="div" className='background-image-gatsby' fluid={childImageSharp.fluid}></BackgroundImage>
  }

  if (!!image && typeof image === 'string')
    return <BackgroundImage Tag="div" className='background-image-gatsby' src={image}></BackgroundImage>

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
