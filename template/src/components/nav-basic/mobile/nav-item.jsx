import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { alpha, styled } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';

import { RouterLink } from 'src/routes/components';

import Iconify from '../../iconify';

// ----------------------------------------------------------------------

const NavItem = forwardRef(
  ({ title, path, icon, caption, depth, open, active, hasChild, externalLink, ...other }, ref) => {
    const renderContent = (
      <StyledNavItem
        ref={ref}
        open={open}
        depth={depth}
        active={active}
        hasChild={hasChild}
        {...other}
      >
        {icon && (
          <Box component="span" className="icon">
            {icon}
          </Box>
        )}

        <Box component="span" className="text-container">
          {title && (
            <Box component="span" className="label">
              {title}
            </Box>
          )}

          {caption && (
            <Box component="span" className="caption">
              {caption}
            </Box>
          )}
        </Box>

        {hasChild && (
          <Iconify
            width={16}
            className="arrow"
            icon={open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
          />
        )}
      </StyledNavItem>
    );

    if (hasChild) {
      return renderContent;
    }

    if (externalLink)
      return (
        <Link href={path} target="_blank" rel="noopener" color="inherit" underline="none">
          {renderContent}
        </Link>
      );

    return (
      <Link component={RouterLink} href={path} color="inherit" underline="none">
        {renderContent}
      </Link>
    );
  }
);

NavItem.propTypes = {
  open: PropTypes.bool,
  path: PropTypes.string,
  active: PropTypes.bool,
  icon: PropTypes.element,
  title: PropTypes.string,
  depth: PropTypes.number,
  caption: PropTypes.bool,
  hasChild: PropTypes.bool,
  externalLink: PropTypes.bool,
};

export default NavItem;

// ----------------------------------------------------------------------

const StyledNavItem = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ active, open, depth, hasChild, theme }) => {
  const subItem = depth !== 1;

  const opened = open && !active;

  const noWrapStyles = {
    width: '100%',
    maxWidth: '100%',
    display: 'block',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  };

  const baseStyles = {
    item: {
      ...theme.typography.body2,
    },
    icon: {
      width: 20,
      height: 20,
      flexShrink: 0,
    },
    textContainer: {
      minWidth: 0,
      flex: '1 1 auto',
      display: 'inline-flex',
      flexDirection: 'column',
    },
    label: {
      ...noWrapStyles,
    },
    caption: {
      ...noWrapStyles,
      ...theme.typography.caption,
      color: theme.palette.text.disabled,
    },
    arrow: {
      flexShrink: 0,
      marginLeft: theme.spacing(0.75),
    },
  };

  return {
    // Root item
    ...(!subItem && {
      ...baseStyles.item,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(hasChild ? 1 : 3),
      fontWeight: theme.typography.fontWeightMedium,
      '& .icon': {
        ...baseStyles.icon,
        marginRight: theme.spacing(2),
      },
      '& .text-container': {
        ...baseStyles.textContainer,
      },
      '& .label': {
        ...baseStyles.label,
      },
      '& .caption': {
        ...baseStyles.caption,
      },
      '& .arrow': {
        ...baseStyles.arrow,
      },
      ...(active && {
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightSemiBold,
        backgroundColor: alpha(theme.palette.primary.main, 0.08),
        '&:hover': {
          backgroundColor: alpha(theme.palette.primary.main, 0.16),
        },
      }),
      ...(opened && {
        backgroundColor: theme.palette.action.hover,
      }),
    }),

    // Sub item
    ...(subItem && {
      ...baseStyles.item,
      fontSize: 13,
      minHeight: 32,
      color: theme.palette.text.secondary,
      padding: theme.spacing(1, hasChild ? 1 : 3, 1, Number(depth) * 2 - 1),
      '&:before': {
        content: '""',
        width: 1,
        height: '100%',
        position: 'absolute',
        backgroundColor: theme.palette.divider,
        ...(active && {
          backgroundColor: theme.palette.text.primary,
        }),
      },
      '& .icon': {
        ...baseStyles.icon,
        marginLeft: theme.spacing(2),
      },
      '& .text-container': {
        ...baseStyles.textContainer,
        marginLeft: theme.spacing(2),
      },
      '& .label': {
        ...baseStyles.label,
      },
      '& .caption': {
        ...baseStyles.caption,
      },
      '& .arrow': {
        ...baseStyles.arrow,
      },
      ...(active && {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.action.selected,
        fontWeight: theme.typography.fontWeightSemiBold,
      }),
      ...(opened && {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.action.hover,
      }),
    }),
  };
});
