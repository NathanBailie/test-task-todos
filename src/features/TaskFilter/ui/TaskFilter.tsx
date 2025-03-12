import cls from './taskFilter.module.scss';
import { useData } from '@/app/providers/DataProvider/ui/DataProvider';
import { StatusFilters } from '@/widgets/StatusFilters';

export const TaskFilter = () => {
    const { initData, onClearCompleted } = useData();
    const activeItems =
        initData?.reduce((sum, task) => (task.isDone ? sum : sum + 1), 0) || 0;
    const pluralEnding = activeItems > 1 ? 's' : '';

    return (
        <div className={cls.taskFilter}>
            <span>{`${activeItems} item${pluralEnding} left`}</span>
            <StatusFilters />
            <input
                type="button"
                value="Clear Completed"
                className={cls.clearBtn}
                onClick={() => onClearCompleted()}
            />
        </div>
    );
};
