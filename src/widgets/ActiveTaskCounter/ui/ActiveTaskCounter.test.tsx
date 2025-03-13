import { ActiveTaskCounter } from './ActiveTaskCounter';
import { render, screen } from '@testing-library/react';
import { useData } from '@/app/providers/DataProvider/ui/DataProvider';
import '@testing-library/jest-dom';

jest.mock('@/app/providers/DataProvider/ui/DataProvider', () => ({
    useData: jest.fn(),
}));

describe('Tests for ActiveTaskCounter', () => {
    it('should display the correct count of active tasks', () => {
        (useData as jest.Mock).mockReturnValue({
            initData: [{ isDone: false }, { isDone: false }, { isDone: true }],
        });

        render(<ActiveTaskCounter />);
        expect(screen.getByText('2 items left')).toBeInTheDocument();
    });

    it('should display "1 item left" for one active task', () => {
        (useData as jest.Mock).mockReturnValue({
            initData: [{ isDone: false }],
        });

        render(<ActiveTaskCounter />);
        expect(screen.getByText('1 item left')).toBeInTheDocument();
    });

    it('should display "0 items left" when no active tasks', () => {
        (useData as jest.Mock).mockReturnValue({
            initData: [{ isDone: true }, { isDone: true }],
        });

        render(<ActiveTaskCounter />);
        expect(screen.getByText('0 items left')).toBeInTheDocument();
    });

    it('should display the correct count for mixed task statuses', () => {
        (useData as jest.Mock).mockReturnValue({
            initData: [{ isDone: false }, { isDone: true }, { isDone: false }],
        });

        render(<ActiveTaskCounter />);
        expect(screen.getByText('2 items left')).toBeInTheDocument();
    });
});
