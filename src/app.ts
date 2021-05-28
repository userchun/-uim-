import { history } from 'umi';

const isLogin = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    history.push('/login');
  }
};

export function render(oldRender: any) {
  isLogin();
  oldRender();
}
export function onRouteChange(props: any) {
  if (props.location.pathname !== '/login') {
    isLogin();
  }
}
