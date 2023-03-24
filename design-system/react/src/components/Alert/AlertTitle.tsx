/* eslint-disable @typescript-eslint/naming-convention */
import { createElement } from 'react';

import { createComponent2, createPolymorphicComponent } from '../../utils';
import { Heading } from '../Heading';

import { styles } from './styles';
import type * as t from './types';

import { useStyles, useElementProps } from '~/hooks';
import { Components } from '~/types';

const _AlertTitle = createComponent2<t.AlertTitleDef>(
  Components.AlertTitle,
  ({ as = 'header', children, ...props }) => {
    const classes = useStyles(styles);
    const elementProps = useElementProps(props, classes.title);
    return createElement(
      as,
      elementProps,
      <Heading as="h2">{children}</Heading>
    );
  }
);

export const AlertTitle =
  createPolymorphicComponent<t.AlertTitleDef>(_AlertTitle);
