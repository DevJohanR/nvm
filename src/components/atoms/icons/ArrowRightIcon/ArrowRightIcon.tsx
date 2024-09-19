import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

type ArrowRightIconProps = {
  size?: number;
  color?: string;
};

const ArrowRightIcon: React.FC<ArrowRightIconProps> = ({ size = 24, color = 'black' }) => {
  return <FaArrowRight size={size} color={color} />;
};

export default ArrowRightIcon;
