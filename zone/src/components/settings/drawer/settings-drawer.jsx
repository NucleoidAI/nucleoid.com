import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Drawer from '@mui/material/Drawer';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Iconify from '../../iconify';
import Scrollbar from '../../scrollbar';
import BaseOptions from './base-options';
import PresetsOptions from './presets-options';
import { useSettingsContext } from '../context';

// ----------------------------------------------------------------------

export default function SettingsDrawer() {
  const settings = useSettingsContext();

  const renderHead = (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ py: 2, pr: 1, pl: 2.5 }}
    >
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Settings
      </Typography>

      <Tooltip title="Reset">
        <IconButton onClick={settings.onReset}>
          <Badge color="error" variant="dot" invisible={!settings.canReset}>
            <Iconify icon="solar:restart-bold" />
          </Badge>
        </IconButton>
      </Tooltip>

      <IconButton onClick={settings.onClose}>
        <Iconify icon="mingcute:close-line" />
      </IconButton>
    </Stack>
  );

  const renderMode = (
    <BaseOptions
      title="Mode"
      selected={settings.themeMode === 'dark'}
      onClick={() =>
        settings.onUpdate('themeMode', settings.themeMode === 'dark' ? 'light' : 'dark')
      }
      icons={['carbon:asleep', 'carbon:asleep-filled']}
    />
  );

  const renderDirection = (
    <BaseOptions
      title="Direction"
      selected={settings.themeDirection === 'rtl'}
      onClick={() =>
        settings.onUpdate('themeDirection', settings.themeDirection === 'rtl' ? 'ltr' : 'rtl')
      }
      icons={['carbon:align-horizontal-right', 'carbon:align-horizontal-left']}
    />
  );

  const renderPresets = (
    <PresetsOptions
      value={settings.themeColorPresets}
      onChange={(event) => settings.onUpdate('themeColorPresets', event.target.value)}
    />
  );

  return (
    <Drawer
      open={settings.open}
      anchor="right"
      PaperProps={{
        sx: {
          width: 280,
        },
      }}
      onClose={settings.onClose}
    >
      {renderHead}

      <Divider />

      <Scrollbar>
        <Box sx={{ pb: 10 }}>
          {renderMode}

          {renderDirection}

          {renderPresets}
        </Box>
      </Scrollbar>
    </Drawer>
  );
}
