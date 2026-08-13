import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";
import { fireEvent, render, screen } from "@testing-library/react";


describe('ItemCounter', () => {
    // Prueba para saber si se ha renderizado el elemento en base al nombre
    test('Should render whith default values', () => {
        const name = 'Nintendo';
        render(<ItemCounter name={name} />);
        // screen.debug();
        expect(screen.getByText(name)).toBeDefined();
        expect(screen.getByText(name)).not.toBeNull();
    });

    // Prueba para saber si se ha renderizado el elemento en base a la cantidad
    test('Should render whith custome quantity', () => {
        const name = 'Nintendo';
        const quantity = 10;

        render(<ItemCounter name={name} quantity={quantity} />);
        // screen.debug();

        expect(screen.getByText(quantity)).toBeDefined();
    });

    // Pruebas al lanzar eventos
    test('should increase count when +1 button is press', () => {
        render(<ItemCounter name={'test item'} quantity={1} />);
        const [buttonAdd] = screen.getAllByRole('button');
        // console.log(buttonAdd.innerHTML);
        fireEvent.click(buttonAdd);
        expect(screen.getByText('2')).toBeDefined();
    });

    test('should decrease count when -1 button is press', () => {
        const quantity = 5;
        render(<ItemCounter name={'test item'} quantity={quantity} />);
        const [, buttonSubstract] = screen.getAllByRole('button');
        fireEvent.click(buttonSubstract);
        expect(screen.getByText('4')).toBeDefined();
    });

    test('should not decrease count when -1 button is press and quantity is 1', () => {
        const quantity = 1;
        render(<ItemCounter name={'test item'} quantity={quantity} />);
        const [, buttonSubstract] = screen.getAllByRole('button');
        fireEvent.click(buttonSubstract);
        expect(screen.getByText('1')).toBeDefined();
    });

    // Pruebas de Estilos
    test('should change to red when count is 1', () => {
        const quantity = 1;
        const name = 'test item';
        render(<ItemCounter name={name} quantity={quantity} />);
        const itemText = screen.getByText(name);
        expect(itemText.style.color).toBe('red');
    });

    test('should change to black when count is greater than 1', () => {
        const quantity = 2;
        const name = 'test item';
        render(<ItemCounter name={name} quantity={quantity} />);
        const itemText = screen.getByText(name);
        expect(itemText.style.color).toBe('black');
    });

});
