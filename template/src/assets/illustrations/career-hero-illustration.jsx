import { memo } from 'react';
import { m } from 'framer-motion';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import { useHoverParallax } from 'src/hooks/use-hover-parallax';

import Image from 'src/components/image';
import SvgColor from 'src/components/svg-color';

import Icon from './pattern/icon';
import Label from './pattern/label';
import Character from './pattern/character';
import Pattern02 from './pattern/pattern-02';
import Pattern01 from './pattern/pattern-01';

// ----------------------------------------------------------------------

const stylesIcon = {
  width: 40,
  height: 40,
  color: 'common.black',
};

// ----------------------------------------------------------------------

function CareerHeroIllustration({ sx, ...other }) {
  const theme = useTheme();

  const { offsetX, offsetY, onMouseMoveHandler, onMouseLeaveHandler } = useHoverParallax();

  const BLUE = theme.palette.info.main;

  const GREEN = theme.palette.success.main;

  const YELLOW = theme.palette.warning.main;

  return (
    <Box
      component={m.div}
      onMouseMove={onMouseMoveHandler}
      onMouseLeave={onMouseLeaveHandler}
      sx={{
        width: 564,
        height: 564,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
        ...sx,
      }}
      {...other}
    >
      <>
        <Character front sx={{ position: 'absolute', bottom: 16, zIndex: 10, width: 300 }} />
        {/* Accounting */}
        <Box
          sx={{
            top: 170,
            zIndex: 9,
            position: 'absolute',
            transform: 'translateX(-125px) rotate(-15deg)',
          }}
        >
          <m.div style={{ y: offsetY(-50) }}>
            <Label
              text="Accounting"
              icon={
                <Image
                  alt="accounting"
                  src="/assets/icons/ic_accounting.svg"
                  sx={{ width: 48, height: 48 }}
                />
              }
            />
          </m.div>
        </Box>
        <Character sx={{ position: 'absolute', bottom: 16, zIndex: 8, width: 300 }} />
      </>

      {/* Banking */}
      <Box
        sx={{
          position: 'absolute',
          transform: 'translate(175px, 90px) rotate(15deg)',
        }}
      >
        <m.div style={{ x: offsetX(80), y: offsetY(80) }}>
          <Label
            text="Banking"
            icon={
              <Image
                alt="banking"
                src="/assets/icons/ic_banking_currency.svg"
                sx={{ width: 48, height: 48 }}
              />
            }
          />
        </m.div>
      </Box>

      {/* Health Care */}
      <Box
        sx={{
          position: 'absolute',
          transform: 'translate(170px, -110px) rotate(15deg)',
        }}
      >
        <m.div style={{ y: offsetY(80) }}>
          <Label
            text="Health Care"
            icon={
              <Image
                alt="health care"
                src="/assets/icons/ic_health_care.svg"
                sx={{ width: 48, height: 48 }}
              />
            }
          />
        </m.div>
      </Box>

      {/* Software */}
      <Box
        sx={{
          zIndex: 10,
          bottom: 160,
          position: 'absolute',
          transform: 'translateX(-110px)',
        }}
      >
        <m.div style={{ y: offsetY(-60) }}>
          <Label
            text="Software"
            icon={
              <Image
                alt="software development"
                src="/assets/icons/ic_software_development.svg"
                sx={{ width: 48, height: 48 }}
              />
            }
          />
        </m.div>
      </Box>

      {/* Icon */}
      <Box sx={{ position: 'absolute', top: 16, transform: 'translateX(20px)' }}>
        <m.div style={{ x: offsetX(50), y: offsetY(50) }}>
          <Icon
            color={YELLOW}
            content={<SvgColor src="/assets/icons/ic_creativity.svg" sx={{ ...stylesIcon }} />}
          />
        </m.div>
      </Box>

      {/* Icon */}
      <Box sx={{ position: 'absolute', bottom: 16, transform: 'translateX(40px)' }}>
        <m.div style={{ x: offsetX(-60), y: offsetY(60) }}>
          <Icon
            color={GREEN}
            content={
              <SvgColor src="/assets/icons/ic_marketing_bullhorn.svg" sx={{ ...stylesIcon }} />
            }
          />
        </m.div>
      </Box>

      {/* Icon */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 220,
          transform: 'translateX(-220px)',
        }}
      >
        <m.div style={{ x: offsetX(70), y: offsetY(70) }}>
          <Icon
            color={BLUE}
            content={
              <SvgColor src="/assets/icons/ic_customer_service.svg" sx={{ ...stylesIcon }} />
            }
          />
        </m.div>
      </Box>

      <Pattern01 />

      <Pattern02 />
    </Box>
  );
}

CareerHeroIllustration.propTypes = {
  sx: PropTypes.object,
};

export default memo(CareerHeroIllustration);
