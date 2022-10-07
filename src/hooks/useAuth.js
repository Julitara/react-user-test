import { useSelector } from 'react-redux';

export function useAuth() {
  const { username, password } = useSelector((state) => state.user);

  return {
    username,
    password,
  };
}
