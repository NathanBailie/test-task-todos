import { onChangeFilter } from '../handlers';
import { testMockedFilters } from '../../lib/mockedData';
import { SetState, Filter, FilterNames } from '@/shared/types/main';

describe('Tests for onChangeFilter', () => {
    let setFilters: jest.Mock<SetState<Filter[]>>;
    let setActiveFilter: jest.Mock<SetState<FilterNames>>;
    let initFilters: Filter[];
    const filterId = '2';
    const filterName: FilterNames = 'Active';

    beforeEach(() => {
        setFilters = jest.fn();
        setActiveFilter = jest.fn();
        initFilters = testMockedFilters;
    });

    test('should update filters and active filter correctly', () => {
        onChangeFilter(filterId, filterName, setFilters, setActiveFilter);

        expect(setFilters).toHaveBeenCalledWith(expect.any(Function));
        expect(setActiveFilter).toHaveBeenCalledWith(filterName);

        const filtersUpdater = setFilters.mock.calls[0][0];
        const updatedFilters = filtersUpdater(initFilters);

        expect(updatedFilters).toBeDefined();

        (updatedFilters as Filter[]).forEach((filter: Filter) => {
            if (filter.id === filterId) {
                expect(filter.active).toBe(true);
            } else {
                expect(filter.active).toBe(false);
            }
        });
    });
});
