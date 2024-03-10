import React from 'react'; 

export const TopBarComponent = () => { 
  return (
    <div className='topbar'> 
      <br />
      <h3>ARRIENDOS PARA INMOBILIARIA</h3>

      {/* Agregar la imagen aquí */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/27/Logo_ESPE.png"  // Reemplaza esto con la URL de la imagen
        alt="Logo ESPE"
        style={{ width: '40px', height: '40px' }}
      />
    </div>
  );
};

export default TopBarComponent;

