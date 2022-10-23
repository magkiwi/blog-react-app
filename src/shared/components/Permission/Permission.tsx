import React, { FC, ReactNode, useContext, useMemo } from 'react';
import { Container } from '@mui/material';

import { UserContext } from 'contexts';

type Props = {
  permission: string;
  children?: ReactNode;
};

export const PermissionView: FC<Props> = ({ permission, children }) => {

  const { userPermissions } = useContext(UserContext);

  const hasPermission = useMemo(() => {
    const permissioned = userPermissions?.includes(permission) ?  true :  false;
    return permissioned
  }, [ permission, userPermissions]);



  if (hasPermission) {
    return (
      <Container sx={{ marginTop: 4 }}>
        {children}
      </Container>
    );
  }

  return (
      <Container>
        You are not allowed to see this page
      </Container>
  );
};