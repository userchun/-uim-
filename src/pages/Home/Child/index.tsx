import React, { memo, Fragment, FC } from 'react';

interface Props {}

const Index: FC<Props> = () => {
  return <Fragment>child</Fragment>;
};

export default memo(Index);
