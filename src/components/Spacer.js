import React from 'react';

import Box from './Box';

function Spacer({ size = 16 }) {
  return <Box h={size} w="100%" />;
}

export default Spacer;
