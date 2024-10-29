import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
  const user = useLoaderData();
  console.log(user);
  const { name } = user;

  return (
    <div>
      <h2>Details: {name}</h2>
    </div>
  );
};

export default UserDetails;
