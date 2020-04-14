import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {Space, isSpaceTokenProp} from '@twilio-paste/style-props';

type Orientation = 'horizontal' | 'vertical';
export interface SeparatorProps extends React.HTMLAttributes<HTMLHRElement> {
  id?: never;
  className?: never;
  orientation: Orientation;
  horizontalSpacing?: Space;
  verticalSpacing?: Space;
}

const Separator: React.FC<SeparatorProps> = ({orientation, horizontalSpacing, verticalSpacing, ...props}) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      aria-orientation={orientation}
      margin="space0"
      marginBottom={verticalSpacing}
      marginLeft={horizontalSpacing}
      marginRight={horizontalSpacing}
      marginTop={verticalSpacing}
      as="hr"
      borderWidth="borderWidth0"
      borderColor={'colorBorderLight'}
      borderStyle="solid"
      borderBottomWidth={orientation === 'horizontal' ? 'borderWidth20' : null}
      borderLeftWidth={orientation === 'vertical' ? 'borderWidth20' : null}
      width={orientation === 'horizontal' ? 'auto' : null}
      height={orientation === 'vertical' ? 'auto' : null}
    />
  );
};

Separator.displayName = 'Separator';

if (process.env.NODE_ENV === 'development') {
  Separator.propTypes = {
    orientation: PropTypes.oneOf(['horizontal', 'vertical'] as Orientation[]).isRequired,
    horizontalSpacing: isSpaceTokenProp,
    verticalSpacing: isSpaceTokenProp,
  };
}
export {Separator};