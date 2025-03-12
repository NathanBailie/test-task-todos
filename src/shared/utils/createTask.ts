import { Task } from '../types/task';
import uuid from 'react-uuid';

export const createTask = (name: string, isDone = false): Task => ({
    name,
    id: uuid(),
    isDone,
});
