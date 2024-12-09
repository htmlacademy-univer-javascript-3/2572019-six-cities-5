import {OfferCardVariants} from '../../types/variants.ts';

const variantData = {
  main: {
    placeCardClassName: 'cities__card place-card',
    cardInfoClassName: 'place-card__info',
    imageWrapperClassName: 'cities__image-wrapper place-card__image-wrapper',
    imageSizes: {width: '260', height: '200'}
  },
  favorites: {
    placeCardClassName: 'favorites__card place-card',
    cardInfoClassName: 'favorites__card-info place-card__info',
    imageWrapperClassName: 'favorites__image-wrapper place-card__image-wrapper',
    imageSizes: {width: '150', height: '110'}
  },
};

type OfferCardController = {
  variant: OfferCardVariants;
}

export function useOfferCard({variant}: OfferCardController) {
  const {
    placeCardClassName,
    cardInfoClassName,
    imageWrapperClassName,
    imageSizes
  } = variantData[variant];

  return {
    placeCardClassName,
    cardInfoClassName,
    imageWrapperClassName,
    imageWidth: imageSizes.width,
    imageHeight: imageSizes.height
  };
}
