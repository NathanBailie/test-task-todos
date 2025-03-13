import { onChangeIsOpenStatus } from '../handlers';
import { testMockedData } from '../../lib/mockedData';
import { SetState, Task } from '@/shared/types/main';

describe('Tests for onChangeIsOpenStatus', () => {
    let setInitData: jest.Mock<SetState<Task[] | undefined>>;
    let initData: Task[];

    beforeEach(() => {
        setInitData = jest.fn();
        initData = testMockedData;
    });

    test('should toggle isOpen status for task with id "2"', () => {
        onChangeIsOpenStatus('2', setInitData);

        expect(setInitData).toHaveBeenCalledWith(expect.any(Function));

        const updater = setInitData.mock.calls[0][0];
        const updatedData = updater(initData) as Task[];
        const updatedTask = updatedData.find((task: Task) => task.id === '2');

        expect(updatedTask).toBeDefined();
        expect(updatedTask?.isOpen).toBe(
            !initData.find(task => task.id === '2')?.isOpen,
        );
    });

    test('should close all other tasks when a task is opened', () => {
        const taskIdToOpen = '2';
        onChangeIsOpenStatus(taskIdToOpen, setInitData);

        expect(setInitData).toHaveBeenCalledWith(expect.any(Function));

        const updater = setInitData.mock.calls[0][0];
        const updatedData = updater(initData) as Task[];

        updatedData.forEach(task => {
            if (task.id !== taskIdToOpen) {
                expect(task.isOpen).toBe(false);
            }
        });
    });

    test('should not change isOpen status if task with given id is not found', () => {
        const nonExistingTaskId = '999';
        onChangeIsOpenStatus(nonExistingTaskId, setInitData);

        expect(setInitData).toHaveBeenCalledWith(expect.any(Function));

        const updater = setInitData.mock.calls[0][0];
        const updatedData = updater(initData) as Task[];

        expect(updatedData).toEqual(initData);
    });

    test('should handle undefined previous data', () => {
        setInitData.mockImplementation(updater => updater(undefined));

        onChangeIsOpenStatus('2', setInitData);

        expect(setInitData).toHaveBeenCalledWith(expect.any(Function));

        const updater = setInitData.mock.calls[0][0];
        const updatedData = updater(undefined) as Task[] | undefined;

        expect(updatedData).toBeUndefined();
    });
});
