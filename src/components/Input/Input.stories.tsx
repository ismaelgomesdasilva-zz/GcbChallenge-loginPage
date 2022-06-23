import Input from '.'
import {ComponentStory, ComponentMeta} from '@storybook/react'

export default{
    title: 'Components/Input',
    Component: Input
    
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = args => <Input {...args}/> 

export const Primary = Template.bind({})


Primary.args = {
    type: 'Email ou senha',
    placeholder: 'Insira o Email ou senha',
    name: 'Email ou senha',
    Onchange:() => {}
    
}