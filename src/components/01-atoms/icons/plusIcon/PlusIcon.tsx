import React from 'react';
import { FaPlus } from 'react-icons/fa';

type PlusIconProps = {
  size?: number;
  color?: string;
};

const PlusIcon: React.FC<PlusIconProps> = ({ size = 24, color = 'black' }) => {
  return <FaPlus size={size} color={color} />;
};

export default PlusIcon;
