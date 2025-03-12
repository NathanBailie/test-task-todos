import { memo } from 'react';
// import { MainTitle } from '@/entities/MainTitle';
import { TaskTable } from '@/features/TaskTable';

const App = memo(() => (
    <div className="app">
        {/* <MainTitle /> */}
        <TaskTable />
    </div>
));

export default App;
