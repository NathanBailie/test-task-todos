import { MainTitle } from './MainTitle';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('MainTitle', () => {
    it('should render the title on the page', () => {
        render(<MainTitle />);

        expect(screen.getByText('todos')).toBeInTheDocument();
    });
});
