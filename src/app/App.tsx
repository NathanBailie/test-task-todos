import { memo } from 'react';
import { MainTitle } from '@/entities/MainTitle';
import { TaskTable } from '@/features/TaskTable';
import { TaskAdder } from '@/features/TaskAdder';

const App = memo(() => (
    <div className="app">
        <MainTitle />
        <TaskAdder />
        <TaskTable />
    </div>
));

export default App;
