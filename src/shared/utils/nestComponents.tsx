import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const nestComponents = (PreviousComponent: React.FC<Props>, CurrentComponent: React.FC<Props>): React.FC => {
  return ({ children, ...rest }): JSX.Element => (
    <CurrentComponent {...rest}>
      <PreviousComponent {...rest}>{children}</PreviousComponent>
    </CurrentComponent>
  );
};

export default nestComponents;
