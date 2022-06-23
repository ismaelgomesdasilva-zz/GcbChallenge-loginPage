
import { FormLabel } from "./labelstyles"
type fromProps = {
    children?: JSX.Element|JSX.Element[];
}

const Form = ({children}:fromProps) => (
  
    <FormLabel>{children}</FormLabel>
  
)

export default Form;