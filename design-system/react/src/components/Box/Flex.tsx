/* eslint-disable @typescript-eslint/naming-convention */
import { createElement } from 'react';

import {
  _unstable_createComponent,
  createPolymorphicComponent,
} from '../../utils';

import type * as t from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useElementProps, useStyles } from '~/hooks';

export type FlexProps = t.FlexProps;

const _Flex = _unstable_createComponent<t.FlexDef>(
  Components.Flex,
  ({ as = 'div', css, ...props }) => {
    const { direction, align, justify, wrap, basis, grow, shrink, gap } = props;
    const classes = useStyles(styles, {
      css: {
        gap,
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap,
        flexBasis: basis,
        flexGrow: grow,
        flexShrink: shrink,
        display: 'flex',
        ...css,
      },
    });
    const elementProps = useElementProps(props, classes.flex);
    return createElement(as, elementProps);
  }
);

export const Flex = createPolymorphicComponent<t.FlexDef>(_Flex);
