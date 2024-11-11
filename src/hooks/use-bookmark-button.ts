import {BookmarkButtonVariants} from '../types/variants.ts';

const variantData = {
  card: {
    buttonMainClassName: 'place-card__bookmark-button button',
    buttonActiveClassName: 'place-card__bookmark-button--active',
    svgClassName: 'place-card__bookmark-icon',
    svgSizes: {width: '18', height: '19'}
  },
  full: {
    buttonMainClassName: 'offer__bookmark-button button',
    buttonActiveClassName: 'offer__bookmark-button--active',
    svgClassName: 'offer__bookmark-icon',
    svgSizes: {width: '31', height: '33'}
  },
};

type BookMarkButtonController = {
  variant: BookmarkButtonVariants;
};

export function useBookmarkButton({variant}: BookMarkButtonController) {
  const {
    buttonMainClassName,
    buttonActiveClassName,
    svgClassName,
    svgSizes
  } = variantData[variant];
  return {
    buttonMainClassName,
    buttonActiveClassName,
    svgClassName,
    svgWidth: svgSizes.width,
    svgHeight: svgSizes.height
  };
}
