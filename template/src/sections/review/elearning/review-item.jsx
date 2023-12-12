import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { useBoolean } from 'src/hooks/use-boolean';

import { fDate } from 'src/utils/format-time';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const AVATAR_SIZE = 64;

const WIDTH = `calc(100% - ${AVATAR_SIZE + 20}px)`;

export default function ReviewItem({
  name,
  rating,
  message,
  tagUser,
  createdAt,
  hasReply,
  avatarUrl,
  helpful = 0,
}) {
  const openReply = useBoolean();

  return (
    <>
      <Stack
        direction="row"
        sx={{
          py: 3,
          alignItems: 'flex-start',
          ...(hasReply && {
            ml: 'auto',
            width: WIDTH,
          }),
        }}
      >
        <Avatar
          alt={name}
          src={avatarUrl}
          sx={{ width: AVATAR_SIZE, height: AVATAR_SIZE, mr: 2.5 }}
        />

        <Stack sx={{ width: 1 }}>
          <Stack
            spacing={1}
            alignItems={{ sm: 'center' }}
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent={{ sm: 'space-between' }}
          >
            <Typography variant="subtitle2">{name}</Typography>
            {!hasReply && <Rating size="small" value={rating} precision={0.5} readOnly />}
          </Stack>

          {createdAt && (
            <Typography
              variant="body2"
              sx={{
                mb: 1,
                mt: { xs: 1, sm: 0.5 },
                color: 'text.disabled',
              }}
            >
              {fDate(createdAt)}
            </Typography>
          )}

          <Typography variant="body2">
            {tagUser && <strong>{`@${tagUser} `}</strong>}
            {message}
          </Typography>

          {!hasReply && (
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 2 }}>
              <Button size="small" color="inherit" startIcon={<Iconify icon="carbon:thumbs-up" />}>
                Helpful ({helpful})
              </Button>

              <Box
                sx={{
                  width: 4,
                  height: 4,
                  bgcolor: 'text.disabled',
                  borderRadius: '50%',
                }}
              />

              <Button
                size="small"
                color={openReply.value ? 'primary' : 'inherit'}
                onClick={openReply.onToggle}
              >
                Reply
              </Button>
            </Stack>
          )}

          {!hasReply && openReply.value && (
            <TextField
              fullWidth
              hiddenLabel
              placeholder="Write comment..."
              InputProps={{ sx: { height: 48 } }}
              sx={{ mt: 3 }}
            />
          )}
        </Stack>
      </Stack>

      <Divider sx={{ ml: 'auto', width: WIDTH }} />
    </>
  );
}

ReviewItem.propTypes = {
  name: PropTypes.string,
  hasReply: PropTypes.bool,
  rating: PropTypes.number,
  helpful: PropTypes.number,
  message: PropTypes.string,
  tagUser: PropTypes.string,
  avatarUrl: PropTypes.string,
  createdAt: PropTypes.instanceOf(Date),
};
