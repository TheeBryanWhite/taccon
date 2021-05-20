import * as React from "preact"
import { StaticImage } from "gatsby-plugin-image"

const Image3= () => {
	return(
		<StaticImage
			src='../images/taccon3.jpg'
			quality={95}
			formats={['AUTO', 'WEBP', 'AVIF']}
			alt='What if you knew how to manipulate the illusion, too?'
		/>
	)
}

export default Image3