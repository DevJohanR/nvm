import React from 'react';
import CalendarIcon from './CalendarIcon';

export default {
  title: 'Atoms/Icons/CalendarIcon',
  component: CalendarIcon,
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

export const DefaultCalendarIcon = (args) => <CalendarIcon {...args} />;
DefaultCalendarIcon.args = {
  size: 24,
  color: 'black',
};
