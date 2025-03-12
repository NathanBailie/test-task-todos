import cls from './activeTaskCounter.module.scss';
import { useData } from '@/app/providers/DataProvider/ui/DataProvider';

export const ActiveTaskCounter = () => {
    const { initData } = useData();
    const activeItems = initData?.filter(task => !task.isDone).length || 0;

    return (
        <span className={cls.activeTaskCounter}>
            {`${activeItems} item${activeItems > 1 ? 's' : ''} left`}
        </span>
    );
};
