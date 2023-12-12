import { useState, useCallback } from 'react';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Unstable_Grid2';

import { useBoolean } from 'src/hooks/use-boolean';

import ContainerView from './container';
import ControlPanel from '../control-panel';

// ----------------------------------------------------------------------

export default function DialogView() {
  const dialogOpen = useBoolean();

  const [selectVariant, setSelectVariant] = useState('slideInUp');

  const handleChangeVariant = useCallback((event) => {
    setSelectVariant(event.target.value);
  }, []);

  return (
    <Card sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid xs={12} md={9}>
          <ContainerView
            open={dialogOpen.value}
            onOpen={dialogOpen.onTrue}
            onClose={dialogOpen.onFalse}
            selectVariant={selectVariant}
          />
        </Grid>
        <Grid xs={12} md={3}>
          <ControlPanel
            variantKey={variantKey}
            selectVariant={selectVariant}
            onChangeVariant={handleChangeVariant}
          />
        </Grid>
      </Grid>
    </Card>
  );
}

// ----------------------------------------------------------------------

const variantKey = [
  {
    type: 'slide',
    values: ['slideInUp', 'slideInDown', 'slideInLeft', 'slideInRight'],
  },
  {
    type: 'fade',
    values: ['fadeIn', 'fadeInUp', 'fadeInDown', 'fadeInLeft', 'fadeInRight'],
  },
  {
    type: 'zoom',
    values: ['zoomIn', 'zoomInUp', 'zoomInDown', 'zoomInLeft', 'zoomInRight'],
  },
  {
    type: 'bounce',
    values: ['bounceIn', 'bounceInUp', 'bounceInDown', 'bounceInLeft', 'bounceInRight'],
  },
  {
    type: 'flip',
    values: ['flipInX', 'flipInY'],
  },
  {
    type: 'scale',
    values: ['scaleInX', 'scaleInY'],
  },
  {
    type: 'rotate',
    values: ['rotateIn'],
  },
];
