import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Template as TemplateComponent } from '.'

export default {
  title: 'Template',
  component: TemplateComponent,
} as ComponentMeta<typeof TemplateComponent>

const Template: ComponentStory<typeof TemplateComponent> = (args) => (
  <Template {...args} />
)

export const Default = Template.bind({})
