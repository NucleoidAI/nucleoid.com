import { add } from 'date-fns';

import { countries } from 'src/assets/data';

import { _mock } from './_mock';
import { _tags } from './assets';

// ----------------------------------------------------------------------

export const TOUR_SERVICE_OPTIONS = [
  { value: 'Audio guide', label: 'Audio guide' },
  { value: 'Food and drinks', label: 'Food and drinks' },
  { value: 'Lunch', label: 'Lunch' },
  { value: 'Private tour', label: 'Private tour' },
  { value: 'Special activities', label: 'Special activities' },
  { value: 'Entrance fees', label: 'Entrance fees' },
  { value: 'Gratuities', label: 'Gratuities' },
  { value: 'Pick-up and drop off', label: 'Pick-up and drop off' },
  { value: 'Professional guide', label: 'Professional guide' },
  {
    value: 'Transport by air-conditioned',
    label: 'Transport by air-conditioned',
  },
];

export const _tours = [...Array(12)].map((_, index) => {
  const location = countries.map((option) => option.label)[index + 1];

  const gallery = [...Array(6)].map((__, itemIndex) => _mock.image.travel(itemIndex + 2));

  const highlights = [...Array(6)].map((__, itemIndex) => _mock.sentence(itemIndex));

  const heroUrl = [
    '/assets/images/travel/travel_post_hero.jpg',
    '/assets/images/travel/travel_post_01.jpg',
    '/assets/images/travel/travel_post_02.jpg',
    '/assets/images/travel/travel_post_03.jpg',
    '/assets/images/travel/travel_post_04.jpg',
  ][index];

  const program = [...Array(3)].map((__, itemIndex) => ({
    label: `Day ${itemIndex + 1}`,
    text: _mock.description(itemIndex),
  }));

  const services = (index % 2 && ['Audio guide', 'Food and drinks']) ||
    (index % 3 && ['Lunch', 'Private tour']) ||
    (index % 4 && ['Special activities', 'Entrance fees']) || [
      'Gratuities',
      'Pick-up and drop off',
      'Professional guide',
      'Transport by air-conditioned',
    ];

  const tourGuide = {
    verified: true,
    role: _mock.role(index),
    name: _mock.fullName(index),
    avatarUrl: _mock.image.avatar(index),
    quotes: 'Member since Mar 15, 2021',
    phoneNumber: _mock.phoneNumber(index),
    ratingNumber: _mock.number.rating(index),
    totalReviews: _mock.number.nativeL(index),
    about:
      'Integer tincidunt. Nullam dictum felis eu pede mollis pretium. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem.',
    shareLinks: {
      facebook: `facebook/user-name`,
      instagram: `instagram/user-name`,
      linkedin: `linkedin/user-name`,
      twitter: `twitter/user-name`,
    },
  };

  return {
    id: _mock.id(index),
    heroUrl,
    gallery,
    program,
    location,
    services,
    tourGuide,
    highlights,
    continent: location,
    tags: _tags.slice(0, 5),
    slug: _mock.tourName(index),
    duration: '3 days 2 nights',
    createdAt: _mock.time(index),
    favorited: _mock.boolean(index),
    price: _mock.number.price(index),
    languages: ['Russian', 'Spanish'],
    coverUrl: _mock.image.travel(index),
    description: _mock.description(index),
    ratingNumber: _mock.number.rating(index),
    totalReviews: _mock.number.nativeL(index),
    priceSale: (index === 2 && 89.99) || (index === 5 && 69.99) || 0,
    available: {
      start: add(new Date(), { months: 2 }),
      end: add(new Date(), { months: 4 }),
    },
    shareLinks: {
      facebook: `facebook/user-name`,
      instagram: `instagram/user-name`,
      linkedin: `linkedin/user-name`,
      twitter: `twitter/user-name`,
    },
  };
});
