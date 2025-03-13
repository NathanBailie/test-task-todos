import { TaskFilter } from './TaskFilter';
import { render, screen, fireEvent } from '@testing-library/react';
import { useData } from '@/app/providers/DataProvider/ui/DataProvider';
import '@testing-library/jest-dom';

jest.mock('@/app/providers/DataProvider/ui/DataProvider', () => ({
    useData: jest.fn(),
}));

jest.mock('@/widgets/ActiveTaskCounter', () => ({
    ActiveTaskCounter: jest.fn(() => <div>Active Task Counter</div>),
}));

jest.mock('@/widgets/StatusFilters', () => ({
    StatusFilters: jest.fn(() => <div>Status Filters</div>),
}));

describe('TaskFilter', () => {
    const onClearCompletedMock = jest.fn();

    beforeEach(() => {
        (useData as jest.Mock).mockReturnValue({
            onClearCompleted: onClearCompletedMock,
        });
        render(<TaskFilter />);
    });

    test('should render ActiveTaskCounter and StatusFilters', () => {
        expect(screen.getByText('Active Task Counter')).toBeInTheDocument();
        expect(screen.getByText('Status Filters')).toBeInTheDocument();
    });

    test('should call onClearCompleted when "Clear Completed" button is clicked', () => {
        const clearButton = screen.getByRole('button', {
            name: /clear completed/i,
        });
        fireEvent.click(clearButton);
        expect(onClearCompletedMock).toHaveBeenCalledTimes(1);
    });

    test('should render the "Clear Completed" button', () => {
        expect(
            screen.getByRole('button', { name: /clear completed/i }),
        ).toBeInTheDocument();
    });
});
