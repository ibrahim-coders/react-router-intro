import { Link } from 'react-router-dom';
const Users = ({ user }) => {
  const { id, name, email, phone } = user;
  const userStyle = {
    border: '2px solid yellow',
    padding: '10px',
    borderRadius: '20px',
  };

  return (
    <div>
      <div style={userStyle}>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{phone}</p>
        <Link to={`/user/${id}`}>Show Deails</Link>
      </div>
    </div>
  );
};

export default Users;
