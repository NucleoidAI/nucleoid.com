import { _mock } from './_mock';
import { _tags } from './assets';

// ----------------------------------------------------------------------

const TITLE = [
  'Bank of America',
  'Technology Nixon',
  'Turn Key Smart',
  'Digital Shose',
  'Action Car',
  'The Zone UI',
  'Minimal UI',
  'Network Firefox',
];

const CONTENT = `
<h4>Project Brief</h4>
<br/>
<p>Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringilla mauris sit amet nibh. Phasellus viverra nulla ut metus varius laoreet.</p>

<br/>
<br/>

<h4>How We Work</h4>
<br/>
<p>Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringilla mauris sit amet nibh. Phasellus viverra nulla ut metus varius laoreet.</p>
<br/>
<ul>
    <li>Medical Assistant</li>
    <li>Web Designer</li>
    <li>Dog Trainer</li>
    <li>Nursing Assistant</li>
    <li>President of Sales</li>
</ul>

<br/>
<br/>
<h4>Results</h4>
<br/>
<p>Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringilla mauris sit amet nibh. Phasellus viverra nulla ut metus varius laoreet.</p>
<ul>
    <li>Medical Assistant</li>
    <li>Web Designer</li>
    <li>Dog Trainer</li>
    <li>Nursing Assistant</li>
    <li>President of Sales</li>
</ul>
`;

export const _caseStudies = TITLE.map((_, index) => {
  const galleryImgs = [
    _mock.image.marketing(0),
    _mock.image.marketing(1),
    _mock.image.marketing(2),
    _mock.image.marketing(3),
    _mock.image.marketing(4),
    _mock.image.marketing(5),
  ];

  return {
    id: _mock.id(index),
    content: CONTENT,
    title: TITLE[index],
    category: _tags[index],
    createdAt: _mock.time(index),
    website: 'https://example.com/',
    description: _mock.description(index),
    heroUrl: '/assets/images/marketing/marketing_post_hero.jpg',
    coverUrl: `/assets/images/marketing/marketing_${index + 1}.jpg`,
    how_we_work:
      'Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringi',
    results:
      'Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringi',
    galleryImgs,
  };
});
