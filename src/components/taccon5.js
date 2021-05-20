import * as React from "preact"
import { StaticImage } from "gatsby-plugin-image"

const Image5 = () => {
	return(
		<StaticImage
			src='../images/taccon5.png'
			quality={95}
			formats={['AUTO', 'WEBP', 'AVIF']}
			alt='Would you destroy the prison? Kill your jailers?'
		/>
	)
}

export default Image5