import React from "react";
import { HStack, Select, Text } from "@chakra-ui/react";

function CustomSelect({ options, type = "Month" }) {
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
      <Text color="text.200">{type}:</Text>
      <Select
        placeholder="December"
        border={0}
        cursor="pointer"
        color="text.100"
        fontWeight="bold"
        size="sm"
        value={options[0].value ?? ""}
        outline="none"
        _focus={{ shadow: "" }}
        _active={{ shadow: "" }}
        _focusWithin={{ shadow: "" }}
        _focusVisible={{}}
      >
        {options &&
          options?.map((opt) => (
            <options value={opt.value}>{opt.label}</options>
          ))}
      </Select>
    </HStack>
  );
}

export default CustomSelect;
