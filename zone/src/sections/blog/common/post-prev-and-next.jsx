import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function PostPrevAndNext({ prevPost, nextPost }) {
  return (
    <Grid container spacing={5} sx={{ py: 8 }}>
      <Grid xs={12} md={6}>
        <PostItem
          title={prevPost?.title}
          coverUrl={prevPost?.coverUrl}
          icon={<Iconify icon="carbon:chevron-left" width={24} sx={{ color: 'text.disabled' }} />}
        />
      </Grid>

      <Grid xs={12} md={6}>
        <PostItem
          isNext
          title={nextPost?.title}
          coverUrl={nextPost?.coverUrl}
          icon={<Iconify width={24} icon="carbon:chevron-right" sx={{ color: 'text.disabled' }} />}
        />
      </Grid>
    </Grid>
  );
}

PostPrevAndNext.propTypes = {
  nextPost: PropTypes.shape({
    coverUrl: PropTypes.string,
    title: PropTypes.string,
  }),
  prevPost: PropTypes.shape({
    coverUrl: PropTypes.string,
    title: PropTypes.string,
  }),
};

// ----------------------------------------------------------------------

function PostItem({ coverUrl, title, icon, isNext }) {
  return (
    <CardActionArea sx={{ borderRadius: 2 }}>
      <Link color="inherit" underline="none">
        <Stack
          alignItems="center"
          direction={isNext ? 'row-reverse' : 'row'}
          spacing={2}
          sx={{
            p: 2.5,
            pl: 1,
            ...(isNext && {
              pr: 1,
            }),
          }}
        >
          {icon}

          <Avatar src={coverUrl} sx={{ width: 64, height: 64 }} />

          <Stack
            spacing={0.5}
            sx={{
              ...(isNext && {
                textAlign: 'right',
              }),
            }}
          >
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              {isNext ? 'Next Post' : 'Previous Post'}
            </Typography>

            <Typography variant="subtitle1">{title}</Typography>
          </Stack>
        </Stack>
      </Link>
    </CardActionArea>
  );
}

PostItem.propTypes = {
  isNext: PropTypes.bool,
  title: PropTypes.string,
  coverUrl: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
