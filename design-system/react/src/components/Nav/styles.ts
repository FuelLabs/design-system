import { createStyle } from '~/hooks';
import { Components } from '~/utils/components-list';

export const styles = createStyle(Components.Nav, {
  logo: {},
  menu: {},
  menuItem: {
    position: 'relative',
    height: '$16',

    '&[data-active=true]::before': {
      position: 'absolute',
      display: 'block',
      content: '""',
      top: 0,
      left: 0,
      width: '$full',
      height: '2px',
      bg: '$brand',
    },
  },
  spacer: {
    border: '$none',
  },
  connection: {
    alignItems: 'center',
  },
  network: {
    height: '$8 !important',
  },
  themeToggle: {
    position: 'relative',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    px: '$2',
    width: '$8',
    height: '$8',
    borderRadius: '$full',
    border: '1px solid $border',

    '[aria-label*="Icon"]': {
      position: 'absolute',
      transition: 'all 0.2s ease',
    },
    '[aria-label*="Sun"]': {
      right: 8,
      color: '$textColor',
    },
    '[aria-label*="MoonStars"]': {
      left: 8,
      color: '$intentsInfo10',
    },

    '&[data-theme="light"]': {
      '[aria-label*="MoonStars"]': {
        transform: 'translateX(100%)',
        visibility: 'hidden',
        opacity: 0,
      },
    },
    '&[data-theme="dark"]': {
      '[aria-label*="Sun"]': {
        transform: 'translateX(-100%)',
        visibility: 'hidden',
        opacity: 0,
      },
    },
  },
  avatar: {},
  view: {
    display: 'flex',
    alignItems: 'center',
    height: '$16',

    variants: {
      type: {
        desktop: {
          gap: '$8',
          px: '$14',
          maxW: '$2xl',
          margin: '0 auto',
          borderBottom: '1px solid $border',
          flexDirection: 'row',
        },
        mobile: {
          flexDirection: 'column',
        },
      },
    },

    defaultVariants: {
      type: 'desktop',
    },
  },
});