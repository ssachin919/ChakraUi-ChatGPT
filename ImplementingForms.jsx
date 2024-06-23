import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, FormErrorMessage } from "@chakra-ui/react";

function MyForm() {
  const [input, setInput] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
    if (e.target.value.length < 5) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  return (
    <Box>
      <FormControl isInvalid={isError}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          type="email"
          value={input}
          onChange={handleChange}
        />
        {isError && (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>
      <Button mt={4} colorScheme="teal" type="submit" disabled={isError}>
        Submit
      </Button>
    </Box>
  );
}

export default MyForm;
