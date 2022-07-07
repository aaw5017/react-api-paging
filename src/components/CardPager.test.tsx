import { render, screen } from '@testing-library/react';
import CardPager from './CardPager';

const noop = function() {};

test('Renders article element', () => {
    render(<CardPager isDisabled={false} numPages={1} activeIndex={1} onUpdate={noop} />);

    const articleElement = screen.getByRole('article');
    expect(articleElement).toBeInTheDocument();
});

test('Renders buttons equal to number of pages', () => {
    const numPages = 20;

    render(<CardPager isDisabled={false} numPages={numPages} activeIndex={1} onUpdate={noop} />);

    const button = screen.getAllByRole('button');
    expect(button).toHaveLength(numPages);
});