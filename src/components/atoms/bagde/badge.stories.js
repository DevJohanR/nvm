import React from 'react';
import Badge from './Badge';

/**
 * 
 * El componente **Badge** es un elemento de interfaz de usuario que sirve para mostrar información breve y resaltada, como etiquetas o estados.
 * 
 * ### Uso
 * 
 * El componente Badge es útil para:
 * - Etiquetar elementos con información contextual.
 * - Mostrar estados o indicadores importantes.
 * - Resaltar categorías o tipos.
 * 
 * ### Propiedades
 * 
 * - **text**: El texto que se mostrará dentro del badge.
 * - **color**: El color de fondo del badge (opciones: 'red', 'green', 'blue', 'purple').
 * - **fontWeight**: El peso de la fuente del texto en el badge (opciones: 'normal', 'bold').
 * 
 * ### Ejemplo
 * 
 * \`\`\`jsx
 * <Badge text="Nuevo" color="green" fontWeight="bold" />
 * \`\`\`
 * 
 */

export default {
  title: 'Atoms/Badge',
  tags: ['autodocs'], // tu comentario aquí: Añadimos 'tags' con 'autodocs' para habilitar la generación automática de documentación.
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
      options: ['red', 'green', 'blue', 'purple'], // tu comentario aquí: Añadimos 'purple' a las opciones disponibles.
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
  args: { // tu comentario aquí: Definimos 'args' para establecer valores por defecto en las historias.
    text: 'Example Badge',
    color: 'blue',
    fontWeight: 'normal',
  },
};

// Historia para el componente Badge
export const BadgeExample = (args) => <Badge {...args} />;
