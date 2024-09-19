import React from 'react';
import ArrowRightIcon from './ArrowRightIcon';

export default {
  title: 'Atoms/Icons/ArrowRightIcon',
  component: ArrowRightIcon,
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

export const DefaultArrowRightIcon = (args) => <ArrowRightIcon {...args} />;
DefaultArrowRightIcon.args = {
  size: 24,
  color: 'black',
};
