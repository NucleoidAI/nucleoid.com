import { _mock } from './_mock';
import { _tags } from './assets';

// ----------------------------------------------------------------------

const TEACHERS = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  role: _mock.role(index),
  name: _mock.fullName(index),
  avatarUrl: _mock.image.avatar(index),
  totalCourses: 48,
  totalReviews: 3458,
  totalStudents: 18000,
  ratingNumber: _mock.number.rating(index),
}));

const LESSONS = [...Array(9)].map((_, index) => ({
  id: _mock.id(index),
  duration: 60 - index,
  title: `Lesson ${index + 1}`,
  videoPath: _mock.video(index),
  description: _mock.sentence(index),
  unLocked: [0, 1, 2].includes(index),
}));

export const _courses = [...Array(12)].map((_, index) => {
  const languages = ['Russian', 'Spanish', 'English'];

  const skills = _tags.slice(0, 5);

  const level =
    (index % 2 && 'Intermediate') ||
    (index % 4 && 'Expert') ||
    (index % 5 && 'All Levels') ||
    'Beginner';

  const learnList = [
    'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
    'Vulputate placerat amet pulvinar lorem nisl.',
    'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
    'Etiam duis lobortis in fames ultrices commodo nibh.',
    'Fusce neque. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit.',
    'Curabitur a felis in nunc fringilla tristique. Praesent congue erat at massa.',
  ];

  return {
    id: _mock.id(index),
    level,
    skills,
    languages,
    learnList,
    resources: 12,
    totalHours: 100,
    lessons: LESSONS,
    totalQuizzes: 100,
    totalReviews: 3458,
    teachers: TEACHERS,
    totalStudents: 180000,
    createdAt: new Date(),
    category: _tags[index],
    slug: _mock.courseTitle(index),
    bestSeller: index === 2 || false,
    coverUrl: _mock.image.course(index),
    ratingNumber: _mock.number.rating(index),
    description: _mock.description(index),
    price: (index % 2 && 159.99) || 269.99,
    priceSale: (index === 2 && 89.99) || (index === 5 && 69.99) || 0,
    shareLinks: {
      facebook: `facebook/user-name`,
      instagram: `instagram/user-name`,
      linkedin: `linkedin/user-name`,
      twitter: `twitter/user-name`,
    },
  };
});

export const _coursesByCategories = [...Array(9)].map((_, index) => ({
  id: _mock.id(index),
  name: _tags[index],
  totalStudents: _mock.number.nativeM(index),
}));
