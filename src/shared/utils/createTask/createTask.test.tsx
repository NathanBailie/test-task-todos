import { createTask } from './createTask';
import { type Task } from '@/shared/types/main';

describe('createTask', () => {
    test('Should create a task with correct name and default isDone and isOpen values', () => {
        const name = 'Test task';
        const task: Task = createTask(name);

        expect(task.name).toBe(name);
        expect(task.isDone).toBe(false);
        expect(task.isOpen).toBe(false);
        expect(task.id).toBeDefined();
    });

    test('Should create a task with correct name and isDone value', () => {
        const name = 'Completed task';
        const isDone = true;
        const task: Task = createTask(name, isDone);

        expect(task.name).toBe(name);
        expect(task.isDone).toBe(isDone);
        expect(task.isOpen).toBe(false);
        expect(task.id).toBeDefined();
    });

    test('Should create a task with a unique id', () => {
        const task1: Task = createTask('Task 1');
        const task2: Task = createTask('Task 2');

        expect(task1.id).not.toBe(task2.id);
    });

    test('Should create a task with empty name', () => {
        const task: Task = createTask('');

        expect(task.name).toBe('');
        expect(task.isDone).toBe(false);
        expect(task.isOpen).toBe(false);
        expect(task.id).toBeDefined();
    });
});
