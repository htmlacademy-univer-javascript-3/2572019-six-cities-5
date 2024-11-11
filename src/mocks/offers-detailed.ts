import {OfferDetailed} from '../types/offers/offer-detailed.ts';
import {mockCities} from './cities.ts';
import {AvailableCities} from '../const.ts';

const mockOffersDetailed: Map<string, OfferDetailed> = new Map();

mockOffersDetailed.set(
  '0cd4d2ef-410b-4ac5-83b0-3ab0d6b551db',
  {
    'id': '0cd4d2ef-410b-4ac5-83b0-3ab0d6b551db',
    'title': 'Perfectly located Castro',
    'description': 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    'type': 'hotel',
    'price': 227,
    'images': [
      'https://14.design.htmlacademy.pro/static/hotel/19.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/16.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/12.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/14.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/6.jpg'
    ],
    'city': mockCities[AvailableCities.Paris],
    'location': {
      'latitude': 48.868610000000004,
      'longitude': 2.342499,
      'zoom': 16
    },
    'goods': [
      'Kitchen',
      'Wi-Fi',
      'Baby seat',
      'Laptop friendly workspace',
      'Fridge',
      'Towels',
      'Heating',
      'Cable TV',
      'Breakfast',
      'Dishwasher',
      'Washing machine',
      'Coffee machine',
      'Air conditioning'
    ],
    'host': {
      'isPro': true,
      'name': 'Angelina',
      'avatarUrl': 'https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    'isPremium': true,
    'isFavorite': false,
    'rating': 2.9,
    'bedrooms': 5,
    'maxAdults': 7
  });

mockOffersDetailed.set(
  'df5b1430-63fb-4033-b6b4-b9164930c5ee',
  {
    'id': 'df5b1430-63fb-4033-b6b4-b9164930c5ee',
    'title': 'Wood and stone place',
    'description': 'Design interior in most sympathetic area! Completely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
    'type': 'apartment',
    'price': 439,
    'images': [
      'https://14.design.htmlacademy.pro/static/hotel/17.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/5.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/8.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/2.jpg'
    ],
    'city': mockCities[AvailableCities.Paris],
    'location': {
      'latitude': 48.858610000000006,
      'longitude': 2.330499,
      'zoom': 16
    },
    'goods': [
      'Wi-Fi',
      'Washer',
      'Fridge',
      'Towels'
    ],
    'host': {
      'isPro': true,
      'name': 'Angelina',
      'avatarUrl': 'https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    'isPremium': true,
    'isFavorite': false,
    'rating': 1.6,
    'bedrooms': 4,
    'maxAdults': 7
  }
);

mockOffersDetailed.set(
  'ee137ad0-6864-493a-a6f4-10e3e6e66532',
  {
    'id': 'ee137ad0-6864-493a-a6f4-10e3e6e66532',
    'title': 'Nice, cozy, warm big bed apartment',
    'description': 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    'type': 'house',
    'price': 589,
    'images': [
      'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/16.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/7.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/14.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/11.jpg'
    ],
    'city': mockCities[AvailableCities.Paris],
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.335499,
      'zoom': 16
    },
    'goods': [
      'Baby seat',
      'Air conditioning',
      'Wi-Fi',
      'Coffee machine',
      'Laptop friendly workspace',
      'Cable TV',
      'Washing machine',
      'Towels',
      'Breakfast',
      'Dishwasher',
      'Fridge'
    ],
    'host': {
      'isPro': true,
      'name': 'Angelina',
      'avatarUrl': 'https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    'isPremium': false,
    'isFavorite': false,
    'rating': 2.5,
    'bedrooms': 1,
    'maxAdults': 1
  }
);

mockOffersDetailed.set(
  '33fd94fc-eca8-40dc-8d48-cc803a4c75bd',
  {
    'id': '33fd94fc-eca8-40dc-8d48-cc803a4c75bd',
    'title': 'Perfectly located Castro',
    'description': 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    'type': 'room',
    'price': 174,
    'images': [
      'https://14.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/12.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/16.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/3.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/1.jpg'
    ],
    'city': mockCities[AvailableCities.Paris],
    'location': {
      'latitude': 48.85761,
      'longitude': 2.358499,
      'zoom': 16
    },
    'goods': [
      'Baby seat',
      'Washing machine',
      'Air conditioning'
    ],
    'host': {
      'isPro': true,
      'name': 'Angelina',
      'avatarUrl': 'https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    'isPremium': true,
    'isFavorite': false,
    'rating': 2.9,
    'bedrooms': 1,
    'maxAdults': 1
  }
);

// ---------------------------- НИЖЕ - карточки для favorites

mockOffersDetailed.set(
  'c7e1e195-5282-46cc-bf5f-d3a90dc617a5',
  {
    'id': 'c7e1e195-5282-46cc-bf5f-d3a90dc617a5',
    'title': 'Nice, cozy, warm big bed apartment',
    'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    'type': 'apartment',
    'price': 260,
    'images': [
      'https://14.design.htmlacademy.pro/static/hotel/11.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/12.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/20.jpg'
    ],
    'city': mockCities[AvailableCities.Paris],
    'location': {
      'latitude': 48.87561,
      'longitude': 2.375499,
      'zoom': 16
    },
    'goods': [
      'Baby seat',
      'Breakfast',
      'Cable TV',
      'Coffee machine',
      'Fridge',
      'Dishwasher',
      'Wi-Fi',
      'Heating',
      'Washing machine'
    ],
    'host': {
      'isPro': true,
      'name': 'Angelina',
      'avatarUrl': 'https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    'isPremium': false,
    'isFavorite': false,
    'rating': 3.5,
    'bedrooms': 3,
    'maxAdults': 6
  }
);

mockOffersDetailed.set(
  '80a546d0-a05e-456a-b87a-0edcfc49ca1d',
  {
    'id': '80a546d0-a05e-456a-b87a-0edcfc49ca1d',
    'title': 'House in countryside',
    'description': 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    'type': 'hotel',
    'price': 105,
    'images': [
      'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/19.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/16.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/13.jpg'
    ],
    'city': mockCities[AvailableCities.Cologne],
    'location': {
      'latitude': 50.941361,
      'longitude': 6.956974,
      'zoom': 16
    },
    'goods': [
      'Baby seat',
      'Washing machine',
      'Coffee machine',
      'Wi-Fi',
      'Laptop friendly workspace',
      'Towels',
      'Kitchen'
    ],
    'host': {
      'isPro': true,
      'name': 'Angelina',
      'avatarUrl': 'https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    'isPremium': false,
    'isFavorite': false,
    'rating': 1,
    'bedrooms': 5,
    'maxAdults': 10
  }
);

mockOffersDetailed.set(
  '02a27486-4760-44e3-a332-11766adf5071',
  {
    'id': '02a27486-4760-44e3-a332-11766adf5071',
    'title': 'House in countryside',
    'description': 'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
    'type': 'apartment',
    'price': 180,
    'images': [
      'https://14.design.htmlacademy.pro/static/hotel/11.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/14.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/9.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/19.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/12.jpg'
    ],
    'city': mockCities[AvailableCities.Cologne],
    'location': {
      'latitude': 50.957361,
      'longitude': 6.9509739999999995,
      'zoom': 16
    },
    'goods': [
      'Washer',
      'Kitchen',
      'Fridge',
      'Baby seat',
      'Cable TV',
      'Coffee machine',
      'Washing machine',
      'Wi-Fi',
      'Towels',
      'Air conditioning',
      'Breakfast',
      'Laptop friendly workspace',
      'Heating'
    ],
    'host': {
      'isPro': true,
      'name': 'Angelina',
      'avatarUrl': 'https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    'isPremium': true,
    'isFavorite': false,
    'rating': 1.4,
    'bedrooms': 4,
    'maxAdults': 10
  }
);

mockOffersDetailed.set(
  'c98922c3-f1bc-48d1-bdc8-74e3aee372cf',
  {
    'id': 'c98922c3-f1bc-48d1-bdc8-74e3aee372cf',
    'title': 'The Joshua Tree House',
    'description': 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    'type': 'apartment',
    'price': 173,
    'images': [
      'https://14.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/20.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/9.jpg'
    ],
    'city': mockCities[AvailableCities.Amsterdam],
    'location': {
      'latitude': 52.370540000000005,
      'longitude': 4.9099759999999995,
      'zoom': 16
    },
    'goods': [
      'Kitchen',
      'Washing machine',
      'Towels',
      'Baby seat',
      'Dishwasher'
    ],
    'host': {
      'isPro': true,
      'name': 'Angelina',
      'avatarUrl': 'https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    'isPremium': true,
    'isFavorite': false,
    'rating': 4.8,
    'bedrooms': 1,
    'maxAdults': 10
  }
);

export default mockOffersDetailed;
