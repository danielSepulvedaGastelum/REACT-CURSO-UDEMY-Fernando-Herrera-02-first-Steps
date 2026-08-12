import { describe, test } from "vitest";
import { render } from '@testing-library/react'
import { MyAwesomeApp }  from './MyAwesomeApp'


// para poder hacer las pruebas de componentes react como .tsx o con .jsx es necesario instalar la librería Testing Library

describe('MyAwesomeApp', () =>{
    test('Should render firtName and lastName', () =>{

        const { container } = render(<MyAwesomeApp />) 

        console.log(container);
        
    });
});