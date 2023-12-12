import PropTypes from 'prop-types';

import StyledMarkdown from './styles';

// ----------------------------------------------------------------------

export default function Markdown({ content, firstLetter = false, sx }) {
  return (
    <StyledMarkdown
      firstLetter={firstLetter}
      dangerouslySetInnerHTML={{ __html: content }}
      sx={sx}
    />
  );
}

Markdown.propTypes = {
  content: PropTypes.string,
  firstLetter: PropTypes.bool,
  sx: PropTypes.object,
};
