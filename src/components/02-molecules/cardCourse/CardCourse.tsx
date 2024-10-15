import React from 'react';
import Badge from '@/components/01-atoms/bagde/Badge';

const CardCourse: React.FC = () => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Ejemplo de Card</h2>
      <div className="flex space-x-2">
        <Badge text="Nuevo" color="red" fontWeight="bold" />
        <Badge text="En Venta" color="green" fontWeight="normal" />
        <Badge text="Destacado" color="blue" fontWeight="bold" />
      </div>
      {/* Resto del contenido de la Card */}
    </div>
  );
};

export default CardCourse;
