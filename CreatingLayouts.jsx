import { Grid, GridItem, Box } from "@chakra-ui/react";

function ResponsiveGrid() {
  return (
    <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={4}>
      <GridItem>
        <Box bg="tomato" height="100px">Item 1</Box>
      </GridItem>
      <GridItem>
        <Box bg="blue" height="100px">Item 2</Box>
      </GridItem>
      <GridItem>
        <Box bg="green" height="100px">Item 3</Box>
      </GridItem>
    </Grid>
  );
}

export default ResponsiveGrid;
