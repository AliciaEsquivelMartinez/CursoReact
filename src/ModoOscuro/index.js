import React, { useState } from 'react';
import './Modos.css'; // Archivo CSS para estilos

const Modo = () => {
    const [modoOscuro, setModoOscuro] = useState(false);

    const cambiarModo = () => {
        setModoOscuro(!modoOscuro);
    };

    return (
        <body className={modoOscuro ? 'modo-oscuro' : 'modo-claro'}>
            <button onClick={cambiarModo}>
            {modoOscuro ? 'Modo Claro' : 'Modo Oscuro'}
            </button>
        </body>
    );
};

export default Modo;
