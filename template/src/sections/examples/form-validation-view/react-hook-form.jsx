import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';

import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Backdrop from '@mui/material/Backdrop';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CircularProgress from '@mui/material/CircularProgress';

import { useBoolean } from 'src/hooks/use-boolean';

import Iconify from 'src/components/iconify';
import FormProvider, {
  RHFSelect,
  RHFSwitch,
  RHFSlider,
  RHFCheckbox,
  RHFTextField,
  RHFRadioGroup,
  RHFMultiSelect,
  RHFAutocomplete,
  RHFMultiCheckbox,
} from 'src/components/hook-form';

import { FormSchema } from './schema';
import ValuesPreview from './values-preview';

// ----------------------------------------------------------------------

const OPTIONS = [
  { value: 'option 1', label: 'Option 1' },
  { value: 'option 2', label: 'Option 2' },
  { value: 'option 3', label: 'Option 3' },
  { value: 'option 4', label: 'Option 4' },
  { value: 'option 5', label: 'Option 5' },
  { value: 'option 6', label: 'Option 6' },
  { value: 'option 7', label: 'Option 7' },
  { value: 'option 8', label: 'Option 8' },
];

export const defaultValues = {
  age: 0,
  email: '',
  fullName: '',
  //
  editor: '',
  switch: false,
  radioGroup: '',
  autocomplete: null,
  //
  password: '',
  confirmPassword: '',
  //
  startDate: new Date(),
  endDate: null,
  //
  singleSelect: '',
  multiSelect: [],
  //
  checkbox: false,
  multiCheckbox: [],
  //
  slider: 8,
  sliderRange: [15, 80],
};

export default function ReactHookForm({ debug }) {
  const passwordShow = useBoolean();

  const methods = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues,
  });

  const {
    reset,
    control,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log('DATA', data);
    reset();
  });

  return (
    <>
      {isSubmitting && (
        <Backdrop open sx={{ zIndex: (theme) => theme.zIndex.modal + 1 }}>
          <CircularProgress color="primary" />
        </Backdrop>
      )}

      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Grid container spacing={5}>
          <Grid xs={12} md={6}>
            <Stack spacing={2}>
              <Block>
                <RHFTextField name="fullName" label="Full Name" />
              </Block>

              <Block>
                <RHFTextField name="email" label="Email address" />
              </Block>

              <Block>
                <RHFTextField
                  name="age"
                  label="Age"
                  onChange={(event) =>
                    setValue('age', Number(event.target.value), {
                      shouldValidate: true,
                    })
                  }
                  InputProps={{
                    type: 'number',
                  }}
                />
              </Block>

              <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
                <Controller
                  name="startDate"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <DatePicker
                      {...field}
                      label="Start date"
                      format="dd/MM/yyyy"
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          error: !!error,
                          helperText: error?.message,
                        },
                      }}
                    />
                  )}
                />

                <Controller
                  name="endDate"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <DatePicker
                      {...field}
                      label="End date"
                      format="dd/MM/yyyy"
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          error: !!error,
                          helperText: error?.message,
                        },
                      }}
                    />
                  )}
                />
              </Stack>

              <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
                <Block>
                  <RHFTextField
                    name="password"
                    label="Password"
                    type={passwordShow.value ? 'text' : 'password'}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={passwordShow.onToggle} edge="end">
                            <Iconify
                              icon={passwordShow.value ? 'eva:eye-fill' : 'eva:eye-off-fill'}
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Block>

                <Block>
                  <RHFTextField
                    name="confirmPassword"
                    label="Confirm Password"
                    type={passwordShow.value ? 'text' : 'password'}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={passwordShow.onToggle} edge="end">
                            <Iconify
                              icon={passwordShow.value ? 'eva:eye-fill' : 'eva:eye-off-fill'}
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Block>
              </Stack>

              <Block label="RHFAutocomplete">
                <RHFAutocomplete
                  name="autocomplete"
                  label="Autocomplete"
                  options={OPTIONS}
                  getOptionLabel={(option) => option.label}
                  isOptionEqualToValue={(option, value) => option.value === value.value}
                  renderOption={(props, option) => (
                    <li {...props} key={option.value}>
                      {option.label}
                    </li>
                  )}
                />
              </Block>

              <Block label="RHFSelect">
                <RHFSelect name="singleSelect" label="Single select">
                  <MenuItem value="">None</MenuItem>
                  <Divider sx={{ borderStyle: 'dashed' }} />
                  {OPTIONS.map((option) => (
                    <MenuItem key={option.value} value={option.label}>
                      {option.label}
                    </MenuItem>
                  ))}
                </RHFSelect>
              </Block>

              <Block label="RHFMultiSelect">
                <RHFMultiSelect
                  chip
                  checkbox
                  name="multiSelect"
                  label="Multi select"
                  options={OPTIONS}
                />
              </Block>
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack spacing={2}>
              <RHFCheckbox name="checkbox" label="RHFCheckbox" />

              <RHFSwitch name="switch" label="RHFSwitch" />

              <RHFRadioGroup
                row
                name="radioGroup"
                label="RHFRadioGroup"
                spacing={4}
                options={[
                  { value: 'option 1', label: 'Radio 1' },
                  { value: 'option 2', label: 'Radio 2' },
                  { value: 'option 3', label: 'Radio 3' },
                ]}
              />

              <RHFMultiCheckbox
                row
                name="multiCheckbox"
                label="RHFMultiCheckbox"
                spacing={4}
                options={[
                  { value: 'option 1', label: 'Checkbox 1' },
                  { value: 'option 2', label: 'Checkbox 2' },
                  { value: 'option 3', label: 'Checkbox 3' },
                ]}
              />

              <Block label="RHFSlider">
                <RHFSlider name="slider" />
              </Block>

              <Block label="RHFSlider">
                <RHFSlider name="sliderRange" />
              </Block>

              <LoadingButton
                fullWidth
                color="inherit"
                size="large"
                type="submit"
                variant="contained"
                loading={isSubmitting}
              >
                Submit to check
              </LoadingButton>
            </Stack>
          </Grid>
        </Grid>

        {debug && <ValuesPreview />}
      </FormProvider>
    </>
  );
}

ReactHookForm.propTypes = {
  debug: PropTypes.bool,
};

// ----------------------------------------------------------------------

function Block({ label = 'RHFTextField', sx, children }) {
  return (
    <Stack spacing={1} sx={{ width: 1, ...sx }}>
      <Typography
        variant="caption"
        sx={{
          textAlign: 'right',
          fontStyle: 'italic',
          color: 'text.disabled',
        }}
      >
        {label}
      </Typography>
      {children}
    </Stack>
  );
}

Block.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  sx: PropTypes.object,
};
