import Button, { ButtonProps } from '.'
import {ComponentMeta, Story} from '@storybook/react'

export default{
    title: 'Buttons/Button',
    component: Button, 
    argTypes: {
        variant:{
            defaultValue: 'primary',
            control:{
                type: 'select', 
                values: ['primary', 'secondary', 'outline']
            }
        }
    }
} as ComponentMeta<typeof Button>

export const ButtonSubmit: Story<ButtonProps> = (args) => (
    <Button {...args}>Submit</Button>
)