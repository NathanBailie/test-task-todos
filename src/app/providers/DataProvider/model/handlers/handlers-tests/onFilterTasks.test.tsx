import { onFilterTasks } from '../handlers';
import { testMockedData } from '../../lib/mockedData';
import { Task } from '@/shared/types/main';

describe('Tests for onFilterTasks', () => {
    let initData: Task[];

    beforeEach(() => {
        initData = testMockedData;
    });

    test('should return all tasks when activeFilter is "All"', () => {
        const filteredTasks = onFilterTasks(initData, 'All');
        expect(filteredTasks).toEqual(initData);
    });

    test('should return only completed tasks when activeFilter is "Completed"', () => {
        const filteredTasks = onFilterTasks(initData, 'Completed');
        const expectedCompletedTasks = initData.filter(task => task.isDone);
        expect(filteredTasks).toEqual(expectedCompletedTasks);
    });

    test('should return only active tasks when activeFilter is "Active"', () => {
        const filteredTasks = onFilterTasks(initData, 'Active');
        const expectedActiveTasks = initData.filter(task => !task.isDone);
        expect(filteredTasks).toEqual(expectedActiveTasks);
    });

    test('should return an empty array if no tasks match the "Completed" filter', () => {
        const emptyData: Task[] = [
            { id: '1', name: 'Task 1', isDone: false, isOpen: false },
        ];
        const filteredTasks = onFilterTasks(emptyData, 'Completed');
        expect(filteredTasks).toEqual([]);
    });

    test('should return an empty array if no tasks match the "Active" filter', () => {
        const emptyData: Task[] = [
            { id: '1', name: 'Task 1', isDone: true, isOpen: false },
        ];
        const filteredTasks = onFilterTasks(emptyData, 'Active');
        expect(filteredTasks).toEqual([]);
    });
});
