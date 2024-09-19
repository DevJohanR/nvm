import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

type CalendarIconProps = {
  size?: number;
  color?: string;
};

const CalendarIcon: React.FC<CalendarIconProps> = ({ size = 24, color = 'black' }) => {
  return <FaCalendarAlt size={size} color={color} />;
};

export default CalendarIcon;
