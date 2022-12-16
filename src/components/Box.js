import React from 'react';
import { View } from 'react-native';

function Box({
  children,
  direction,
  wrap,
  w,
  h,
  px,
  py,
  pl,
  pr,
  pt,
  pb,
  mx,
  my,
  ml,
  mr,
  mt,
  mb,
  justify,
  align = 'flex-start',
  bg,
}) {
  return (
    <View
      style={[
        direction !== undefined && { flexDirection: direction },
        wrap !== undefined && { flexWrap: wrap ? 'wrap' : 'nowrap' },
        w !== undefined && { width: Number.isNaN(+w) ? w : +w },
        h !== undefined && { height: Number.isNaN(+h) ? h : +h },
        px !== undefined && { paddingLeft: +px, paddingRight: +px },
        py !== undefined && { paddingTop: +py, paddingBottom: +py },
        pl !== undefined && { paddingLeft: +pl },
        pr !== undefined && { paddingRight: +pr },
        pt !== undefined && { paddingTop: +pt },
        pb !== undefined && { paddingBottom: +pb },

        mx !== undefined && { marginLeft: +mx, marginRight: +mx },
        my !== undefined && { marginTop: +my, marginBottom: +my },
        ml !== undefined && { marginLeft: +ml },
        mr !== undefined && { marginRight: +mr },
        mt !== undefined && { marginTop: +mt },
        mb !== undefined && { marginBottom: +mb },

        justify !== undefined && { justifyContent: justify },
        align !== undefined && { alignItems: align },

        bg !== undefined && { backgroundColor: bg },
      ]}
    >
      {children}
    </View>
  );
}

export default Box;
