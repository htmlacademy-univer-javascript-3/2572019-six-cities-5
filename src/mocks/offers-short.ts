import {OffersShort} from '../types/offers/offer-short.ts';
import {mockCities} from './cities.ts';
import {AvailableCities} from '../const.ts';

export const mockOffersShort: OffersShort = [
  {
    id: '0cd4d2ef-410b-4ac5-83b0-3ab0d6b551db',
    title: 'Perfectly located Castro',
    type: 'hotel',
    price: 227,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/12.jpg',
    city: mockCities[AvailableCities.Paris],
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.9
  },
  {
    id: 'df5b1430-63fb-4033-b6b4-b9164930c5ee',
    title: 'Wood and stone place',
    type: 'apartment',
    price: 439,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/5.jpg',
    city: mockCities[AvailableCities.Paris],
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.6
  },
  {
    id: 'ee137ad0-6864-493a-a6f4-10e3e6e66532',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'house',
    price: 589,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/3.jpg',
    city: mockCities[AvailableCities.Paris],
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.5
  },
  {
    id: '33fd94fc-eca8-40dc-8d48-cc803a4c75bd',
    title: 'Perfectly located Castro',
    type: 'room',
    price: 174,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/15.jpg',
    city: mockCities[AvailableCities.Paris],
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.9
  },
  {
    id: '6c1eb8b4-a015-4238-8a75-d9f97e2a911a',
    title: 'The house among olive ',
    type: 'hotel',
    price: 206,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/6.jpg',
    city: mockCities[AvailableCities.Paris],
    location: {
      latitude: 48.837610000000005,
      longitude: 2.3454990000000002,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.8
  },
];
