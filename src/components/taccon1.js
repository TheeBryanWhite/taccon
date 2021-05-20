import * as React from "preact"
import { StaticImage } from "gatsby-plugin-image"

const Image1 = () => {
	return(
		<StaticImage
			src='../images/taccon1.jpg'
			quality={95}
			formats={['AUTO', 'WEBP', 'AVIF']}
			alt='What is it that you think you know?'
		/>
	)
}

export default Image1