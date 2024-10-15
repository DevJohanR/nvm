import React from 'react';
import Image from 'next/image'; // Importamos el componente Image de Next.js
import Badge from '@/components/01-atoms/bagde/Badge';
import PlusIcon from '@/components/01-atoms/icons/plusIcon/PlusIcon';
import ArrowRightIcon from '@/components/01-atoms/icons/ArrowRightIcon/ArrowRightIcon';
import CalendarIcon from '@/components/01-atoms/icons/CalendarIcon/CalendarIcon';

type CardProgramProps = {
    title?: string;
    startDate?: string;
    description?: string;
  };
  
  const CardProgram: React.FC<CardProgramProps> = ({
    title = 'Nombre programa', // Valor por defecto
    startDate = 'Próximamente', // Valor por defecto
    description = 'Donec ode tellus, facilisis at ornare sed, scelerisque sit amet sapien. Sed risus turpis, fermentum quis finibus sed, pretium quis metus.' // Valor por defecto
  }) => {
    return (
      <div className="max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg relative flex flex-col">
        <div className="relative">
          <Image
            src="https://i.ibb.co/SKvNJQg/Copia-de-Morsa-IS-Bogot-university-Cam-1-3318.jpg"
            alt="Programa"
            width={400}
            height={250}
            className="w-full"
          />
          <div className="absolute top-4 right-4 flex space-x-2"> {/* Contenedor de los badges con posición absoluta */}
            <Badge text="Facultad" color="green" fontWeight="bold" />
            <Badge text="Virtual" color="blue" fontWeight="bold" />
          </div>
        </div>
        <div className="p-4 flex-grow flex flex-col"> {/* Flex grow para que el contenido crezca */}
          <div className="inline-flex mb-2"> {/* Contenedor inline-flex para mantener el tamaño del badge */}
            <Badge text="Etiqueta" color="purple" fontWeight="normal" />
          </div>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <div className="flex items-center text-gray-600 text-sm mb-4">
            <CalendarIcon size={16} color="#4A5568" />
            <span className="ml-2">Fecha de inicio: {startDate}</span>
          </div>
          <p className="text-gray-700 text-base mb-4">
            {description}
          </p>
          <div className="flex mt-auto justify-between items-center"> {/* mt-auto para empujar este contenedor al final */}
            <button className="flex items-center text-orange-500 font-bold">
              <PlusIcon size={16} color="#F56565" />
              <span className="ml-1">Conocer más</span>
            </button>
            <button className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-full">
              Inscríbete
              <ArrowRightIcon size={16} color="white" />
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default CardProgram;