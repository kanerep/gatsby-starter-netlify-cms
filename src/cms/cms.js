import CMS from 'netlify-cms-app'
// import uploadcare from 'netlify-cms-media-library-uploadcare'
// import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ClassesPagePreview from './preview-templates/ClassesPagePreview'
import PostnatalPagePreview from './preview-templates/PostnatalPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

// CMS.registerMediaLibrary(uploadcare)
// CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('classes', ClassesPagePreview)
CMS.registerPreviewTemplate('postnatal', PostnatalPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
