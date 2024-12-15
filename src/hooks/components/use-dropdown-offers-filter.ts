import {useAppDispatch, useAppSelector} from '../services/redux.ts';
import {useEffect, useState} from 'react';
import {fetchOffersAction} from '../../store/api-actions.ts';
import {SortComparison, SortOption} from '../../constants.ts';
import {getOffers, getSortOption} from '../../store/data-process/data-process.selectors.ts';
import {setOffers} from '../../store/data-process/data-process.slice.ts';

export function useDropdownOffersFilter() {
  const dispatch = useAppDispatch();
  const offers = useAppSelector(getOffers);
  const currentSortOption = useAppSelector(getSortOption);
  const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false);

  const handleSortingOnClick = () => setDropdownIsOpen((value) => !value);

  useEffect(() => {
    if (currentSortOption === SortOption.popular && offers.length !== 0) {
      dispatch(fetchOffersAction());
    } else if (offers.length !== 0) {
      dispatch(setOffers(offers.toSorted(SortComparison[currentSortOption])));
    }
  }, [currentSortOption]);

  return {handleSortingOnClick, currentSortingOrder: currentSortOption, dropdownIsOpen, setDropdownIsOpen};
}
