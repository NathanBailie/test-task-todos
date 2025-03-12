import cls from './statusFilters.module.scss';
import { useData } from '@/app/providers/DataProvider/ui/DataProvider';
import { classNames } from '@/shared/lib/classNames/classNames';

export const StatusFilters = () => {
    const { filters, onChangeFilter } = useData();

    const content = filters.map(({ value, id, active }) => (
        <input
            key={id}
            type="button"
            value={value}
            onClick={() => onChangeFilter(id, value)}
            className={classNames(
                cls.statusFilter,
                { [cls.statusFilter_active]: active },
                ['button'],
            )}
        />
    ));

    return <div className={cls.statusFilters}>{content}</div>;
};
