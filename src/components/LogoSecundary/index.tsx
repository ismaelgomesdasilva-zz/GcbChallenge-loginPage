import {ImgNone} from './logosecundary'
import Image from 'next/image';
type logoSecundaryProps = {
    src: string
    alt: string
    width: number
    height: number
}
const LogoImageSecundary = ({src, alt, width, height}:logoSecundaryProps) => (
  
    <ImgNone>
    
    <Image src={src} width={width} height={height} alt={alt} />
    </ImgNone>
  
  
)

export default LogoImageSecundary;