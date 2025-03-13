import { StatusFilters } from './StatusFilters';
import { render, screen, fireEvent } from '@testing-library/react';
import { useData } from '@/app/providers/DataProvider/ui/DataProvider';
import { onChangeFilter } from '@/app/providers/DataProvider';
import '@testing-library/jest-dom';
import { initFilters } from '@/app/providers/DataProvider/model/lib/mockedData';

jest.mock('@/app/providers/DataProvider/ui/DataProvider', () => ({
    useData: jest.fn(),
}));

jest.mock('@/app/providers/DataProvider', () => ({
    onChangeFilter: jest.fn(),
}));

describe('Tests for StatusFilters', () => {
    let onChangeFilterMock: jest.Mock;
    let setFiltersMock: jest.Mock;
    let setActiveFilterMock: jest.Mock;

    beforeEach(() => {
        onChangeFilterMock = jest.fn();
        setFiltersMock = jest.fn();
        setActiveFilterMock = jest.fn();
        (useData as jest.Mock).mockReturnValue({
            filters: initFilters,
            setFilters: setFiltersMock,
            setActiveFilter: setActiveFilterMock,
        });
        (onChangeFilter as jest.Mock).mockImplementation(onChangeFilterMock);
    });

    it('should render all filters', () => {
        render(<StatusFilters />);

        expect(screen.getByDisplayValue('All')).toBeInTheDocument();
        expect(screen.getByDisplayValue('Active')).toBeInTheDocument();
        expect(screen.getByDisplayValue('Completed')).toBeInTheDocument();
    });

    it('should apply active class to the active filter', () => {
        render(<StatusFilters />);

        expect(screen.getByDisplayValue('All')).toHaveClass(
            'statusFilter_active',
        );
        expect(screen.getByDisplayValue('Active')).not.toHaveClass(
            'statusFilter_active',
        );
        expect(screen.getByDisplayValue('Completed')).not.toHaveClass(
            'statusFilter_active',
        );
    });

    it('should call onChangeFilter with correct arguments on filter click', () => {
        render(<StatusFilters />);

        fireEvent.click(screen.getByDisplayValue('Active'));
        expect(onChangeFilterMock).toHaveBeenCalledWith(
            expect.any(String),
            'Active',
            setFiltersMock,
            setActiveFilterMock,
        );
    });
});
