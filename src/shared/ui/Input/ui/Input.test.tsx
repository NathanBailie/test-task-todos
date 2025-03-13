import { Input, InputProps } from './Input';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Task } from '@/shared/types/main';

describe('Tests for Input', () => {
    const mockOnBlurCallback = jest.fn();
    const mockSetInitData = jest.fn<
        React.Dispatch<React.SetStateAction<Task[] | undefined>>,
        [React.SetStateAction<Task[] | undefined>]
    >();

    const renderInput = (props: Partial<InputProps> = {}) => {
        render(
            <Input
                id="1"
                value="Initial Value"
                onBLurCallback={mockOnBlurCallback}
                setInitData={mockSetInitData}
                {...props}
            />,
        );
    };

    beforeEach(() => {
        mockOnBlurCallback.mockClear();
        mockSetInitData.mockClear();
    });

    it('should render input with initial value and focus', () => {
        renderInput();
        const input = screen.getByRole('textbox');
        expect(input).toHaveValue('Initial Value');
        expect(input).toHaveFocus();
    });

    it('should update value on change', () => {
        renderInput();
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'New Value' } });
        expect(input).toHaveValue('New Value');
    });

    it('should call onBLurCallback with correct arguments on blur', () => {
        renderInput();
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'Updated Value' } });
        fireEvent.blur(input);
        expect(mockOnBlurCallback).toHaveBeenCalledWith(
            '1',
            'Updated Value',
            mockSetInitData,
        );
    });

    it('should call onBLurCallback with correct arguments on Enter key press', () => {
        renderInput();
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'Updated Value' } });
        fireEvent.keyDown(input, { key: 'Enter' });
        expect(mockOnBlurCallback).toHaveBeenCalledWith(
            '1',
            'Updated Value',
            mockSetInitData,
        );
    });

    it('should render input with specified type', () => {
        renderInput({ type: 'number' });
        const input = screen.getByRole('spinbutton');
        expect(input).toBeInTheDocument();
    });

    it('should update state with initial value on mount', () => {
        renderInput();
        const input = screen.getByRole('textbox');
        expect(input).toHaveValue('Initial Value');
    });
});
