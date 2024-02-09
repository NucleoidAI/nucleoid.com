import { useState, useEffect, useCallback } from 'react';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { useBoolean } from 'src/hooks/use-boolean';

import { _faqsSupport } from 'src/_mock';

import Iconify from 'src/components/iconify';

import SupportNav from '../support-nav';
import SupportHero from '../support-hero';
import SupportContent from '../support-content';

// ----------------------------------------------------------------------

const TOPICS = [
  {
    title: 'Account',
    icon: '/assets/icons/faq/ic_faq_account.svg',
    content: <SupportContent contents={_faqsSupport} />,
  },
  {
    title: 'Payment',
    icon: '/assets/icons/faq/ic_faq_payment.svg',
    content: <SupportContent contents={_faqsSupport} />,
  },
  {
    title: 'Delivery',
    icon: '/assets/icons/faq/ic_faq_delivery.svg',
    content: <SupportContent contents={_faqsSupport} />,
  },
  {
    title: 'Product',
    icon: '/assets/icons/faq/ic_faq_package.svg',
    content: <SupportContent contents={_faqsSupport} />,
  },
  {
    title: 'Return & Refund',
    icon: '/assets/icons/faq/ic_faq_refund.svg',
    content: <SupportContent contents={_faqsSupport} />,
  },
  {
    title: 'Assurances',
    icon: '/assets/icons/faq/ic_faq_assurances.svg',
    content: <SupportContent contents={_faqsSupport} />,
  },
];

// ----------------------------------------------------------------------

export default function SupportView() {
  const [topic, setTopic] = useState('Payment');

  const mobileOpen = useBoolean();

  const handleChangeTopic = useCallback((event, newValue) => {
    setTopic(newValue);
  }, []);

  useEffect(() => {
    if (mobileOpen.value) {
      mobileOpen.onFalse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topic]);

  return (
    <>
      <SupportHero />

      <Stack
        alignItems="flex-end"
        sx={{
          py: 1.5,
          px: 2.5,
          display: { md: 'none' },
          borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
        }}
      >
        <IconButton onClick={mobileOpen.onTrue}>
          <Iconify icon="carbon:menu" />
        </IconButton>
      </Stack>

      <Container>
        <Typography variant="h3" sx={{ py: { xs: 3, md: 10 } }}>
          Frequently Asked Questions
        </Typography>

        <Stack direction="row" sx={{ pb: { xs: 10, md: 15 } }}>
          <SupportNav
            data={TOPICS}
            topic={topic}
            open={mobileOpen.value}
            onChangeTopic={handleChangeTopic}
            onClose={mobileOpen.onFalse}
          />

          {TOPICS.map((item) => item.title === topic && <div key={item.title}>{item.content}</div>)}
        </Stack>
      </Container>
    </>
  );
}
