import { useLoaderData } from 'react-router-dom';
import Users from '../Users/Users';
const User = () => {
  const users = useLoaderData();
  return (
    <div>
      <h2>user:{users.length}</h2>
      {users.map(user => (
        <Users key={user.id} user={user}></Users>
      ))}
    </div>
  );
};

export default User;
