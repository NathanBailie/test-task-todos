import cls from './activeTaskCounter.module.scss';
import { useData } from '@/app/providers/DataProvider/ui/DataProvider';

export const ActiveTaskCounter = () => {
    const { initData } = useData();
    const activeItems = initData?.filter(task => !task.isDone).length || 0;

    const itemText = activeItems === 1 ? 'item' : 'items';

    return (
        <span className={cls.activeTaskCounter}>
            {`${activeItems} ${itemText} left`}
        </span>
    );
};
