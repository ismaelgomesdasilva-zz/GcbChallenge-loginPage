import FormLabel, { FormLabelProps } from '.'
import {ComponentMeta, Story} from '@storybook/react'

export default{
    title: 'Inputs/Input',
    component: FormLabel, 
    argTypes: {
        variant:{
            defaultValue: 'primary',
            control:{
                type: 'select', 
                values: ['primary', 'secondary', 'outline']
            }
        }
    }
} 

export const Form: Story<FormLabelProps> = (args) => (
    <FormLabel {...args}></FormLabel>
)