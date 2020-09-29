import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const ClassesPageTemplate = ({
    image,
    title,
    heading,
    description,
    intro,
    main,
    testimonials,
    fullImage,
    pricing,
    timetableImage
}) => (
    <div>
        <div
            className='full-width-image-container margin-top-0'
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(0, 128, 128, 0.63)), url(${!!image.childImageSharp
                    ? image.childImageSharp.fluid.src
                    : image})`,
                backgroundPosition: `top 20% center !important`,
                backgroundAttachment: `fixed`
            }}
        >
            <h2
                className='has-text-weight-bold is-size-1'
                style={{
                    boxShadow: '0.5rem 0 0 #48D1CC, -0.5rem 0 0 #48D1CC',
                    backgroundColor: '#48D1CC',
                    color: 'white',
                    padding: '1rem'
                }}
            >
                {title}
            </h2>
        </div>
        <section className='section section--gradient'>
            <div className='container'>
                <div className='columns content'>
                    <div className='column is-10 is-offset-1'>
                        <div>
                            <h3 className='has-text-weight-semibold has-text-centered is-size-2'>{heading}</h3>
                            <p className='has-text-centered'>{description}</p>
                        </div>
                        <div>
                            <Features gridItems={intro.blurbs} book={true} colours />
                            <h3 className='has-text-weight-semibold has-text-centered is-size-2'>{main.heading}</h3>
                            <p className='has-text-centered'>{main.description}</p>
                        </div>
                        <Testimonials testimonials={testimonials} />
                        <div
                            className='full-width-image-container'
                            style={{
                                backgroundImage: `url(${fullImage.childImageSharp
                                    ? fullImage.childImageSharp.fluid.src
                                    : fullImage})`
                            }}
                        />
                        <h2 className='has-text-weight-semibold has-text-centered is-size-2'>{pricing.heading}</h2>
                        <p className='has-text-centered mb-2'>{pricing.description}</p>
                        <Pricing data={pricing.plans} />
                        {timetableImage ?
                            <div className='image-container has-text-centered'>
                                <img src={timetableImage.childImageSharp.fluid.src} alt='SLC Fitness Classes Timetable' />
                            </div> : null}
                    </div>
                </div>
            </div>
        </section>
    </div>
)

ClassesPageTemplate.propTypes = {
    image: PropTypes.oneOfType([ PropTypes.object, PropTypes.string ]),
    title: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
    intro: PropTypes.shape({
        blurbs: PropTypes.array
    }),
    main: PropTypes.shape({
        heading: PropTypes.string,
        description: PropTypes.string,
        image1: PropTypes.oneOfType([ PropTypes.object, PropTypes.string ]),
        image2: PropTypes.oneOfType([ PropTypes.object, PropTypes.string ]),
        image3: PropTypes.oneOfType([ PropTypes.object, PropTypes.string ])
    }),
    testimonials: PropTypes.array,
    fullImage: PropTypes.oneOfType([ PropTypes.object, PropTypes.string ]),
    pricing: PropTypes.shape({
        heading: PropTypes.string,
        description: PropTypes.string,
        plans: PropTypes.array
    })
}

const ClassesPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout>
            <ClassesPageTemplate
                image={frontmatter.image}
                title={frontmatter.title}
                heading={frontmatter.heading}
                description={frontmatter.description}
                intro={frontmatter.intro}
                main={frontmatter.main}
                testimonials={frontmatter.testimonials}
                fullImage={frontmatter.full_image}
                pricing={frontmatter.pricing}
                timetableImage={frontmatter.timetableImage}
            />
        </Layout>
    )
}

ClassesPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object
        })
    })
}

export default ClassesPage

export const classesPageQuery = graphql`
    query ClassesPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                image {
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                heading
                description
                intro {
                    blurbs {
                        image {
                            childImageSharp {
                                fluid(maxWidth: 240, quality: 64) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        text
                        testheading
                    }
                    heading
                    description
                }
                main {
                    heading
                    description
                    image1 {
                        alt
                        image {
                            childImageSharp {
                                fluid(maxWidth: 526, quality: 92) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    image2 {
                        alt
                        image {
                            childImageSharp {
                                fluid(maxWidth: 526, quality: 92) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    image3 {
                        alt
                        image {
                            childImageSharp {
                                fluid(maxWidth: 1075, quality: 72) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
                testimonials {
                    author
                    quote
                }
                full_image {
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                pricing {
                    heading
                    description
                    plans {
                        description
                        items
                        plan
                        price
                    }
                }
                timetableImage {
                    childImageSharp{
                        fluid(maxWidth: 400, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`
