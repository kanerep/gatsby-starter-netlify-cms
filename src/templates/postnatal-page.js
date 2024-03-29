import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import video from '../img/mum-and-baby-class-fix.mp4'
import awardImage from '../img/image0.png'

export const PostnatalPageTemplate = ({
	image,
	title,
	heading,
	description,
	intro,
	main,
	testimonials,
	fullImage,
	pricing,
	timetableImage,
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
			<h2
				className='has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen has-primary-font'
				style={{
					boxShadow: '0.5rem 0 0 #7dd7d4, -0.5rem 0 0 #7dd7d4',
					backgroundColor: '#7dd7d4',
					color: 'white',
					padding: '1rem',
					maxWidth: '90vw',
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
							<h3 className='has-text-weight-semibold has-text-centered is-size-2'>
								{heading}
							</h3>
							<p className='has-text-centered'>{description}</p>
							<video controls className='baby-video' style={{ width: '100%' }}>
								<source src={video} type='video/mp4' />
							</video>
						</div>
						<div>
							<Features gridItems={intro.blurbs} book={true} />
							<h3 className='has-text-weight-semibold has-text-centered is-size-2'>
								{main.heading}
							</h3>
							<p className='has-text-centered'>{main.description}</p>
						</div>
						<Testimonials testimonials={testimonials} />
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<img src={awardImage} style={{ maxWidth: '200px' }} />
						</div>
						<div
							className='full-width-image-container'
							style={{
								backgroundImage: `url(${
									fullImage.childImageSharp
										? fullImage.childImageSharp.fluid.src
										: fullImage
								})`,
							}}
						/>
						<h2 className='has-text-weight-semibold has-text-centered is-size-2'>
							{pricing.heading}
						</h2>
						<p className='has-text-centered mb-2'>{pricing.description}</p>
						<Pricing data={pricing.plans} />
						{timetableImage ? (
							<div className='image-container has-text-centered'>
								<img
									src={timetableImage.childImageSharp.fluid.src}
									alt='SLC Fitness Postnatal Timetable'
								/>
							</div>
						) : null}
					</div>
				</div>
			</div>
		</section>
	</div>
)

PostnatalPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string,
	heading: PropTypes.string,
	description: PropTypes.string,
	intro: PropTypes.shape({
		blurbs: PropTypes.array,
	}),
	main: PropTypes.shape({
		heading: PropTypes.string,
		description: PropTypes.string,
		image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
		image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
		image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	}),
	testimonials: PropTypes.array,
	fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	pricing: PropTypes.shape({
		heading: PropTypes.string,
		description: PropTypes.string,
		plans: PropTypes.array,
	}),
}

const PostnatalPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark

	return (
		<Layout>
			<PostnatalPageTemplate
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

PostnatalPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object,
		}),
	}),
}

export default PostnatalPage

export const postnatalPageQuery = graphql`
	query PostnatalPage($id: String!) {
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
					childImageSharp {
						fluid(maxWidth: 400, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`
