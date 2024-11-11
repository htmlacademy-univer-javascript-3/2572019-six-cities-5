import {Reviews} from '../types/review.ts';

export const mockReviews : Reviews = [
  {
    'id': '0cd4d2ef-410b-4ac5-83b0-3ab0d6b551db',
    'date': '2019-05-08T14:13:56.569Z',
    'user': {
      'name': 'Oliver Conner',
      'avatarUrl': 'img/avatar-max.jpg',
      'isPro': false
    },
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'rating': 4
  },
  {
    'id': '0cd4d2ef-410b-4ac5-83b0-3ab0d6b551db',
    'date': '2024-11-05T14:13:56.569Z',
    'user': {
      'name': 'Donald Trump',
      'avatarUrl': 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1fLn1Z.img',
      'isPro': true
    },
    'comment': 'America is a great nation! MAGA!',
    'rating': 1
  }
];
