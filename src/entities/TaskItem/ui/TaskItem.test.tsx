import { TaskItem } from './TaskItem';
import { render, screen, fireEvent } from '@testing-library/react';
import { useData } from '@/app/providers/DataProvider/ui/DataProvider';
import '@testing-library/jest-dom';

jest.mock('@/app/providers/DataProvider/ui/DataProvider', () => ({
    useData: jest.fn(),
}));

describe('Tests for TaskItem', () => {
    const onChangeIsOpenStatusMock = jest.fn();
    const onChangeTaskTextByIdMock = jest.fn();

    beforeEach(() => {
        (useData as jest.Mock).mockReturnValue({
            onChangeIsOpenStatus: onChangeIsOpenStatusMock,
            onChangeTaskTextById: onChangeTaskTextByIdMock,
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

    test('should call onChangeIsOpenStatus on task text click', () => {
        render(<TaskItem {...task} />);
        fireEvent.click(screen.getByText('Test Task'));
        expect(onChangeIsOpenStatusMock).toHaveBeenCalled();
    });

    test('should call onChangeTaskTextById on input blur', () => {
        const taskWithOpenState = { ...task, isOpen: true };
        render(<TaskItem {...taskWithOpenState} />);
        const input = screen.getByRole('textbox');
        fireEvent.blur(input);
        expect(onChangeTaskTextByIdMock).toHaveBeenCalledWith('1', 'Test Task');
    });
});
