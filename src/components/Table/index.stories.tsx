import { Meta, StoryFn } from '@storybook/react';
import { Table, TableProps } from '.';

export default {
  title: 'Table',
  component: Table,
} as Meta<TableProps>;

const Template: StoryFn<typeof Table> = (args) => <Table {...args} />;

export const Primary = Template.bind({});
//default values
// Primary.args = {
//     title: 'teste',
// }
