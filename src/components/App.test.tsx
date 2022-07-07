import { render, screen, cleanup, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';
import { ApiService } from '../services/ApiService';
import { mockApiResponse } from '../test-utils/api-response';

let apiSpy: any;

beforeEach(() => {
    apiSpy = jest.spyOn(ApiService, 'makeRequest');
    apiSpy.mockResolvedValue(mockApiResponse);
});

afterEach(() => { cleanup(); });

test('Presents loading text when not ready', async () => {
    render(<App />);

    await waitForElementToBeRemoved(() => {
        return screen.queryByText(/Loading\.\.\./i);
    });

});

test('Calls makeRequest upon load', async () => {
    render(<App />);

    await waitFor(() => {
        expect(apiSpy).toHaveBeenCalledTimes(1);
    });

    await waitForElementToBeRemoved(() => {
        return screen.queryByText(/Loading\.\.\./i);
    });
});

test('Renders one heaader element', async () => {
    render(<App />);

    await waitForElementToBeRemoved(() => {
        return screen.queryByText(/Loading\.\.\./i);
    });
    await waitFor(() => {
        expect(screen.getAllByRole('banner')).toHaveLength(1);
    });
});

test('Renders two nav elements', async () => {
    render(<App />);

    await waitForElementToBeRemoved(() => {
        return screen.queryByText(/Loading\.\.\./i);
    });
    await waitFor(() => {
        expect(screen.getAllByRole('navigation')).toHaveLength(2);
    });
});

test('Renders one main element', async () => {
    render(<App />);

    await waitForElementToBeRemoved(() => {
        return screen.queryByText(/Loading\.\.\./i);
    });
    await waitFor(() => {
        expect(screen.getAllByRole('main')).toHaveLength(1);
    });
});
