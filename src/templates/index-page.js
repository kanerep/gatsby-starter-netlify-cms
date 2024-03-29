import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import Testimonials from '../components/Testimonials'
import video from '../img/SLC-Fitness-LANDSCAPE.mp4'
import logo from '../img/finalSLClogo.png'
import awardImage from '../img/image0.png'

export const IndexPageTemplate = ({
	image,
	title,
	heading,
	subheading,
	mainpitch,
	description,
	intro,
	testimonials,
}) => (
	<div>
		<div
			className='full-width-image margin-top-0'
			style={{
				backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(0, 128, 128, 0.63)), url(${
					!!image.childImageSharp ? image.childImageSharp.fluid.src : image
				})`,
				backgroundPosition: `top 20% center !important`,
			}}
		>
			<div className='hero-content-container container'>
				<div className='hero-content has-text-centered'>
					<h1
						className='has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen has-primary-font'
						style={{
							color: 'white',
							lineHeight: '1',
							marginBottom: '16px',
						}}
					>
						{title}
					</h1>
					<p
						className='has-text-weight-medium is-size-5-mobile is-size-5-tablet is-size-4-widescreen'
						style={{
							color: 'white',
							lineHeight: '1',
						}}
					>
						{subheading}
					</p>
					<a
						className='button is-primary is-cta'
						href='https://app.gymcatch.com/provider/2313/events'
						target='_blank'
					>
						<span>
							Book Now<span className='right-arrow'>&nbsp;&rarr;</span>
						</span>
					</a>
				</div>
			</div>
		</div>
		<section className='section section--gradient'>
			<div className='container'>
				<div className='columns'>
					<div className='column is-10 is-offset-1'>
						<div className='content'>
							<div className='content'>
								<div className='has-text-centered'>
									<h1 className='title'>{mainpitch.title}</h1>
								</div>
								<div>
									<h3 className='subtitle'>{mainpitch.description}</h3>
								</div>
								<video controls style={{ width: '100%' }}>
									<source src={video} type='video/mp4' />
								</video>
							</div>
							<div className='columns'>
								<div className='column is-12 has-text-centered'>
									<h3 className='has-text-weight-semibold is-size-2'>
										{heading}
									</h3>
									<p>{description}</p>
								</div>
							</div>
							<Features gridItems={intro.blurbs} book={false} />
							{/* <div className='columns'>
                                <div className='column is-12 has-text-centered'>
                                    <Link className='btn' to='/classes'>
                                        See all classes
                                    </Link>
                                </div>
                            </div> */}
							{/* The blog section has been commented out for now */}
							{/* <div className='column is-12'>
															<h3 className='has-text-weight-semibold is-size-2'>Latest stories</h3>
															<BlogRoll />
															<div className='column is-12 has-text-centered'>
																<Link className='btn' to='/blog'>
																	Read more
																</Link>
															</div>
														</div> */}

							<div className='section'>
								<h2 className='has-text-weight-semibold is-size-2 has-text-centered'>
									What some of our members say
								</h2>
								<Testimonials testimonials={testimonials} />
							</div>
							<div style={{ display: 'flex', justifyContent: 'center' }}>
								<img src={awardImage} style={{ maxWidth: '200px' }} />
							</div>
							{/* <Instagram /> */}
							{mainpitch.timetableImage ? (
								<div className='image-container has-text-centered'>
									<img
										src={mainpitch.timetableImage.childImageSharp.fluid.src}
										alt='SLC Fitness Timetable'
									/>
								</div>
							) : null}
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
)

IndexPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string,
	heading: PropTypes.string,
	subheading: PropTypes.string,
	mainpitch: PropTypes.object,
	description: PropTypes.string,
	intro: PropTypes.shape({
		blurbs: PropTypes.array,
	}),
	testimonials: PropTypes.array,
}

const IndexPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark

	return (
		<Layout>
			<IndexPageTemplate
				image={frontmatter.image}
				title={frontmatter.title}
				heading={frontmatter.heading}
				subheading={frontmatter.subheading}
				mainpitch={frontmatter.mainpitch}
				description={frontmatter.description}
				intro={frontmatter.intro}
				testimonials={frontmatter.testimonials}
			/>
		</Layout>
	)
}

IndexPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object,
		}),
	}),
}

export default IndexPage

export const pageQuery = graphql`
	query IndexPageTemplate {
		markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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
				subheading
				mainpitch {
					title
					description
					timetableImage {
						childImageSharp {
							fluid(maxWidth: 400, quality: 100) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
				description
				intro {
					blurbs {
						image {
							childImageSharp {
								fluid(maxWidth: 320, quality: 100) {
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
				testimonials {
					author
					quote
				}
			}
		}
	}
`
