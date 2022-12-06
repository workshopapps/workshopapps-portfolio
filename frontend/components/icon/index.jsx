import { Box } from "@chakra-ui/react";
import React from "react";

const Icon = (props) => {
  const { boxSize = 5, iconComp, ...others } = props;
  return <Box as={iconComp} boxSize={boxSize} {...others} />;
};

export default React.memo(Icon);
