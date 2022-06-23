import { ButtonPage} from './styleButton'

export type ButtonProps = {
  Onclick:()=> void 
  title: string
  BgColor?: string
  Color?: string
  
}

const Button = ({title, Onclick }:ButtonProps) => (
  
    <ButtonPage Color={'#f5ca9c'} BgColor={'#423b32'} onClick={Onclick}>{title}</ButtonPage>
  
)

export default Button;