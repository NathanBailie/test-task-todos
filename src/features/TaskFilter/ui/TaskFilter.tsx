import cls from './taskFilter.module.scss';
import { onClearCompleted } from '@/app/providers/DataProvider';
import { useData } from '@/app/providers/DataProvider/ui/DataProvider';
import { ActiveTaskCounter } from '@/widgets/ActiveTaskCounter';
import { StatusFilters } from '@/widgets/StatusFilters';

export const TaskFilter = () => {
    const { setInitData } = useData();

    return (
        <div className={cls.taskFilter}>
            <ActiveTaskCounter />
            <StatusFilters />
            <input
                type="button"
                value="Clear Completed"
                className={cls.clearBtn}
                onClick={() => onClearCompleted(setInitData)}
            />
        </div>
    );
};
