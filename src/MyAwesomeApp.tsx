import type { CSSProperties } from "react";

// Es recomendable que las constantes que no van a tener un cambio sean puestos fuera del componente REACT
const firstName = 'Daniel';
const lastName = 'Sepulveda';

const favoriteGames = ['The Legend of Zelda', 'Mario Kart', 'DOOM', 'Mario Party']
const isActive = false;

const address = {
    zipCode: 85135,
    contry: 'Mexico'
}

// el agregar :CSSProperties al objeto de estylos de REACT con su importación ya tenemos autoayuda para las propiedades 
// 
const myStyles: CSSProperties = {
    backgroundColor: '#CCC',
    borderRadius: isActive ? 10 : 1,
    padding: 10,

};

export const MyAwesomeApp = () => {
    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>
            <p>{favoriteGames.join(', ')}</p>
            <p>2 + 2</p>

            <h1>{isActive ? 'Activo' : 'No activo'}</h1>

            <p style={myStyles}> {JSON.stringify(address)}</p>
        </>
    );
}