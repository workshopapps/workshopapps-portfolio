import React from "react";
import { HStack, Select, Text } from "@chakra-ui/react";

function CustomSelect() {
  return (
    <HStack
      spacing={-2}
      rounded={8}
      border="1px solid"
      py={2}
      pl={2}
      _focusWithin={{ shadow: "outline" }}
      borderColor="gray.300"
    >
      <Text color="text.200">Month:</Text>
      <Select
        placeholder="December"
        border={0}
        cursor="pointer"
        color="text.100"
        fontWeight="bold"
        size="sm"
        outline="none"
        _focus={{ shadow: "" }}
        _active={{ shadow: "" }}
        _focusWithin={{ shadow: "" }}
        _focusVisible={{}}
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </HStack>
  );
}

export default CustomSelect;
