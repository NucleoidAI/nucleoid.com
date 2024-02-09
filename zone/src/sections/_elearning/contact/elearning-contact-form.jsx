import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { useResponsive } from 'src/hooks/use-responsive';

import Image from 'src/components/image';
import FormProvider, { RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function ElearningContactForm() {
  const mdUp = useResponsive('up', 'md');

  const ElearningContactSchema = Yup.object().shape({
    fullName: Yup.string().required('Full name is required'),
    email: Yup.string().required('Email is required').email('That is not an email'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
  });

  const defaultValues = {
    fullName: '',
    subject: '',
    email: '',
    message: '',
  };

  const methods = useForm({
    resolver: yupResolver(ElearningContactSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      console.log('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Box
      sx={{
        bgcolor: 'background.neutral',
        py: { xs: 10, md: 15 },
      }}
    >
      <Container>
        <Grid container spacing={3} justifyContent="space-between">
          {mdUp && (
            <Grid xs={12} md={6} lg={5}>
              <Image
                alt="contact"
                src="/assets/illustrations/illustration_courses_contact.svg"
                sx={{ maxWidth: 260 }}
              />
            </Grid>
          )}

          <Grid xs={12} md={6} lg={6}>
            <Stack
              spacing={2}
              sx={{
                mb: 5,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography variant="h3">Drop Us A Line</Typography>

              <Typography sx={{ color: 'text.secondary' }}>
                We normally respond within 2 business days
              </Typography>
            </Stack>

            <FormProvider methods={methods} onSubmit={onSubmit}>
              <Stack spacing={2.5} alignItems="flex-start">
                <RHFTextField name="fullName" label="Full name" />

                <RHFTextField name="email" label="Email" />

                <RHFTextField name="subject" label="Subject" />

                <RHFTextField name="message" multiline rows={4} label="Message" sx={{ pb: 2.5 }} />

                <LoadingButton
                  size="large"
                  type="submit"
                  variant="contained"
                  loading={isSubmitting}
                  sx={{
                    mx: { xs: 'auto !important', md: 'unset !important' },
                  }}
                >
                  Send Request
                </LoadingButton>
              </Stack>
            </FormProvider>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
