import { Box, Flex, Text, Avatar } from "@radix-ui/themes";

function RecentSalesComponent(props) {
  const { personName, personEmail, personImages, personSales } = props;

  return (
    <Box>
      <div className="flex flex-row justify-between items-center">
        <div className="p-3">
          <Flex gap="3" align="center">
            <Avatar size="2" src={personImages} radius="full" fallback="T" />
            <Box>
              <Text as="div" size="2" weight="medium">
                {personName}
              </Text>
              <Text as="div" size="2" color="gray" weight={"light"}>
                {personEmail}
              </Text>
            </Box>
          </Flex>
        </div>
        <p className="font-semibold">{personSales}</p>
      </div>
    </Box>
  );
}

export default RecentSalesComponent;
