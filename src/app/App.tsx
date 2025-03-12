import { memo } from 'react';
import { MainTitle } from '@/entities/MainTitle';

const App = memo(() => (
    <div className="app">
        <MainTitle />
    </div>
));

export default App;
