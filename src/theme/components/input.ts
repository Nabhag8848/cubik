import { ComponentStyleConfig } from '@chakra-ui/react';

export const Input: ComponentStyleConfig = {
  baseStyle: {
    field: {
      background: '#0F0F0F',
      boxShadow: 'none',
      _focus: {
        background: '#0F0F0F',
        boxShadow: '0 0 0 1px #141414',
      },
      _hover: {
        background: '#0F0F0F',
        boxShadow: '0 0 0 1px #141414',
      },
    },
  },
  sizes: {
    md: {
      field: {
        backgroundColor: '#0F0F0F',
        rounded: '8px',
        border: 'none',
        fontSize: '14px',
        height: '40px',
        _focus: {
          backgroundColor: '#0F0F0F',
          boxShadow: '0 0 0 1px #A8F0E6',
          borderColor: '#A8F0E6',
          rounded: '8px',
        },
        _hover: {
          backgroundColor: '#0F0F0F',
          boxShadow: '0 0 0 1px #A8F0E6',
          borderColor: '#A8F0E6',
          rounded: '8px',
        },
        _active: {
          border: '1px solid #A8F0E6',
          boxShadow: '0 0 0 1px #A8F0E6',
          rounded: '8px',
        },
        _required: {
          color: '#A8F0E6',
          rounded: '8px',
        },
        _invalid: {
          color: '#A8F0E6',
          rounded: '8px',
        },
      },
    },
  },
  variants: {
    outline: {
      field: {
        background: '#0F0F0F',
        outline: '1px solid #141414',
        boxShadow: 'none',
        fontSize: '14px',
        borderRadius: '8px',
        height: '40px',
        borderColor: 'transparent',
        _focus: {
          borderColor: '#A8F0E6 !important',
          background: '#0F0F0F',
          boxShadow: '0 0 0 1px #A8F0E6 !important',
          borderRadius: '8px',
          outlineColor: '#A8F0E6',
        },
        _hover: {
          borderColor: '#A8F0E6',
          boxShadow: '0 0 0 1px #A8F0E6',
          borderRadius: '8px',
          outlineColor: '#A8F0E6',
        },
        _active: {
          borderColor: '#A8F0E6',
          borderRadius: '8px',
          boxShadow: '0 0 0 1px #A8F0E6',
          outlineColor: '#A8F0E6',
        },
        _required: {
          borderColor: '#A8F0E6',
          borderRadius: '8px',
          boxShadow: '0 0 0 1px #A8F0E6',
          outlineColor: '#A8F0E6',
        },
        _invalid: {
          color: '#A8F0E6',
          rounded: '8px',
        },
        _placeholder: {
          fontSize: '14px',
          color: '#636666',
        },
      },
      addon: {
        color: '#ADB8B6',
        fontSize: '14px',
        fontWeight: '400',
        background: '#0F0F0F',
        boxShadow: 'none',
        outline: '1px solid #141414',
        border: 'none',
      },
    },
    filled: {
      field: {
        background: '#0F0F0F',
        outline: '1px solid #141414',
        borderColor: '#141414',
        _focus: {
          background: '#0F0F0F',
          boxShadow: '0 0 0 1px #141414',
        },
        _hover: {
          background: '#0F0F0F',
          boxShadow: '0 0 0 1px #141414',
        },
      },
    },
    flushed: {
      field: {
        background: '#0F0F0F',
        outline: '1px solid #141414',
        borderColor: '#141414',
        borderRadius: 0,
        paddingX: 0,
        _focus: {
          background: '#0F0F0F',
          boxShadow: '0 0 0 1px #141414',
        },
        _hover: {
          background: '#0F0F0F',
          boxShadow: '0 0 0 1px #141414',
        },
      },
    },
    withAddOn: {
      field: {
        background: '#0F0F0F',
        outline: '1px solid #141414',
        boxShadow: 'none',
        fontSize: '14px',
        borderRadius: '8px',
        height: '40px',
        borderColor: 'transparent',
        _focus: {
          borderColor: '#A8F0E6 !important',
          background: '#0F0F0F',
          boxShadow: '0 0 0 1px #A8F0E6 !important',
          borderRadius: '8px',
          outlineColor: '#A8F0E6',
        },
        _hover: {
          borderColor: '#A8F0E6',
          boxShadow: '0 0 0 1px #A8F0E6',
          borderRadius: '8px',
          outlineColor: '#A8F0E6',
        },
        _active: {
          borderColor: '#A8F0E6',
          borderRadius: '8px',
          boxShadow: '0 0 0 1px #A8F0E6',
          outlineColor: '#A8F0E6',
        },
        _required: {
          borderColor: '#A8F0E6',
          borderRadius: '8px',
          boxShadow: '0 0 0 1px #A8F0E6',
          outlineColor: '#A8F0E6',
        },
        _invalid: {
          color: '#A8F0E6',
          rounded: '8px',
        },
        _placeholder: {
          fontSize: '14px',
          color: '#636666',
        },
      },
      addon: {
        color: '#ADB8B6',
        fontSize: '14px',
        fontWeight: '400',
        background: 'red',
        boxShadow: 'none',
        outline: '1px solid #141414',
        border: 'none',
      },
    },
    unstyled: {
      field: {
        background: '#0F0F0F',
        borderRadius: 'md',
        height: 'auto',
        paddingX: 0,
        _focus: {
          background: '#0F0F0F',
          boxShadow: '0 0 0 1px #141414',
        },
        _hover: {
          background: '#0F0F0F',
          boxShadow: '0 0 0 1px #141414',
        },
      },
    },
  },
  defaultProps: {
    /**
     * Set either or both of these to null to use only what's in { baseStyle }
     */
    size: 'md',
    variant: 'outline',
  },
};
