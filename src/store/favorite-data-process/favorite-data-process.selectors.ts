import {AppState} from '../../types/state.ts';
import {BriefOffers} from '../../types/offers/brief-offer.ts';
import {NameStore} from '../../constants.ts';

export const getFavoriteOffers = (state: AppState): BriefOffers => state[NameStore.FavoriteData].favoriteOffers;
