export const authenticateUser = async (username: string, password: string) => {
  let res = null;
  if (username === 'john' && password === '1234') {
    res = { id: '1', name: 'John Smith', email: 'johnsmith@gmail.com' };
  } else {
    new Error('Invalid credentials');
  }
  return res;
};
