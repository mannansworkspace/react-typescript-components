import { COLORS } from 'config/materialTheme';

export default {
  accordian: {
    backgroundColor: 'transparent',
    backgroundImage: 'none',
    transition: 'all 0.3s ease-in-out',
    boxShadow: 'none',
    '& .MuiAccordionSummary-content  svg': {
      width: '20px !important',
      height: '20px !important',
    },
    '& path': {
      fill: 'white',
    },
    '&:before, .MuiAccordion-root:before': {
      display: 'none',
    },
    '& .MuiAccordionSummary-root': {
      color: 'white !important',
      marginBlock: '0 !important',
      paddingInline: '14px !important',
    },
    '& .MuiAccordionDetails-root .MuiAccordionSummary-root': {
      paddingRight: '0 !important',
      paddingLeft: '30px !important',
      minHeight: 'auto !important',
      '& .MuiAccordionSummary-content': {
        marginBlock: '0 !important',
      },
    },
    '& .MuiAccordionDetails-root hr': {
      display: 'none',
    },
    '& .MuiCollapse-root': {
      transition: 'height 300ms ease-in-out',
    },
    '& .MuiAccordionSummary-content': {
      alignItems: 'center !important',
      gap: '10px',
      margin: '6px 0',
    },
    '& .MuiAccordionDetails-root': {
      justifyContent: 'space-between',
      paddingLeft: '40px !important',
      paddingRight: '',
      paddingTop: '0 !important',
      '& svg': {
        fontSize: '20px',
        flex: 0.34,
      },
      '& > .Mui-disabled': {
        '& > p': {
          color: 'gray',
        },
        '& path': {
          fill: 'gray',
        },
      },
      '& > button': {
        paddingInline: '6px !important',
        '& > p': {
          // fontWeight: '900',
          flex: 1,
          textAlign: 'left',
          lineHeight: '1.7',
        },
      },
    },
  },
  accordianIcon: (hover?: boolean, clicked?: boolean) => ({
    padding: '6px',
    ...(hover && {
      '&:hover': {
        borderRadius: '50%',
      },
    }),
    ...(clicked && {
      borderRadius: '50%',
      backgroundColor: `${COLORS.DISABLED} !important`,
      padding: '6px',
    }),
  }),
  accordianDivider: {
    ml: '45px',
    borderColor: 'rgba(255,255,255,0.5)',
    '&:last-child': {
      display: 'none',
    },
  },
  tooltip: {
    '& .MuiTooltip-tooltip': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
      fontSize: '15px',
      maxWidth: '120px',
      maxheight: '20px',
    },
    '& .MuiTooltip-arrow': {
      color: 'black',
    },
  },
};
