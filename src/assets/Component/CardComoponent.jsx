import { Card, Box, Flex, Text } from "@radix-ui/themes";

export default function CardComponent({ title, sum, profit, cardIcon }) {
  return (
    <Box className="w-1/4">
      <Card>
        <div className="flex justify-between">
          <Box className="p-2">
            <Text as="div" size="3" color="black">
              {title}
            </Text>
            <Text
              as="div"
              size="7"
              color="black"
              weight="bold"
              className="pt-2"
            >
              {sum}
            </Text>
            <Text as="div" size="3" color="gray">
              {profit}
            </Text>
          </Box>
          <div className="flex pr-3 pt-3">{cardIcon}</div>
          {/* Lyckas inte med iconen */}
        </div>
      </Card>
    </Box>
  );
}
