import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

export default function TravelLandingPostItem({ post }) {
  return (
    <div>
      <Typography variant="caption" sx={{ color: 'primary.main' }}>
        {fDate(post.createdAt)}
      </Typography>

      <Link component={RouterLink} href={paths.travel.post} sx={{ color: 'common.white' }}>
        <TextMaxLine variant="h5" sx={{ mt: 1, mb: 2 }}>
          {post.title}
        </TextMaxLine>
      </Link>

      <TextMaxLine variant="body2" sx={{ color: 'text.secondary' }}>
        {post.description}
      </TextMaxLine>

      <Divider sx={{ borderStyle: 'dashed', mt: 3 }} />
    </div>
  );
}

TravelLandingPostItem.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    createdAt: PropTypes.instanceOf(Date),
  }),
};
