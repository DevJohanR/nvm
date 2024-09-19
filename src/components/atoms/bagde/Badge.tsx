type BadgeProps = {
  text: string;
  color: 'red' | 'green' | 'blue' | 'purple'; // Agregamos 'purple' aquí
  fontWeight: 'normal' | 'bold';
};

const Badge: React.FC<BadgeProps> = ({ text, color, fontWeight }) => {
  let bgColorClass = '';
  const textColorClass = 'text-white';

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
    case 'purple':
      bgColorClass = 'bg-purple-500'; // Definimos la clase de color para purple
      break;
    default:
      bgColorClass = 'bg-gray-500';
  }

  const fontWeightClass = fontWeight === 'bold' ? 'font-bold' : 'font-normal';

  return (
    <span className={`inline-block px-3 py-1 rounded-full ${bgColorClass} ${textColorClass} ${fontWeightClass}`}>
      {text}
    </span>
  );
};

export default Badge;
