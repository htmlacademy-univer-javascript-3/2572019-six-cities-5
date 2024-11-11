import classNames from 'classnames';
import {useBookmarkButton} from '../../hooks/use-bookmark-button.ts';
import {BookmarkButtonVariants} from '../../types/variants.ts';

type BookmarkButtonProps = {
  inFavorites?: boolean;
  variant: BookmarkButtonVariants;
}

function BookmarkButton({inFavorites, variant}: BookmarkButtonProps): JSX.Element {
  const {
    buttonMainClassName,
    buttonActiveClassName,
    svgClassName,
    svgWidth,
    svgHeight
  } = useBookmarkButton({variant});

  const buttonFullClassName = classNames(
    buttonMainClassName,
    {[`${buttonActiveClassName}`]: inFavorites}
  );

  return (
    <button className={buttonFullClassName} type="button">
      <svg className={svgClassName} width={svgWidth} height={svgHeight}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default BookmarkButton;
