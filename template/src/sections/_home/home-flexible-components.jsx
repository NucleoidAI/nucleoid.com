import { m } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';

import Tab from '@mui/material/Tab';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Tabs from '@mui/material/Tabs';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import Badge from '@mui/material/Badge';
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CardHeader from '@mui/material/CardHeader';
import AvatarGroup from '@mui/material/AvatarGroup';
import ToggleButton from '@mui/material/ToggleButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import CircularProgress from '@mui/material/CircularProgress';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { _mock } from 'src/_mock';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const FASHION_CATEGORY = [
  { value: 'clothes', label: 'Clothes' },
  { value: 'footwear', label: 'Footwear' },
  { value: 'jean', label: 'Jean' },
];

// ----------------------------------------------------------------------

export default function HomeFlexibleComponents() {
  const [tab, setTab] = useState('angular');

  const [progress, setProgress] = useState(0);

  const [alignment, setAlignment] = useState('left');

  const [category, setCategory] = useState('clothes');

  const [rating, setRating] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleChangeTab = useCallback((event, newValue) => {
    setTab(newValue);
  }, []);

  const handleChangeAlignment = useCallback((event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  }, []);

  const handleChangeCategory = useCallback((event) => {
    setCategory(event.target.value);
  }, []);

  return (
    <Container
      sx={{
        overflow: 'hidden',
        py: { xs: 5, md: 10 },
      }}
    >
      <Grid container spacing={{ xs: 6, md: 3 }} justifyContent={{ md: 'space-between' }}>
        <Grid xs={12} md={4}>
          <MotionViewport
            sx={{
              pt: { md: 10 },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <m.div variants={varFade().inUp}>
              <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                Interface Starter Kit
              </Typography>
            </m.div>

            <m.div variants={varFade().inUp}>
              <Typography variant="h2" sx={{ my: 3 }}>
                Flexible Components
              </Typography>
            </m.div>

            <m.div variants={varFade().inUp}>
              <Typography sx={{ color: 'text.secondary', mb: 5 }}>
                Pre-set components are easy to customize and use. We collected most popular
                elements. Menu, sliders, buttons, inputs etc. are all here. Just dive in!
              </Typography>
            </m.div>

            <m.div variants={varFade().inUp}>
              <Button
                component={RouterLink}
                href={paths.components.root}
                color="inherit"
                size="large"
                variant="outlined"
                endIcon={<Iconify icon="carbon:chevron-right" width={16} />}
              >
                Browse Components
              </Button>
            </m.div>
          </MotionViewport>
        </Grid>

        <Grid xs={12} md={7}>
          <Stack
            spacing={5}
            alignItems="center"
            sx={{
              borderRadius: 3,
              p: { xs: 3, sm: 5 },
              border: (theme) => `dashed 1px ${theme.palette.divider}`,
            }}
          >
            <Stack
              flexWrap="wrap"
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={{ xs: 3, md: 5 }}
              sx={{ width: 1 }}
            >
              <Button
                size="large"
                variant="contained"
                color="primary"
                startIcon={<Iconify icon="carbon:add" />}
              >
                Add to cart
              </Button>

              <Fab variant="extended" color="inherit" aria-label="upload">
                <Iconify icon="carbon:cloud-upload" width={24} />
                Upload
              </Fab>

              <Fab color="info" aria-label="media">
                <Iconify icon="carbon:media-library" />
              </Fab>

              <CircularProgress
                color="warning"
                variant="determinate"
                aria-label="Progress"
                value={progress}
              />
            </Stack>

            <Stack
              flexWrap="wrap"
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={{ xs: 3, md: 5 }}
              sx={{ width: 1 }}
            >
              <Tabs value={tab} onChange={handleChangeTab}>
                <Tab value="angular" label="Angular" />
                <Tab value="react" label="React" />
                <Tab value="vue" label="Vue" />
              </Tabs>

              <ToggleButtonGroup
                exclusive
                color="primary"
                value={alignment}
                onChange={handleChangeAlignment}
                aria-label="text alignment"
              >
                <ToggleButton value="left" aria-label="alignment left">
                  <Iconify icon="carbon:align-horizontal-left" />
                </ToggleButton>

                <ToggleButton value="center" aria-label="alignment center">
                  <Iconify icon="carbon:align-horizontal-center" />
                </ToggleButton>

                <ToggleButton value="right" aria-label="alignment right">
                  <Iconify icon="carbon:align-horizontal-right" />
                </ToggleButton>
              </ToggleButtonGroup>

              <Chip
                variant="soft"
                color="primary"
                label="Pamela"
                onDelete={() => {}}
                avatar={<Avatar alt="Pamela">P</Avatar>}
              />
            </Stack>

            <Stack
              flexWrap="wrap"
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={{ xs: 3, md: 5 }}
              sx={{ width: 1 }}
            >
              <Avatar alt="Remy Sharp" src={_mock.image.avatar(4)} sx={{ width: 64, height: 64 }} />

              <AvatarGroup max={4}>
                {[...Array(8)].map((_, index) => (
                  <Avatar key={index} alt={_mock.fullName(index)} src={_mock.image.avatar(index)} />
                ))}
              </AvatarGroup>

              <Tooltip title="Add" placement="top" arrow>
                <Button color="inherit">Hover Me</Button>
              </Tooltip>

              <Rating
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
              />
            </Stack>

            <Stack
              flexWrap="wrap"
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={{ xs: 3, md: 5 }}
              sx={{ width: 1 }}
            >
              <Slider
                size="small"
                defaultValue={72}
                valueLabelDisplay="on"
                aria-label="demo slider"
                sx={{ maxWidth: { xs: 1, md: 0.5 } }}
              />

              <Alert
                severity="success"
                action={
                  <IconButton color="inherit" size="small" aria-label="close" onClick={() => {}}>
                    <Iconify icon="carbon:close" />
                  </IconButton>
                }
              >
                This is a <strong>success</strong> alert
              </Alert>
            </Stack>

            <Stack
              flexWrap="wrap"
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={{ xs: 3, md: 5 }}
              sx={{ width: 1 }}
            >
              <Card sx={{ boxShadow: (theme) => theme.customShadows.z24 }}>
                <Paper
                  sx={{
                    width: 320,
                    borderRadius: 2,
                    boxShadow: (theme) => theme.customShadows.z20,
                  }}
                >
                  <CardHeader
                    title="Jayvion Simon"
                    subheader="California, United States"
                    avatar={
                      <Badge
                        variant="online"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                      >
                        <Avatar
                          alt={_mock.fullName(0)}
                          src={_mock.image.avatar(0)}
                          sx={{
                            width: 48,
                            height: 48,
                          }}
                        />
                      </Badge>
                    }
                    titleTypographyProps={{
                      typography: 'subtitle2',
                      sx: { mb: 0.25 },
                    }}
                    subheaderTypographyProps={{ typography: 'caption' }}
                    sx={{ p: 2 }}
                  />
                  <Box sx={{ px: 1 }}>
                    <Image
                      alt="cover-url"
                      src={_mock.image.cover(11)}
                      ratio="16/9"
                      sx={{
                        borderRadius: 1.5,
                      }}
                    />
                  </Box>

                  <Typography variant="body2" sx={{ color: 'text.secondary', pt: 2, px: 2 }}>
                    Phasellus dolor. Fusce egestas elit eget lorem. Quisque id odio.
                  </Typography>

                  <Stack direction="row" sx={{ px: 2, py: 1 }}>
                    <Checkbox
                      defaultChecked
                      color="error"
                      size="small"
                      icon={<Iconify icon="solar:heart-bold" />}
                      checkedIcon={<Iconify icon="solar:heart-bold" />}
                    />

                    <Box sx={{ flexGrow: 1 }} />

                    <IconButton>
                      <Iconify icon="solar:share-bold" />
                    </IconButton>

                    <IconButton>
                      <Iconify icon="eva:message-circle-fill" />
                    </IconButton>
                  </Stack>
                </Paper>
              </Card>

              <Stack spacing={2.5} flexGrow={1}>
                <FormControlLabel control={<Switch defaultChecked />} label="Switch" />

                <FormControlLabel control={<Checkbox />} label="Checkbox" />

                <FormControlLabel
                  value="Radio"
                  control={<Radio defaultChecked />}
                  label="Radio Button"
                />

                <TextField label="Full Name" defaultValue="Pamela Mclellan" />

                <TextField
                  select
                  label="Category"
                  value={category}
                  onChange={handleChangeCategory}
                  SelectProps={{
                    native: true,
                  }}
                >
                  {FASHION_CATEGORY.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
