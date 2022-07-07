import { render, screen } from '@testing-library/react';
import CardList from './CardList';
import { CardModel } from '../models/CardModel';
import { mockApiResponse } from '../test-utils/api-response';

test('Renders and article element', () => {
    const cardList: CardModel[] = [];

    render(<CardList cardList={cardList} />);

    const articleElement = screen.getByRole('article');
    expect(articleElement).toBeInTheDocument();
});

test('Renders a link element for each provided CardModel', () => {

    const cardModelList = mockApiResponse.map(m => new CardModel(m)),
        expectedLength = cardModelList.length;

    render(<CardList cardList={cardModelList} />);

    const articleElement = screen.getAllByRole('link');
    expect(articleElement).toHaveLength(expectedLength);
});