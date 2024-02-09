import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

const StyledMarkdown = styled('div', {
  shouldForwardProp: (prop) => prop !== 'firstLetter',
})(({ firstLetter, theme }) => ({
  // Text
  h1: { margin: 0, ...theme.typography.h1 },
  h2: { margin: 0, ...theme.typography.h2 },
  h3: { margin: 0, ...theme.typography.h3 },
  h4: { margin: 0, ...theme.typography.h4 },
  h5: { margin: 0, ...theme.typography.h5 },
  h6: { margin: 0, ...theme.typography.h6 },
  p: { margin: 0, ...theme.typography.body1 },

  br: {
    display: 'grid',
    content: '""',
    marginTop: '0.75em',
  },

  // Link
  a: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },

  // List
  '& ul, & ol': {
    margin: 0,
    '& li': {
      lineHeight: 2,
    },
  },

  // Divider
  hr: {
    margin: 0,
    flexShrink: 0,
    borderWidth: 0,
    msFlexNegative: 0,
    WebkitFlexShrink: 0,
    borderStyle: 'solid',
    borderBottomWidth: 'thin',
    borderColor: theme.palette.divider,
  },

  // Blockquote
  '& blockquote': {
    lineHeight: 1.5,
    fontSize: '1.5em',
    margin: '40px auto',
    position: 'relative',
    fontFamily: 'Georgia, serif',
    padding: theme.spacing(3, 3, 3, 8),
    color: theme.palette.text.secondary,
    borderRadius: theme.shape.borderRadius * 2,
    backgroundColor: theme.palette.background.neutral,
    [theme.breakpoints.up('md')]: {
      width: '80%',
    },
    '& p, & span': {
      marginBottom: 0,
      fontSize: 'inherit',
      fontFamily: 'inherit',
    },
    '&:before': {
      left: 16,
      top: -8,
      display: 'block',
      fontSize: '3em',
      content: '"\\201C"',
      position: 'absolute',
      color: theme.palette.text.disabled,
    },
  },

  // Image
  '& img': {
    borderRadius: theme.spacing(1),
  },

  // Table
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    border: `1px solid ${theme.palette.divider}`,
    'th, td': {
      padding: theme.spacing(1),
      border: `1px solid ${theme.palette.divider}`,
    },
    'tbody tr:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.neutral,
    },
  },

  // Checkbox
  input: {
    '&[type=checkbox]': {
      position: 'relative',
      cursor: 'pointer',
      '&:before': {
        content: '""',
        top: -2,
        left: -2,
        width: 17,
        height: 17,
        borderRadius: 3,
        position: 'absolute',
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 300 : 700],
      },
      '&:checked': {
        '&:before': {
          backgroundColor: theme.palette.primary.main,
        },
        '&:after': {
          content: '""',
          top: 1,
          left: 5,
          width: 4,
          height: 9,
          position: 'absolute',
          transform: 'rotate(45deg)',
          msTransform: 'rotate(45deg)',
          WebkitTransform: 'rotate(45deg)',
          border: `solid ${theme.palette.common.white}`,
          borderWidth: '0 2px 2px 0',
        },
      },
    },
  },

  // First Letter
  ...(firstLetter && {
    '& > p:first-of-type': {
      '&:first-letter': {
        float: 'left',
        fontSize: 80,
        lineHeight: 1,
        paddingRight: theme.spacing(2),
        fontWeight: theme.typography.fontWeightBold,
      },
    },
  }),
}));

export default StyledMarkdown;
