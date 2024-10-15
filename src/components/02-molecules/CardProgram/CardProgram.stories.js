import React from 'react';
import CardProgram from './CardProgram';

export default {
  title: 'moleculas/CardProgram',
  component: CardProgram,
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Título del programa',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Nombre programa' },
      },
    },
    startDate: {
      control: { type: 'text' },
      description: 'Fecha de inicio del programa',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Próximamente' },
      },
    },
    description: {
      control: { type: 'text' },
      description: 'Descripción del programa',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Donec ode tellus, facilisis at ornare sed, scelerisque sit amet sapien. Sed risus turpis, fermentum quis finibus sed, pretium quis metus.' },
      },
    },
  },
};

const Template = (args) => <CardProgram {...args} />;

export const DefaultCardProgram = Template.bind({});
DefaultCardProgram.args = {
  title: 'Nombre programa',
  startDate: 'Próximamente',
  description: 'Donec ode tellus, facilisis at ornare sed, scelerisque sit amet sapien. Sed risus turpis, fermentum quis finibus sed, pretium quis metus.',
};
