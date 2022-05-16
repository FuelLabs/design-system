import { cx, globalCss } from "@fuel/css";
import { Box, Spinner } from "@fuel/react";
import type { FC, ReactNode } from "react";
import { Helmet } from "react-helmet";

import { TopNav } from "./TopNav";

interface Props {
  title?: string;
  isLoading?: boolean;
  className?: string;
  isBlank?: boolean;
  children: ReactNode;
}

export const Layout: FC<Props> = ({
  title = "",
  children,
  isLoading,
  className,
  isBlank,
}) => {
  globalStyles();
  return (
    <>
      <Helmet>
        <title>{title && `${title} | `}FuelScan</title>
        <meta name="description" content="Fuel Block Explorer" />
      </Helmet>
      {isLoading ? (
        <Box as="main" className={cx("loading", className)}>
          <Spinner />
        </Box>
      ) : (
        <Box as="main" className={className}>
          {!isBlank && <TopNav />}
          {children}
        </Box>
      )}
    </>
  );
};

const globalStyles = globalCss({
  "body, #root, #root > main": {
    minH: "$screenH",
  },
  "#root > main:not(.loading)": {
    display: "flex",
    flexDirection: "column",
  },
  "#root > main.loading": {
    is: ["centered"],
  },
});
