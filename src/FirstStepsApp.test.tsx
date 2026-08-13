import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";
import { ItemCounter } from "./shopping-cart/ItemCounter";

const mockItemCounter = vi.fn((props: unknown) => {
    return <div data-testid="itemCounter" />;
});


vi.mock('./shopping-cart/ItemCounter', () => ({
    ItenCounter: (props: unknown) => mockItemCounter(props),
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

    test('should match snapshop', () => {
        const { container } = render(<FirstStepsApp />);
        expect(container).toMatchSnapshot();
        // screen.debug();
    });

    test('should render the correct number of ItemCounter compoment', () => {
        render(<FirstStepsApp />);

        const itemCounters = screen.getAllByTestId('itemCounter');

        expect(itemCounters.length).toBe(4);


        screen.debug();
    })

})