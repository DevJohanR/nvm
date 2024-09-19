// Badge.stories.js
import React from 'react';
import Badge from './Badge';

export default {
  title: 'Atoms/Badge',
  component: Badge,
  argTypes: {
    text: {
      control: { type: 'text' },
      description: 'El texto que se mostrará dentro del badge',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Example Badge' },
      },
    },
    color: {
      control: { type: 'select' },
      options: ['red', 'green', 'blue'],
      description: 'El color de fondo del badge',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'blue' },
      },
    },
    fontWeight: {
      control: { type: 'select' },
      options: ['normal', 'bold'],
      description: 'El peso de la fuente del texto en el badge',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'normal' },
      },
    },
  },
};

// Historia para el componente Badge
export const BadgeExample = (args) => <Badge {...args} />;
BadgeExample.args = {
  text: 'Example Badge',
  color: 'blue',
  fontWeight: 'normal',
};
