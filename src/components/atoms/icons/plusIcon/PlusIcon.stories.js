import React from 'react';
import PlusIcon from './PlusIcon';

export default {
  title: 'Atoms/Icons/PlusIcon',
  component: PlusIcon,
  argTypes: {
    size: {
      control: { type: 'number' },
      description: 'El tamaño del icono',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 24 },
      },
    },
    color: {
      control: { type: 'color' },
      description: 'El color del icono',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'black' },
      },
    },
  },
};

export const DefaultPlusIcon = (args) => <PlusIcon {...args} />;
DefaultPlusIcon.args = {
  size: 24,
  color: 'black',
};
