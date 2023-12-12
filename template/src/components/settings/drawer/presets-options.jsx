import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import { alpha, styled } from '@mui/material/styles';
import CardActionArea from '@mui/material/CardActionArea';
import FormControlLabel from '@mui/material/FormControlLabel';

import { presetOptions } from 'src/theme/options/presets';

// ----------------------------------------------------------------------

const BOX_BORDER_RADIUS = 1.5;

const StyledBoxWrap = styled('div')(() => ({
  height: 104,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledBoxPrimary = styled('div')(() => ({
  width: 64,
  height: 64,
  overflow: 'hidden',
  borderRadius: '50%',
  position: 'relative',
}));

const StyledBoxSecondary = styled('div')(({ theme }) => ({
  top: 0,
  bottom: 0,
  right: 0,
  margin: 'auto',
  width: '50%',
  height: '120%',
  position: 'absolute',
  borderRadius: '50%',
  [theme.breakpoints.up('md')]: {
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.complex,
      easing: theme.transitions.easing.sharp,
    }),
  },
}));

// ----------------------------------------------------------------------

export default function PresetsOptions({ value, onChange }) {
  return (
    <Box sx={{ px: 3 }}>
      <Typography variant="subtitle2" sx={{ py: 3 }}>
        Presets
      </Typography>

      <RadioGroup
        dir="ltr"
        value={value}
        onChange={onChange}
        sx={{ gap: 2, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}
      >
        {presetOptions.map((color) => (
          <OptionItem
            key={color.name}
            colorName={color.name}
            primaryColor={color.value[0]}
            secondaryColor={color.value[1]}
            selected={color.name === value}
          />
        ))}
      </RadioGroup>
    </Box>
  );
}

PresetsOptions.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

// ----------------------------------------------------------------------

function OptionItem({ colorName, selected, primaryColor, secondaryColor }) {
  return (
    <Paper
      variant={selected ? 'elevation' : 'outlined'}
      sx={{
        borderRadius: BOX_BORDER_RADIUS,
        ...(selected && {
          bgcolor: alpha(primaryColor, 0.08),
          border: `solid 1px ${primaryColor}`,
          boxShadow: `inset 0 4px 12px 0 ${alpha(primaryColor, 0.32)}`,
        }),
      }}
    >
      <CardActionArea sx={{ borderRadius: BOX_BORDER_RADIUS, color: primaryColor }}>
        <StyledBoxWrap>
          <StyledBoxPrimary sx={{ bgcolor: primaryColor }}>
            <StyledBoxSecondary
              sx={{
                bgcolor: secondaryColor,
                ...(selected && {
                  transformOrigin: 'left',
                  transform: 'rotate(25deg)',
                }),
              }}
            />
          </StyledBoxPrimary>
        </StyledBoxWrap>

        <FormControlLabel
          label=""
          value={colorName}
          control={<Radio sx={{ display: 'none' }} />}
          sx={{
            top: 0,
            margin: 0,
            width: 1,
            height: 1,
            position: 'absolute',
          }}
        />
      </CardActionArea>
    </Paper>
  );
}

OptionItem.propTypes = {
  selected: PropTypes.bool,
  colorName: PropTypes.string,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
};
