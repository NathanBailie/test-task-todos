import { TaskTable } from './TaskTable';
import { render, screen } from '@testing-library/react';
import { useData } from '@/app/providers/DataProvider/ui/DataProvider';
import { onFilterTasks } from '@/app/providers/DataProvider';
import '@testing-library/jest-dom';
import { initTasks } from '@/app/providers/DataProvider/model/lib/mockedData';

jest.mock('@/app/providers/DataProvider/ui/DataProvider', () => ({
    useData: jest.fn(),
}));

jest.mock('@/entities/TaskItem', () => ({
    TaskItem: jest.fn(({ name }) => <div>{name}</div>),
}));

jest.mock('@/app/providers/DataProvider', () => ({
    onFilterTasks: jest.fn(),
}));

describe('TaskTable', () => {
    let mockOnFilterTasks: jest.Mock;

    beforeEach(() => {
        mockOnFilterTasks = jest.fn(data => data);
        (useData as jest.Mock).mockReturnValue({
            initData: initTasks,
            activeFilter: 'all',
        });
        (onFilterTasks as jest.Mock).mockImplementation(mockOnFilterTasks);
    });

    test('should render TaskItems with correct data', () => {
        render(<TaskTable />);

        expect(screen.getByText('task1')).toBeInTheDocument();
        expect(screen.getByText('task2')).toBeInTheDocument();
        expect(screen.getByText('task3')).toBeInTheDocument();
    });

    test('should call onFilterTasks with initData and activeFilter', () => {
        render(<TaskTable />);

        expect(mockOnFilterTasks).toHaveBeenCalledWith(initTasks, 'all');
    });

    test('should not render anything if initData is undefined', () => {
        (useData as jest.Mock).mockReturnValueOnce({
            initData: undefined,
            activeFilter: 'all',
            isError: false,
            errMessage: '',
        });

        const { container } = render(<TaskTable />);

        // Теперь проверяем, что компонент рендерит Spinner, если нет данных
        expect(container.querySelector('.loader')).toBeInTheDocument();
    });
});
