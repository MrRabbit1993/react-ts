import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button, { ButtonType, ButtonSize } from './../components/Button'
import './../styles/index.scss'
export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  children: 'Button',
  onClick: action('clicked')
}
export const Type = Template.bind({})
Type.args = {
  btnType: ButtonType.Primary,
  children: 'Button',
  onClick: action('clicked')
}
export const Size = Template.bind({})
Size.args = {
  size: ButtonSize.Large,
  children: 'Button',
  onClick: action('clicked')
}
