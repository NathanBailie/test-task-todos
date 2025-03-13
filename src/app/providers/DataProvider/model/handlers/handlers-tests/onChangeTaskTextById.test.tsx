import { onChangeTaskTextById } from '../handlers';
import { testMockedData } from '../../lib/mockedData';
import { SetState, Task } from '@/shared/types/main';

describe('Tests for onChangeTaskTextById', () => {
    let setInitData: jest.Mock<SetState<Task[] | undefined>>;
    let initData: Task[];
    const taskId = '2';
    const newText = 'Updated Task Text';

    beforeEach(() => {
        setInitData = jest.fn();
        initData = testMockedData;
    });

    test('should update task text and toggle isOpen status for task with given id', () => {
        onChangeTaskTextById(taskId, newText, setInitData);

        expect(setInitData).toHaveBeenCalledWith(expect.any(Function));

        const updater = setInitData.mock.calls[0][0];
        const updatedData = updater(initData) as Task[];

        const updatedTask = updatedData.find(
            (task: Task) => task.id === taskId,
        );
        expect(updatedTask).toBeDefined();
        expect(updatedTask?.name).toBe(newText);
        expect(updatedTask?.isOpen).toBe(
            !initData.find(task => task.id === taskId)?.isOpen,
        );
    });

    test('should close all other tasks when a task text is updated', () => {
        onChangeTaskTextById(taskId, newText, setInitData);

        expect(setInitData).toHaveBeenCalledWith(expect.any(Function));

        const updater = setInitData.mock.calls[0][0];
        const updatedData = updater(initData) as Task[];

        updatedData.forEach(task => {
            if (task.id !== taskId) {
                expect(task.isOpen).toBe(false);
            }
        });
    });

    test('should not change task text or isOpen status if task with given id is not found', () => {
        const nonExistingTaskId = '999';
        onChangeTaskTextById(nonExistingTaskId, newText, setInitData);

        expect(setInitData).toHaveBeenCalledWith(expect.any(Function));

        const updater = setInitData.mock.calls[0][0];
        const updatedData = updater(initData) as Task[];

        expect(updatedData).toEqual(initData);
    });

    test('should handle undefined previous data', () => {
        setInitData.mockImplementation(updater => updater(undefined));

        onChangeTaskTextById(taskId, newText, setInitData);

        expect(setInitData).toHaveBeenCalledWith(expect.any(Function));

        const updater = setInitData.mock.calls[0][0];
        const updatedData = updater(undefined) as Task[] | undefined;

        expect(updatedData).toBeUndefined();
    });
});
