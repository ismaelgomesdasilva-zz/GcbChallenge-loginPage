import { ButtonHTMLAttributes } from "react";
import { ButtonPage } from "./stylesButton";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
   
} 

export function Button():ButtonProps{
    
    
    return(
        <ButtonPage type='button'/>
            
        

    )
}