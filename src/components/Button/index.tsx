import {ButtonPage, variantToColor} from './ButtonStyle'
export type ButtonProps = {
children: string;
variant: 'primary' | 'secondary' | 'outline'
}


 function Button({children, variant}: ButtonProps){
    
    const {bgColor, color, hoverColor} = variantToColor[variant]
    return(
         <ButtonPage bgColor={bgColor} color={color} hover={hoverColor}>{children}</ButtonPage>
            
        

    )
}
export default Button 