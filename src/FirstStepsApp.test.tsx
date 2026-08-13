import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";
import { ItemCounter } from "./shopping-cart/ItemCounter";

const mockItemCounter = vi.fn((_props: unknown) => {
    return <div data-testid="itemCounter" />;
});


vi.mock('./shopping-cart/ItemCounter', () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props),
}));

// vi.mock('./shopping-cart/ItemCounter', () => ({
//     Itemconuter: (props: unknown) => mockItemCounter(props),
// }));

// Crear un mock: una simulación del componente sin crear el componente
// vi.mock('./shopping-cart/ItemCounter', () => ({
//     ItemCounter: (props: unknown) =>
//         <div
//             data-testid="itemCounter"
//             name={props.name}
//             quantity={props.quantity}
//         />
// }));

describe('FirstStepsApp', () => {

    //Esta función se ejecuta despues de cada test();
    afterEach( () =>{
        vi.clearAllMocks();
    });

    test('should match snapshop', () => {
        const { container } = render(<FirstStepsApp />);
        expect(container).toMatchSnapshot();
        // screen.debug();
    });

    test('should render the correct number of ItemCounter compoment', () => {
        render(<FirstStepsApp />);
        const itemCounters = screen.getAllByTestId('itemCounter');
        expect(itemCounters.length).toBe(4);
        // screen.debug();
    })

    test('should render ItemCounter with correct props', () => {
        render(<FirstStepsApp/>);
        // Para comprobar que sean 4 elementos hijos
        expect(mockItemCounter).toHaveBeenCalledTimes(4);
        // para confirmar que de cada elemento hijo las props seas las que deben de ser
        expect(mockItemCounter).toHaveBeenCalledWith({ 
            name: 'Nintnedo Switch 2', 
            quantity: 1 
        });
        expect(mockItemCounter).toHaveBeenCalledWith({ 
            name: 'Pro controller', 
            quantity: 2 
        });
        expect(mockItemCounter).toHaveBeenCalledWith({ 
            name: 'Super Smash Bross', 
            quantity: 5 
        });
        expect(mockItemCounter).toHaveBeenCalledWith({ 
            name: 'Super Mario Wonder', 
            quantity: 3 
        });
    });

})