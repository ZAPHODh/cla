import { Meta, StoryFn } from '@storybook/react';
import { Resume, ResumeProps } from '.';

export default {
  title: 'Resume',
  component: Resume,
} as Meta<ResumeProps>;

const Template: StoryFn<typeof Resume> = (args) => <Resume {...args} />;

export const Primary = Template.bind({});
//default values
// Primary.args = {
//     title: 'teste',
// }
