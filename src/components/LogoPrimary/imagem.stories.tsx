
import { ComponentMeta, ComponentStory } from '@storybook/react';
import LogoImagem from '.';

export default {
  title: 'Components/Imagens/Primary',
  component: LogoImagem
} as ComponentMeta<typeof LogoImagem>;


const Template: ComponentStory<typeof LogoImagem> = args => <LogoImagem {...args}/>

export const Desktop = Template.bind({})
Desktop.args={

  src: '/gcb-desktop.svg',
  alt: 'logo gcbola',
  width: 400,
  height: 120




}

export const Mobile = LogoImagem.bind({})
Mobile.args = {
  src: '/gcb-mobile.svg',
  alt: 'GCB Logo',
  height: 120,
  width: 420
}
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphonexr'
  }
}

