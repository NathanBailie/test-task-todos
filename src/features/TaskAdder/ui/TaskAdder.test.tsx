import { TaskAdder } from './TaskAdder';
import { render, screen, fireEvent } from '@testing-library/react';
import { useData } from '@/app/providers/DataProvider/ui/DataProvider';
import { onAddNewTask } from '@/app/providers/DataProvider';
import '@testing-library/jest-dom';

jest.mock('@/app/providers/DataProvider/ui/DataProvider', () => ({
    useData: jest.fn(),
}));

jest.mock('@/app/providers/DataProvider', () => ({
    onAddNewTask: jest.fn(),
}));

describe('Tests for TaskAdder', () => {
    let onAddNewTaskMock: jest.Mock;
    let setInitDataMock: jest.Mock;

    beforeEach(() => {
        onAddNewTaskMock = jest.fn();
        setInitDataMock = jest.fn();
        (useData as jest.Mock).mockReturnValue({
            setInitData: setInitDataMock,
        });
        (onAddNewTask as jest.Mock).mockImplementation(onAddNewTaskMock);
    });

    test('should render input and button', () => {
        render(<TaskAdder />);

        expect(
            screen.getByPlaceholderText('What needs to be done?'),
        ).toBeInTheDocument();
        expect(screen.getByTitle('Add new task')).toBeInTheDocument();
    });

    test('should call onAddNewTask on button click with input value', () => {
        render(<TaskAdder />);

        const input = screen.getByPlaceholderText('What needs to be done?');
        const button = screen.getByTitle('Add new task');

        fireEvent.change(input, { target: { value: 'New Task' } });
        fireEvent.click(button);

        expect(onAddNewTaskMock).toHaveBeenCalledWith(
            'New Task',
            setInitDataMock,
        );
        expect(input).toHaveValue('');
    });

    test('should call onAddNewTask on Enter key press with input value', () => {
        render(<TaskAdder />);

        const input = screen.getByPlaceholderText('What needs to be done?');

        fireEvent.change(input, { target: { value: 'New Task' } });
        fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 });

        expect(onAddNewTaskMock).toHaveBeenCalledWith(
            'New Task',
            setInitDataMock,
        );
        expect(input).toHaveValue('');
    });

    test('should not call onAddNewTask with empty or whitespace input', () => {
        render(<TaskAdder />);

        const input = screen.getByPlaceholderText('What needs to be done?');
        const button = screen.getByTitle('Add new task');

        fireEvent.change(input, { target: { value: ' ' } });
        fireEvent.click(button);

        expect(onAddNewTaskMock).not.toHaveBeenCalled();
    });
});
