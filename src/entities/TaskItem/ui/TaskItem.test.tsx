import { TaskItem } from './TaskItem';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useData } from '@/app/providers/DataProvider/ui/DataProvider';

jest.mock('@/app/providers/DataProvider/ui/DataProvider', () => ({
    useData: jest.fn(),
}));

describe('Tests for TaskItem', () => {
    const setInitDataMock = jest.fn();

    beforeEach(() => {
        (useData as jest.Mock).mockReturnValue({
            setInitData: setInitDataMock,
        });
    });

    const task = {
        id: '1',
        name: 'Test Task',
        isDone: false,
        isOpen: false,
    };

    test('should render with correct task data', () => {
        render(<TaskItem {...task} />);
        expect(screen.getByText('Test Task')).toBeInTheDocument();
    });

    test('should display checkbox with correct checked state', () => {
        const taskWithDoneState = { ...task, isDone: true };
        render(<TaskItem {...taskWithDoneState} />);
        expect(screen.getByRole('checkbox')).toBeChecked();
    });

    test('should display task text when isOpen is false', () => {
        render(<TaskItem {...task} />);
        expect(screen.getByText('Test Task')).toBeInTheDocument();
        expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
    });

    test('should display input when isOpen is true', () => {
        const taskWithOpenState = { ...task, isOpen: true };
        render(<TaskItem {...taskWithOpenState} />);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
});
