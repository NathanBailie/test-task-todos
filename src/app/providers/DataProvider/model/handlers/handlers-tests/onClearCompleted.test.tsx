import { onClearCompleted } from '../handlers';
import { testMockedData } from '../../lib/mockedData';
import { SetState, Task } from '@/shared/types/main';

describe('Tests for onClearCompleted', () => {
    let setInitData: jest.Mock<SetState<Task[] | undefined>>;
    let initData: Task[];

    beforeEach(() => {
        setInitData = jest.fn();
        initData = testMockedData;
    });

    test('should remove completed tasks from the list', () => {
        onClearCompleted(setInitData);

        expect(setInitData).toHaveBeenCalledWith(expect.any(Function));

        const updater = setInitData.mock.calls[0][0];
        const updatedData = updater(initData) as Task[];

        const completedTasks = initData.filter(task => task.isDone);
        const activeTasks = initData.filter(task => !task.isDone);

        expect(updatedData).toEqual(activeTasks);
        expect(updatedData).not.toEqual(initData);
        expect(updatedData.length).toBe(
            initData.length - completedTasks.length,
        );
    });

    test('should not change the list if there are no completed tasks', () => {
        const allActiveData = initData.map(task => ({
            ...task,
            isDone: false,
        }));
        setInitData.mockImplementation(updater => updater(allActiveData));

        onClearCompleted(setInitData);

        expect(setInitData).toHaveBeenCalledWith(expect.any(Function));

        const updater = setInitData.mock.calls[0][0];
        const updatedData = updater(allActiveData) as Task[];

        expect(updatedData).toEqual(allActiveData);
    });

    test('should handle undefined previous data', () => {
        setInitData.mockImplementation(updater => updater(undefined));

        onClearCompleted(setInitData);

        expect(setInitData).toHaveBeenCalledWith(expect.any(Function));

        const updater = setInitData.mock.calls[0][0];
        const updatedData = updater(undefined) as Task[] | undefined;

        expect(updatedData).toBeUndefined();
    });
});
