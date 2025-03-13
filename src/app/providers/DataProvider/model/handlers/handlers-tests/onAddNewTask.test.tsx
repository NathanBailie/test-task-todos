import { onAddNewTask } from '../handlers';
import { testMockedData } from '../../lib/mockedData';
import { SetState, Task } from '@/shared/types/main';

describe('Tests for onAddNewTask', () => {
    let setInitData: jest.Mock<SetState<Task[] | undefined>>;
    let initData: Task[];
    const newTaskName = 'New Task';

    beforeEach(() => {
        setInitData = jest.fn();
        initData = testMockedData;
    });

    test('should add a new task with the provided name', () => {
        onAddNewTask(newTaskName, setInitData);

        expect(setInitData).toHaveBeenCalledWith(expect.any(Function));

        const updater = setInitData.mock.calls[0][0];
        const updatedData = updater(initData) as Task[];

        expect(updatedData).toHaveLength(initData.length + 1);

        const newTask = updatedData.find(task => task.name === newTaskName);
        expect(newTask).toBeDefined();
        expect(newTask?.name).toBe(newTaskName);
        expect(newTask?.isDone).toBe(false);
        expect(newTask?.isOpen).toBe(false);
        expect(newTask?.id).toBeDefined();
    });
});
