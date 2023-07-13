import { cx } from "@fuel-ui/css"

import { createComponent } from "../../utils"
import type { FlexProps } from "../Box/Flex"
import { Flex } from "../Box/Flex"

import { CardBody } from "./CardBody"
import { CardFooter } from "./CardFooter"
import { CardHeader } from "./CardHeader"
import * as styles from "./styles"

export type CardProps = FlexProps & {
  withDividers?: boolean
}

type ObjProps = {
  id: string
  Header: typeof CardHeader
  Body: typeof CardBody
  Footer: typeof CardFooter
}

export const Card = createComponent<CardProps, ObjProps>(
  ({ direction = "column", withDividers, children, className, ...props }) => {
    const classes = cx("fuel_Card", className, styles.card())
    const customProps = { ...props, direction, className: classes }

    return (
      <Flex as="article" {...customProps} data-dividers={withDividers}>
        {children}
      </Flex>
    )
  },
)

Card.id = "Card"
Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter
