import { Meta, StoryFn } from '@storybook/react';
import { Heading, HeadingProps } from '.';

export default {
  title: 'Heading',
  component: Heading,
} as Meta<HeadingProps>;

const Template: StoryFn<typeof Heading> = (args) => <Heading {...args} />;

export const Primary = Template.bind({});
