import { render, screen } from '@testing-library/react';
import Card from './Card';
import { CardModel } from '../models/CardModel';
import { ApiResponse } from '../models/ApiResponse';

const mockResponse: ApiResponse = {
    breeds: [
        {
            id: 987564,
            name: "Akbash Dog",
            bred_for: "Sheep guarding",
            breed_group: "Working",
            life_span: "10 - 12 years",
            temperament: "Loyal, Independent, Intelligent, Brave",
            origin: "",
        }
    ],
    id: "SyfsC19NQ",
    url: "https://cdn2.thedogapi.com/images/SyfsC19NQ_150x150.jpg",
};

test('Renders an anchor element', () => {
    const data = new CardModel(mockResponse);

    render(<Card data={data} />);
    const anchorElement = screen.getByRole('link');
    expect(anchorElement).toBeInTheDocument();
});

test('Renders a button element', () => {
    const data = new CardModel(mockResponse);

    render(<Card data={data} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
});