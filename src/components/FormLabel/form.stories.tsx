import Form from '.'
import {ComponentStory, ComponentMeta} from '@storybook/react'

export default{
    title: 'Components/Form',
    Component: Form
    
} as ComponentMeta<typeof Form>

const Template: ComponentStory<typeof Form> = args => <Form {...args}/>

export const Primary = Template.bind({})

Primary.args = {
    title: 'Form label'
}

Primary.decorators=[
 (Story) => {
    return(
        <div style={{background: '#000', height: '100vh', display: 'flex', justifyContent:'center', alignItems:'center'}}>
            <Story></Story>
        </div>
    )
 }

]
