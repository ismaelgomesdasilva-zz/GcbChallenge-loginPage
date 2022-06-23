
import Image from 'next/image';
type LogoImagemProps = {
    src: string
    alt: string
    width: number
    height: number
}
const LogoImagem = ({src, alt, width, height}:LogoImagemProps) => (
  
    
    <Image src={src} width={width} height={height} alt={alt} />
  
  
)
export const Mobile = LogoImagem.bind({})
Mobile.args = {
  src: '/gcb-mobile.svg',
  alt: 'GCB Logo',
  height: 120,
  width: 420
}
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphonexr'
  }
}
export default LogoImagem;