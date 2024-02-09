import { sub } from 'date-fns';

import {
  _id,
  _ages,
  _roles,
  _emails,
  _prices,
  _nativeL,
  _nativeM,
  _nativeS,
  _ratings,
  _booleans,
  _percents,
  _taskNames,
  _jobTitles,
  _tourNames,
  _fullNames,
  _lastNames,
  _sentences,
  _firstNames,
  _postTitles,
  _courseTitle,
  _fullAddress,
  _phoneNumbers,
  _descriptions,
  _productNames,
  _companyNames,
} from './assets';

// ----------------------------------------------------------------------

export const _mock = {
  id: (index) => _id[index],
  time: (index) => sub(new Date(), { days: index, hours: index }),
  boolean: (index) => _booleans[index],
  role: (index) => _roles[index],
  // Text
  courseTitle: (index) => _courseTitle[index],
  taskNames: (index) => _taskNames[index],
  postTitle: (index) => _postTitles[index],
  jobTitle: (index) => _jobTitles[index],
  tourName: (index) => _tourNames[index],
  productName: (index) => _productNames[index],
  sentence: (index) => _sentences[index],
  description: (index) => _descriptions[index],
  // Contact
  email: (index) => _emails[index],
  phoneNumber: (index) => _phoneNumbers[index],
  fullAddress: (index) => _fullAddress[index],
  // Name
  firstName: (index) => _firstNames[index],
  lastName: (index) => _lastNames[index],
  fullName: (index) => _fullNames[index],
  companyName: (index) => _companyNames[index],
  // Number
  number: {
    percent: (index) => _percents[index],
    rating: (index) => _ratings[index],
    age: (index) => _ages[index],
    price: (index) => _prices[index],
    nativeS: (index) => _nativeS[index],
    nativeM: (index) => _nativeM[index],
    nativeL: (index) => _nativeL[index],
  },
  // Image
  image: {
    cover: (index) => `/assets/images/cover/cover_${index + 1}.jpg`,
    avatar: (index) => `/assets/images/avatar/avatar_${index + 1}.jpg`,
    travel: (index) => `/assets/images/travel/travel_${index + 1}.jpg`,
    company: (index) => `/assets/images/company/company_${index + 1}.png`,
    product: (index) => `/assets/images/z_product/product_${index + 1}.png`,
    portrait: (index) => `/assets/images/portrait/portrait_${index + 1}.jpg`,
    career: (index) => `/assets/images/career/career_${index + 1}.jpg`,
    marketing: (index) => `/assets/images/marketing/marketing_${index + 1}.jpg`,
    course: (index) => `/assets/images/course/course_${index + 1}.jpg`,
  },
  video: (index) =>
    [
      `https://www.dropbox.com/s/odzycivuo9cy5rg/video_01.mp4?dl=0`,
      `https://www.dropbox.com/s/7cx04n8rr4w5rbg/video_02.mp4?dl=0`,
    ][index],
};
