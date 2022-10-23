import React, { Fragment, useContext } from 'react';

import { UserContext } from 'contexts';

export const Authenticated: React.FC<{ children?: React.ReactNode }> = ({ children }) => {

  const { isLoggingIn } = useContext(UserContext);

  if (isLoggingIn) {
    return (
      <Fragment>
        {children}
      </Fragment>
    );
  }

  return null;
};

export const NotAuthenticated: React.FC<{ children?: React.ReactNode }> = ({ children }) => {

  const { isLoggingIn } = useContext(UserContext);

  if (!isLoggingIn) {
    return (
      <Fragment>
        {children}
      </Fragment>
    );
  }
  return null;
};
