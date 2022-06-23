
import {ImgBackground} from './background'
import Image from 'next/image';
type logoSecundaryProps = {
  src: string
  alt: string
  width: number
  height: number
}
const BackgroundImg = ({src, alt, width, height}:logoSecundaryProps) => (
  
  
    <ImgBackground>
    
    <Image src={src} width={width} height={height} alt={alt}/>
    </ImgBackground>
    
    
  
  
)
export default BackgroundImg