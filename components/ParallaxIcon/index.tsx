import Image from 'next/image'

import Parallax from '../Parallax'

type ParallaxIconProps = {
  offset?: number
  src: string | StaticImageData
  className?: string
  style?: object
  size?: string
  top?: string
  right?: string
  bottom?: string
  left?: string
}

const ParallaxIcon = ({
  offset,
  src = '',
  className = '',
  style = {},
  size = '',
  top = 'auto',
  right = 'auto',
  bottom = 'auto',
  left = 'auto',
}: ParallaxIconProps) => {
  const styleWrapper = {
    ...style,
    position: 'absolute',
    width: size,
    paddingBottom: size,
    top,
    right,
    bottom,
    left,
  }

  return (
    <Parallax
      offset={offset}
      className={`${className} icon-responsive`}
      style={styleWrapper}
    >
      <Image src={src} alt="Korrawich Icon" layout="fill" objectFit="contain" />
    </Parallax>
  )
}

export default ParallaxIcon
