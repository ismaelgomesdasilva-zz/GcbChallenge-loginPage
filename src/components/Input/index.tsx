import {FormLabel} from './InputStyle'
export type InputProps = {
children: string;
variant: 'primary'
}


 function Input({children}){
    

    return(
         <FormLabel>{children}</FormLabel>
            
        

    )
}
export default Input 