
import { InputLabel } from "./styleinput"
export type inputProps = {
    type: string
    placeholder: string
    name: string
    Onchange:(e)=> void
    
}

const Input = ({type, placeholder, name, Onchange }:inputProps) => (
  
    <InputLabel type={type} placeholder={placeholder} name={name} onChange={Onchange}/>
  
)

export default Input;