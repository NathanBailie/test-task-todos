import { Text, TextProps } from './Text';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('tests for Text', () => {
    const mockOnClickCallback = jest.fn();

    const renderText = (props: Partial<TextProps> = {}) => {
        render(
            <Text
                id="1"
                text="Test Text"
                isDone={false}
                onClickCallback={mockOnClickCallback}
                {...props}
            />,
        );
    };

    beforeEach(() => {
        mockOnClickCallback.mockClear();
    });

    it('should render text with correct content', () => {
        renderText();
        expect(screen.getByText('Test Text')).toBeInTheDocument();
    });

    it('should apply done class when isDone is true', () => {
        renderText({ isDone: true });
        expect(screen.getByText('Test Text')).toHaveClass('text_done');
    });

    it('should not apply done class when isDone is false', () => {
        renderText();
        expect(screen.getByText('Test Text')).not.toHaveClass('text_done');
    });

    it('should call onClickCallback on click', () => {
        renderText();
        fireEvent.click(screen.getByText('Test Text'));
        expect(mockOnClickCallback).toHaveBeenCalledTimes(1);
    });

    it('should render with provided id', () => {
        renderText({ id: 'custom-id' });
        expect(screen.getByText('Test Text')).toHaveAttribute(
            'id',
            'custom-id',
        );
    });
});
