import { add } from 'date-fns';

import { countries } from 'src/assets/data';

import { _mock } from './_mock';
import { _tags } from './assets';

// ----------------------------------------------------------------------

const CONTENT = `
<h5>Job Description</h5>
<br/>
<p>Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.</p>

<br/>
<br/>

<h5>Key Responsibilities</h5>
<br/>
<ul>
  <li>Working with agency for design drawing detail, quotation and local production.</li>
  <li>Produce window displays, signs, interior displays, floor plans and special promotions displays.</li>
  <li>Change displays to promote new product launches and reflect festive or seasonal themes.</li>
  <li>Planning and executing the open/renovation/ closing store procedure.</li>
  <li>Follow‐up store maintenance procedure and keep updating SKU In &amp; Out.</li>
  <li>Monitor costs and work within budget.</li>
  <li>Liaise with suppliers and source elements.</li>
</ul>

<br/>
<br/>

<h5>Why You'll Love Working Here</h5>
<br/>
<ul>
  <li>Working with agency for design drawing detail, quotation and local production.</li>
  <li>Produce window displays, signs, interior displays, floor plans and special promotions displays.</li>
  <li>Change displays to promote new product launches and reflect festive or seasonal themes.</li>
  <li>Planning and executing the open/renovation/ closing store procedure.</li>
  <li>Follow‐up store maintenance procedure and keep updating SKU In &amp; Out.</li>
  <li>Monitor costs and work within budget.</li>
  <li>Liaise with suppliers and source elements.</li>
</ul>
`;

export const JOB_BENEFIT_OPTIONS = [
  { value: 'Free parking', label: 'Free parking' },
  { value: 'Bonus commission', label: 'Bonus commission' },
  { value: 'Travel', label: 'Travel' },
  { value: 'Device support', label: 'Device support' },
  { value: 'Health care', label: 'Health care' },
  { value: 'Training', label: 'Training' },
  { value: 'Health Insurance', label: 'Health Insurance' },
  { value: 'Retirement Plans', label: 'Retirement Plans' },
  { value: 'Paid Time Off', label: 'Paid Time Off' },
  { value: 'Flexible Work Schedule', label: 'Flexible Work Schedule' },
];

export const _jobs = [...Array(12)].map((_, index) => {
  const benefits = JOB_BENEFIT_OPTIONS.slice(0, 3).map((option) => option.label);

  const type = (index % 2 && 'part time') || (index % 4 && 'freelance') || 'full time';

  const level = (index % 2 && 'manager') || (index % 4 && 'intern/student') || 'No experience';

  const location = countries.map((option) => option.label)[index + 1];

  const languages = ['Russian', 'Spanish', 'English'];

  const skills = _tags.slice(0, 5);

  const company = {
    name: _mock.companyName(index),
    logo: _mock.image.company(index),
  };

  const locationMap = [
    {
      address: _mock.fullAddress(index),
      phoneNumber: _mock.phoneNumber(index),
      email: _mock.email(index),
      latlng: [33, 65],
    },
  ];

  return {
    id: _mock.id(index),
    type,
    level,
    skills,
    company,
    benefits,
    location,
    languages,
    locationMap,
    content: CONTENT,
    createdAt: new Date(),
    experience: index + 1,
    category: _tags[index],
    slug: _mock.jobTitle(index),
    urgent: [1, 3].includes(index),
    favorited: [2, 4].includes(index),
    totalViews: _mock.number.nativeL(index),
    deadline: add(new Date(), { months: index }),
    salary: (index % 3 && 12000) || 'competitive',
    shareLinks: {
      facebook: `facebook/user-name`,
      instagram: `instagram/user-name`,
      linkedin: `linkedin/user-name`,
      twitter: `twitter/user-name`,
    },
  };
});

export const _jobsByCompanies = [...Array(12)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.companyName(index),
  logo: _mock.image.company(index),
  totalJobs: 101 + index,
}));

const ICONS = [
  '/assets/icons/ic_money.svg',
  '/assets/icons/ic_marketing_bullhorn.svg',
  '/assets/icons/ic_creativity.svg',
  '/assets/icons/ic_web_programming.svg',
  '/assets/icons/ic_chip.svg',
  '/assets/icons/ic_customer_service.svg',
  '/assets/icons/ic_stethoscope.svg',
  '/assets/icons/ic_banking.svg',
];

export const _jobsByCategories = [...Array(8)].map((_, index) => ({
  id: _mock.id(index),
  icon: ICONS[index],
  name: _mock.jobTitle(index),
  totalJobs: _mock.number.nativeM(index),
}));

export const _jobsByCountries = [...Array(12)].map((_, index) => ({
  id: _mock.id(index),
  coverUrl: _mock.image.travel(index),
  totalJobs: _mock.number.nativeM(index),
  location: countries.map((option) => option.label)[index + 1],
}));
