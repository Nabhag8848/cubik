import { tabsAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

const cubik = definePartsStyle((props) => {
  const { colorScheme: c } = props; // extract colorScheme from component props

  return {
    tablist: {
      width: '100%',
      backgroundColor: 'transparent',
      gap: { base: '10px', md: '32px' },
    },
    tab: {
      padding: '8px 8px 12px 8px',
      fontWeight: '600',
      fontSize: { base: '16px', md: '18px' },
      lineHeight: { base: '16px', md: '22px' },
      backgroundColor: 'transparent',
      borderBottom: '1px solid transparent',
      color: 'neutral.7',
      mb: '-1px',
      _hover: {
        borderBottom: '1px solid transparent',
        color: 'neutral.7',
        mb: '-1px',
      },
      _selected: {
        borderBottom: '1px solid',
        borderColor: 'brand.teal5',
        color: 'brand.teal6',
        mb: '-1px',
      },
    },
    tabpanel: {
      padding: '32px 0px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      justifyContent: 'start',
      gap: '32px',
      backgroundColor: 'transparent',
    },
  };
});

const variants = {
  cubik: cubik,
};

// export the component theme
export const Tabs = defineMultiStyleConfig({ variants });
