/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { ReactNode } from 'react';

interface LinkProps {
  to: string;
  children: ReactNode;
}

export default function Link({ children, to }: LinkProps) {
  return (
    <Link to={to}>
      <a>{children}</a>
    </Link>
  );
}
