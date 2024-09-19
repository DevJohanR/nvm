import React from 'react';
import CardCourse from './CardCourse'; // Asegúrate de importar el componente correctamente

const meta = {
    title: 'moleculas/CardCourse',
    component: CardCourse,
};

export default meta;

// Historia para el componente CardCourse
export const CardCourseHistory = (args) => <CardCourse {...args} />;
