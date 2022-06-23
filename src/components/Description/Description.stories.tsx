import Description from '.'
import {ComponentStory, ComponentMeta} from '@storybook/react'

export default{
    title: 'Components/Descriptions',
    Component: Description
    
} as ComponentMeta<typeof Description>

const Template: ComponentStory<typeof Description> = args => (<Description/>)

export const Primary = Template.bind({})


