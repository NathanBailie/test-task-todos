import { memo } from 'react';
import { MainTitle } from '@/entities/MainTitle';
import { TaskTable } from '@/features/TaskTable';
import { TaskAdder } from '@/features/TaskAdder';
import { TaskFilter } from '@/features/TaskFilter';

const App = memo(() => (
    <div className="app">
        <MainTitle />
        <TaskAdder />
        <TaskTable />
        <TaskFilter />
    </div>
));

export default App;
