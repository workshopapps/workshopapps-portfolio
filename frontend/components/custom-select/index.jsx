import React from "react";
import { HStack, Select, Text } from "@chakra-ui/react";

function CustomSelect() {
  return (
    <HStack spacing={0} rounded={8} border="1px solid" borderColor="brand.200">
      <Text>Month</Text>
      <Select
        placeholder="December"
        border={0}
        // paddingEnd={-2}
        cursor="pointer"
        outline="none"
        _focus={{ shadow: "" }}
        _active={{ shadow: "" }}
        _focusWithin={{ shadow: "" }}
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </HStack>
  );
}

export default CustomSelect;
