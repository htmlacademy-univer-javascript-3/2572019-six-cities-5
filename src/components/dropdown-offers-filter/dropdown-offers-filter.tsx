import {useAppSelector} from '../../hooks/redux.ts';
import {SortingOrder} from '../../types/sorting-order.ts';
import DropdownOffersFilterOption from './dropdown-offers-filter-option.tsx';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {setOffers} from '../../store/actions.ts';
import {SortComparers} from '../../const.ts';
import {mockOffersShort} from '../../mocks/offers-short.ts';


function DropdownOffersFilter() {
  const dispatch = useDispatch();
  const offers = useAppSelector((store) => store.offers);
  const currentSortingOrder = useAppSelector((store) => store.sortingOrder);
  const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false);

  const handleSortingOnClick = () => setDropdownIsOpen((value) => !value);

  useEffect(() => {
    if (currentSortingOrder === SortingOrder.popular) {
      dispatch(setOffers(mockOffersShort));
    } else {
      dispatch(setOffers(offers.toSorted(SortComparers[currentSortingOrder])));
      // dispatch(setOffers(mockOffersShort));
    }
  }, [currentSortingOrder, offers]);

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
