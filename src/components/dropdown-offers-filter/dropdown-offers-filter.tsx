import {useAppDispatch, useAppSelector} from '../../hooks/redux.ts';
import {SortingOrder} from '../../types/sorting-order.ts';
import DropdownOffersFilterOption from './dropdown-offers-filter-option.tsx';
import {useEffect, useState} from 'react';
import {setOffers} from '../../store/actions.ts';
import {SortComparers} from '../../const.ts';
import {fetchOffersAction} from '../../store/api-actions.ts';

function DropdownOffersFilter() {
  const dispatch = useAppDispatch();
  const offers = useAppSelector((state) => state.offers);
  const currentSortingOrder = useAppSelector((state) => state.sortingOrder);
  const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false);

  const handleSortingOnClick = () => setDropdownIsOpen((value) => !value);

  useEffect(() => {
    if (currentSortingOrder === SortingOrder.popular && offers.length !== 0) {
      dispatch(fetchOffersAction());
    } else if (offers.length !== 0) {
      dispatch(setOffers(offers.toSorted(SortComparers[currentSortingOrder])));
    }
  }, [currentSortingOrder]);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSortingOnClick}>
        {currentSortingOrder}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {dropdownIsOpen &&
        <ul className="places__options places__options--custom places__options--opened">
          {Object.values(SortingOrder).map((value) => (
            <DropdownOffersFilterOption
              dropdownStateSetter={setDropdownIsOpen}
              sortingOption={value}
              isActive={currentSortingOrder === value}
              key={value}
            />
          ))}
        </ul>}
    </form>
  );
}

export default DropdownOffersFilter;
