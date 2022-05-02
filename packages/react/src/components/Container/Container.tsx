import { createComponent, HTMLProps } from '@/utils'
import { css, cx } from '@fuel-js/css'
import { createElement } from 'react'

export type ContainerSizes = 'sm' | 'md' | 'lg' | 'xl'
export type ContainerProps = HTMLProps['div'] & {
  size?: ContainerSizes
}

export const Container = createComponent<ContainerProps, HTMLDivElement>(
  ({ as = 'div', className, children, size, ...props }) => {
    const classes = cx(className, styles({ size }))
    return createElement(as, { ...props, className: classes }, children)
  }
)

const styles = css({
  margin: '0 auto',

  variants: {
    size: {
      sm: {
        px: '$10',
        w: '$xl',
      },
      md: {
        px: '$14',
        w: '$2xl',
      },
      lg: {
        px: '$14',
        w: '$4xl',
      },
      xl: {
        px: '$14',
        w: '$6xl',
      },
    },
  },

  defaultVariants: {
    size: 'lg',
  },
})
