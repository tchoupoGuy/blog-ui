import React, { ReactNode } from 'react';
import { Typography } from 'antd';
import cn from 'classnames';

interface TitleProps {
  children: ReactNode;
  className?: string;
  level?: 1 | 2 | 3 | 4;
  underline?: boolean;
  centered?: boolean;
}

export default function Title({
  children,
  className,
  level = 1,
  underline,
  centered,
}: TitleProps) {
  const classes = cn(className, {
    'text-center': centered,
  });

  return (
    <Typography.Title underline={underline} level={level} className={classes}>
      {children}
    </Typography.Title>
  );
}
