import * as C from './ButtonStyle'
export type ButtonProps = {
children: string;
variant: 'primary' | 'secondary' | 'outline'
}


 function Button({children, variant}: ButtonProps){
    
    
    return(
         <C.ButtonPage>{children}</C.ButtonPage>
            
        

    )
}
export default Button 