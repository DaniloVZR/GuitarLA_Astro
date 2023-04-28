import { useState } from 'react';

const componenteReact = () => {
  const [nombre, setNombre] = useState('Danilo')
  console.log('Desde componente react');

  return (
    <div>
      {nombre}
    </div>
  );
};

export default componenteReact;