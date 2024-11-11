import {OfferCardListVariants} from '../types/variants.ts';

type OfferCardListController = {
  variant: OfferCardListVariants;
}

const variantData = {
  main: {
    sectionClassName: 'cities__places places',
    headerClassName: 'visually-hidden',
    headerContent: 'Places',
    isHeaderActive: true,
    isFoundActive: true,
    isFormActive: true,
    containerClassName: 'cities__places-list places__list tabs__content',
  },
  nearby: {
    sectionClassName: 'near-places places',
    headerClassName: 'near-places__title',
    headerContent: 'Other places in the neighbourhood',
    isHeaderActive: true,
    isFoundActive: false,
    isFormActive: false,
    containerClassName: 'near-places__list places__list',
  },
};

export function useOfferCardList({variant}: OfferCardListController) {
  return variantData[variant];
}
