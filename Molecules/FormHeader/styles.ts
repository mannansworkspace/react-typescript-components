import { COLORS } from 'config/materialTheme';

export default {
  wrapper: {
    width: '100%',
    position: 'sticky',
    top: '0px',
    zIndex: 999,
    bgcolor: COLORS.BLACK,
    display: 'flex',
    justifyContent: 'space-between',
    paddingBlock: '8px',
    boxShadow: '0 -12px 8px black',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
  },
};
