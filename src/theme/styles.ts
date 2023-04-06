import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';
import '@fontsource/plus-jakarta-sans';

export const styles = {
  global: (props: StyleFunctionProps) => ({
    fonts: {
      heading: `'Plus Jakarta Sans', sans-serif`,
      body: `'Plus Jakarta Sans', sans-serif`,
    },
    body: {
      bg: mode('#000000', '#000000')(props),
      color: mode('#E0FFFD', '#E0FFFD')(props),
      '::-webkit-scrollbar': {
        display: 'none',
      },
    },
    text: {
      marginTop: '0',
    },
    '.chakra-alert': {
      gap: '1.2rem',
      bg: 'black',
      color: 'white',
    },
    // ---- wallet adapter ui ---
    '.wallet-adapter-modal-overlay': {
      bg: 'rgba(0, 0, 0, 0.72)',
      backdropFilter: 'blur(10px)',
    },
    '.wallet-adapter-modal-wrapper': {
      borderRadius: '20px',
      border: '1px solid #141414',
      backgroundColor: `#08080880`,
      boxShadow: '0px 2px 120px #000000',
      backdropFilter: 'blur(10px)',
      padding: '44px 0px 16px 0px',
      gap: '0px',
      width: '416px',
      overflow: 'hidden',
    },
    '.wallet-adapter-modal-wrapper:before': {
      content: '""',
      zIndex: '-1',
      position: 'absolute',
      bottom: '100%',
      left: '50%',
      transform: 'translate(-50%, 0%)',
      width: '6rem',
      height: '6rem',
      backgroundColor: '#A8F0E6',
      filter: 'blur(120px)',
      borderRadius: 'full',
    },
    '.wallet-adapter-modal-list, .wallet-adapter-collapse': {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: { base: 'nowrap', md: 'wrap' },
      overflow: 'scroll',
      padding: {
        base: '32px 12px 16px 16px !important',
        md: '32px 32px 0px 32px !important',
      },
      gap: { base: '8px', md: '14px' },
    },
    '.wallet-adapter-collapse': {
      //  height: 'full !important',
    },
    '.wallet-adapter-modal-list > li, .wallet-adapter-collapse > li': {
      minW: '5.5rem',
      w: '6.2rem',
      minH: '6rem',
      height: 'full',
      borderRadius: '12px',
      overflow: 'hidden',
      transition: '0.2s linear all',
      border: '1px solid',
      borderColor: 'transparent',
      _hover: {
        transition: '0.2s linear all',
        border: { base: 'none', md: '1px solid #E0FFFD24' },
        boxShadow: { base: 'none', md: '0px 4px 60px #000000' },
      },
    },
    '.wallet-adapter-modal-list > li > button, .wallet-adapter-collapse > li > button':
      {
        minW: '5.5rem',
        width: 'full',
        minH: '6rem',
        height: '6rem',
        padding: '16px',
        borderRadius: '12px',
        gap: { base: '8px', md: '12px' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: { base: 'transparent', md: '#FFFFFF10' },
        fontWeight: '700 !important',
        fontSize: { base: '14px !important', md: '16px !important' },
        lineHeight: '18px',
        transition: '0.2s linear all',
        _hover: {
          transition: '0.2s linear all',
          backgroundColor: {
            base: '#FFFFFF12 !important',
            md: '#FFFFFF16 !important',
          },
        },
      },
    '.wallet-adapter-button-start-icon': {
      margin: '0',
      width: { base: '48px !important', md: '32px !important' },
      height: { base: '48px !important', md: '32px !important' },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '.wallet-adapter-button-start-icon > img': {
      width: { base: '48px !important', md: '32px !important' },
      height: { base: '48px !important', md: '32px !important' },
    },
    '.wallet-adapter-button > span ': {
      display: 'none !important',
    },
    '.wallet-adapter-modal-list-more': {
      display: 'none !important',
    },

    '.wallet-adapter-button wallet-adapter-button-trigger ': {
      display: 'none',
    },

    '.wallet-adapter-modal-button-close': {
      backgroundColor: '#1D1F1E',
      color: 'white',
      padding: '8px',
      top: '32px',
      right: '32px',
    },
    '.wallet-adapter-modal-title': {
      visibility: 'hidden',
      position: 'relative',
      padding: '0px',
      height: '1rem',
    },
    '.wallet-adapter-modal-title:after': {
      visibility: 'visible',
      position: 'absolute',
      top: '-10px',
      left: '32px',
      fontSize: '20px',
      fontWeight: 'bold',
      lineHeight: '28px',
      letterSpacing: '0.02em',
      color: 'white',
      content: '"Connect Wallet"',
    },

    // wallet connect button
    '.wallet-adapter-button-trigger > i': {
      display: 'none !important',
    },

    '.wallet-adapter-button-trigger': {
      color: '#031513',
      backgroundColor: '#A8F0E6',
      //padding: { base: '8px 20px 10px 20px', md: '8px 20px 10px 20px' },
      border: '1px solid rgba(168, 240, 230, 0.6)',
      rounded: '6px',
      fontSize: { base: '12px', md: '14px' },
      fontWeight: '600',
      lineHeight: { base: '18px', md: '22px' },
      height: { base: '2.3rem !important', md: '2.5rem !important' },
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '8px',
      behavior: 'url(PIE.htc)',
      _hover: {
        color: '#14665B',
        backgroundColor: '#E0FFFD !important',
      },
      _active: {
        color: '#031513',
      },
    },

    // react slick
    '.slick-next': {
      right: '0px',
    },
    '.slick-prev': {
      left: '0px',
    },

    //taptap
    '#reset-des blockquote': {
      all: 'revert !important',
    },
    '#reset-des ol': {
      all: 'revert !important',
    },
    '#reset-des li': {
      all: 'revert !important',
    },
    '#reset-des a': {
      all: 'revert !important',
    },
    '#reset-des ul': {
      all: 'revert !important',
    },
    '#reset-des strong': {
      all: 'revert !important',
    },
    '#reset-des br': {
      all: 'revert !important',
    },
    '#reset-des h1': {
      all: 'revert !important',
    },
    '#reset-des h2': {
      all: 'revert !important',
    },
    '#reset-des h3': {
      all: 'revert !important',
    },
    '#reset-des h4': {
      all: 'revert !important',
    },
    '#reset-des h5': {
      all: 'revert !important',
    },
    '#reset-des h6': {
      all: 'revert !important',
    },
    '.ProseMirror': {
      minHeight: '20rem',
      height: 'fit-content',
      border: 'none',
      padding: '0.5rem 1.6rem',
      overflow: 'scroll',
      _focus: {
        outline: 'none',
      },

      '&::-moz-focus-inner': {
        border: 'none',
        outline: 'none !important',
      },
    },
  }),
};
