import { Box, Flex, Heading, Stack } from "@fuels-ui/react";
import { formatUnits } from "ethers/lib/utils";
import { useAssets } from "../hooks/useAssets";

import { css } from "@fuels-ui/css";
import { Card } from "@fuels-ui/react";
import { CardHeader } from "@fuels-ui/react/src/components/Card/CardHeader";
import { CardBody } from "@fuels-ui/react/src/components/Card/CardBody";
import { DECIMAL_PLACES } from "@/config";
import { useWallet } from "../context/AppContext";

export const ShowBalances = () => {
    const wallet = useWallet();
    let coins = useAssets();

    const formatValue = (amount: bigint | null | undefined) => {
        if (amount != null) {
            return formatUnits(amount, DECIMAL_PLACES);
        }
        return "";
    }

    return (
        // <Box as="aside" css={{ width: "250px" }}>
        <Flex css={{ direction: "rtl"}}>
            <Card css={{ width: "250px", bg: "$gray7" }}>
                <CardHeader>
                    <Heading>
                        Balances
                    </Heading>
                </CardHeader>
                <CardBody>
                    <Stack>
                        {coins.map((coin) => (
                            <div className={coinStyle()} key={coin.assetId}>
                                {formatValue(coin.amount)} {coin.symbol}
                            </div>
                        ))}
                    </Stack>
                </CardBody>
            </Card>
        </Flex>
        // </Box>
    );
}

const coinStyle = css({
    bg: "$accent9",
    color: "$gray1",
    textSize: "base",
    font: "$sans",
    display: "inline-flex",
    border: "1px solid transparent",
    borderRadius: "$lg",
});