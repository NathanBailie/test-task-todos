import cls from './taskTable.module.scss';
import { useState } from 'react';
import { TaskItem } from '@/entities/TaskItem';
import { Task } from '@/shared/types/task';
import { createTask } from '@/shared/utils/createTask';

const initialTasks: Task[] = [
    createTask('task1', true),
    createTask('task2', true),
    createTask('task3', true),
];

export const TaskTable = () => {
    const [tasks, setTasks] = useState<Task[]>(initialTasks);

    const onChangeTaskStatus = (id: string) =>
        setTasks(
            tasks.map(task =>
                task.id === id ? { ...task, isDone: !task.isDone } : task,
            ),
        );

    return (
        <div className={cls.taskTable}>
            {tasks.map(({ name, id, isDone }) => (
                <TaskItem
                    key={id}
                    name={name}
                    id={id}
                    isDone={isDone}
                    onChangeTaskStatus={onChangeTaskStatus}
                />
            ))}
        </div>
    );
};
