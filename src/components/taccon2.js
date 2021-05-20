import * as React from "preact"
import { StaticImage } from "gatsby-plugin-image"

const Image2 = () => {
	return(
		<StaticImage
			src='../images/taccon2.jpg'
			quality={95}
			formats={['AUTO', 'WEBP', 'AVIF']}
			alt='Your disadvanmtage is that they know how to manipulate the illusion.'
		/>
	)
}

export default Image2