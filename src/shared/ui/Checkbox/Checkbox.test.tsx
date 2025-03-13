import { Checkbox } from './Checkbox';
import { render, screen, fireEvent } from '@testing-library/react';
import { useData } from '@/app/providers/DataProvider/ui/DataProvider';
import { onChangeTaskStatus } from '@/app/providers/DataProvider';
import '@testing-library/jest-dom';

jest.mock('@/app/providers/DataProvider/ui/DataProvider', () => ({
    useData: jest.fn(),
}));

jest.mock('@/app/providers/DataProvider', () => ({
    onChangeTaskStatus: jest.fn(),
}));

describe('Tests for Checkbox', () => {
    let onChangeTaskStatusMock: jest.Mock;
    let setInitDataMock: jest.Mock;

    beforeEach(() => {
        onChangeTaskStatusMock = jest.fn();
        setInitDataMock = jest.fn();
        (useData as jest.Mock).mockReturnValue({
            setInitData: setInitDataMock,
        });
        (onChangeTaskStatus as jest.Mock).mockImplementation(
            onChangeTaskStatusMock,
        );
    });

    it('should render checked checkbox when isDone is true', () => {
        render(<Checkbox isDone id="1" />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeChecked();
    });

    it('should render unchecked checkbox when isDone is false', () => {
        render(<Checkbox isDone={false} id="2" />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).not.toBeChecked();
    });

    it('should apply active class when isDone is true', () => {
        const { container } = render(<Checkbox isDone id="1" />);
        expect(container.firstChild).toHaveClass('checkbox_active');
    });

    it('should not apply active class when isDone is false', () => {
        const { container } = render(<Checkbox isDone={false} id="1" />);
        expect(container.firstChild).not.toHaveClass('checkbox_active');
    });

    it('should call onChangeTaskStatus with correct id and setInitData on click', () => {
        render(<Checkbox isDone={false} id="1" />);
        const checkboxContainer = screen.getByRole('checkbox').closest('div');
        fireEvent.click(checkboxContainer!);
        expect(onChangeTaskStatusMock).toHaveBeenCalledWith(
            '1',
            setInitDataMock,
        );
    });

    it('should have correct title based on isDone', () => {
        render(<Checkbox isDone id="1" />);
        expect(screen.getByTitle('Check as active')).toBeInTheDocument();

        render(<Checkbox isDone={false} id="1" />);
        expect(screen.getByTitle('Check as done')).toBeInTheDocument();
    });
});
