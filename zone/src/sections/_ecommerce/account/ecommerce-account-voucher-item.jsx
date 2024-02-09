import PropTypes from 'prop-types';
import { differenceInCalendarDays } from 'date-fns';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { fDate } from 'src/utils/format-time';

import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

export default function EcommerceAccountVoucherItem({ voucher }) {
  const dayLeft = differenceInCalendarDays(voucher.dueOn, new Date());

  return (
    <Stack
      direction="row"
      sx={{
        borderRadius: 1,
        overflow: 'hidden',
        border: (theme) => `dashed 1px ${theme.palette.divider}`,
      }}
    >
      <Stack
        spacing={1}
        alignItems="center"
        justifyContent="center"
        sx={{
          width: 120,
          height: 120,
          flexShrink: 0,
          borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
        }}
      >
        {getIcon(voucher.type)}

        <TextMaxLine variant="overline" line={1}>
          {voucher.label}
        </TextMaxLine>
      </Stack>

      <Stack sx={{ p: 2.5, pb: 0 }}>
        <Typography variant="h6">{voucher.title}</Typography>
        <Typography variant="body2" sx={{ mt: 0.5, mb: 1 }}>
          {voucher.description}
        </Typography>

        <Stack
          direction="row"
          alignItems="center"
          sx={{
            typography: 'caption',
            color: 'text.disabled',
            ...(dayLeft <= 1 && {
              color: 'error.main',
            }),
          }}
        >
          <Iconify icon="carbon:time" width={16} sx={{ mr: 1 }} />

          {dayLeft <= 1 ? `${dayLeft} day left` : `Valid Till: ${fDate(voucher.dueOn)}`}
        </Stack>
      </Stack>
    </Stack>
  );
}

EcommerceAccountVoucherItem.propTypes = {
  voucher: PropTypes.shape({
    type: PropTypes.string,
    label: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    dueOn: PropTypes.instanceOf(Date),
  }),
};

// ----------------------------------------------------------------------

function getIcon(type) {
  let icon;

  switch (type) {
    case 'shipping':
      icon = <Iconify icon="carbon:delivery" width={32} />;
      break;
    case 'category':
      icon = <Iconify icon="carbon:cut-out" width={32} />;
      break;
    default:
      icon = <Iconify icon="carbon:star" width={32} />;
  }
  return icon;
}
