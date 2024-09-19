import React from 'react';

type BadgeProps = {
  text: string;
  color: 'red' | 'green' | 'blue'; // Puedes añadir más colores según necesites
  fontWeight: 'normal' | 'bold';
};

const Badge: React.FC<BadgeProps> = ({ text, color, fontWeight }) => {
  // Definimos los estilos de fondo y texto usando un switch
  let bgColorClass = '';
  const textColorClass = 'text-white'; // Por defecto el texto será blanco

  switch (color) {
    case 'red':
      bgColorClass = 'bg-red-500';
      break;
    case 'green':
      bgColorClass = 'bg-green-500';
      break;
    case 'blue':
      bgColorClass = 'bg-blue-500';
      break;
    default:
      bgColorClass = 'bg-gray-500';
  }

  // Definir el peso de la fuente
  const fontWeightClass = fontWeight === 'bold' ? 'font-bold' : 'font-normal';

  return (
    <span className={`inline-block px-3 py-1 rounded-full ${bgColorClass} ${textColorClass} ${fontWeightClass}`}>
      {text}
    </span>
  );
};

export default Badge;
