import React, { memo, Fragment, FC, useEffect } from 'react';
import { useHistory, Redirect } from 'umi';
interface Props {}

const Index: FC<Props> = (props) => {
  const history = useHistory();
  const token = localStorage.getItem('TOKEN');
  console.log(33333);

  return <Fragment>{props.children}</Fragment>;
};
export default memo(Index);
