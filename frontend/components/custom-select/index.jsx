import React from "react";
import { HStack, Select, Text } from "@chakra-ui/react";

function CustomSelect({ options, type = "Month", placeholder = "December" }) {
  const [value, setValue] = React.useState(options ? options[0].value : "");

  return (
    <HStack
      spacing={-1}
      rounded={8}
      border="1px solid"
      transition="0.2s"
      py={2}
      pl={2}
      _focusWithin={{ shadow: "md" }}
      borderColor="gray.300"
    >
      <Text color="text.200">{type}:</Text>
      <Select
        placeholder={placeholder}
        border={0}
        cursor="pointer"
        color="text.100"
        fontWeight="bold"
        size="sm"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        outline="none"
        _focus={{ shadow: "" }}
        _active={{ shadow: "" }}
        _focusWithin={{ shadow: "" }}
        _focusVisible={{}}
      >
        {options &&
          options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
      </Select>
    </HStack>
  );
}

export default CustomSelect;

export const months = [
  { value: "jan", label: "January" },
  { value: "feb", label: "February" },
  { value: "mar", label: "March" },
  { value: "apr", label: "April" },
  { value: "may", label: "May" },
  { value: "june", label: "June" },
  { value: "july", label: "July" },
  { value: "aug", label: "August" },
  { value: "sept", label: "September" },
  { value: "oct", label: "October" },
  { value: "nov", label: "November" },
  { value: "dec", label: "December" },
];

export const sortTypes = [
  { value: "asc", label: "Ascending" },
  { value: "des", label: "Descending" },
];
