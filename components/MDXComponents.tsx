import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'

// import Zoom from 'react-medium-image-zoom'
// import 'react-medium-image-zoom/dist/styles.css'
import Zoom from './ZoomWrapper'

import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
  Zoom,
}
