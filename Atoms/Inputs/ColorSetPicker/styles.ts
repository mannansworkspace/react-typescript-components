import { COLORS } from 'config/materialTheme';

export default {
  select: {
    width: '100%',
    color: 'white',
    backgroundColor: COLORS.PRIMARY,
    borderRadius: '10px',
    '& .MuiSelect-select': {
      padding: '1rem',
      minHeight: '1.3rem',
    },
    '& .MuiSelect-select .colorPalette': { marginTop: '3px' },
  },
  menu: {
    '& .MuiList-root': {
      backgroundColor: COLORS.DARK,
    },
  },
};
