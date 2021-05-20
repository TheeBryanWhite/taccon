import * as React from "preact"
import { StaticImage } from "gatsby-plugin-image"

const Image4 = () => {
	return(
		<StaticImage
			src='../images/taccon4.jpg'
			quality={95}
			formats={['AUTO', 'WEBP', 'AVIF']}
			alt='What would you do with that power?'
		/>
	)
}

export default Image4