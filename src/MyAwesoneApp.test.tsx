import { describe, expect, test } from "vitest";
import { render, screen } from '@testing-library/react'
import { MyAwesomeApp } from './MyAwesomeApp'


// para poder hacer las pruebas de componentes react como .tsx o con .jsx es necesario instalar la librería Testing Library

describe('MyAwesomeApp', () => {
    test('Should render firtName and lastName - container', () => {
        // console.log(document.body);

        // 1. Para validar elementos en el DOM: a veres usar el container que es un elemento HTMLElement 
        // No funciona si algun evento (ej: onclic, onMouse) cambia los valores, no se recomienda usar: container
        const { container } = render(<MyAwesomeApp />)
        // console.log(container.innerHTML);

        //Esto va a encontrar el primer h1 que encuentre
        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');

        //con el .toBe() evalua exactamente el contenido completo que sea exacto, esto puede incluir los posibles espacios adelante o atras
        // expect(h1?.innerHTML).toBe("Daniel");

        // con el to.Contain() evalua si lo que se busca si se ecuentra en alguna parte de lo que se busca, si lo contiene
        expect(h1?.innerHTML).toContain('Daniel');
        expect(h3?.innerHTML).toContain('Sepulveda');

        // Se pueden poner varios expect() como se quiera, si uno falla no se ejecutan los de abajo
    });
});


// 2. Para validar elementos en el DOM:  a veces usar el screen()
// Si algun elemento cambia su valor a raiz de un evento (ej: onclic, onMouse) es recomendable esta forma con: screen
describe('MyAwesomeApp', () => {
    test('Should render firtName and lastName - screen - screen', () => {
        render(<MyAwesomeApp />);
        // screen.debug(); muestra en consola el elemento de forma mas legible
        // screen.debug();

        // const h1 = screen.getByRole('heading', {
        //     level: 1,
        // });

        const h1 = screen.getByTestId('first-name-title');
        // console.log(h1.innerHTML);
        expect(h1.innerHTML).toContain('Daniel');

    });
});


// Snapshop es una fotografía de elemento renderizado a un cierto momento, crea una carpeta __snapshots__ en el proyecto
describe('MyAwesomeApp', () => {
    test('Should match snapshop', () => {
        const { container } = render(<MyAwesomeApp />);
        expect(container).toMatchSnapshot();

    });
});

// no es tan recomendable hacer snapshots con screen porque para esto es necesario agregar en nuestro
// HTML los data-testid="", lo cual no son necesarios para el funcionamiento de la WEB
// a parte que si un elemento va a estar cambiando constantemento de forma dinamica no es recomendable
// hacer una validación de snapshots
describe('MyAwesomeApp', () => {
    test('Should match snapshop - screen', () => {
        render(<MyAwesomeApp />);
        expect(screen.getByTestId('div-app')).toMatchSnapshot();

    });
});
