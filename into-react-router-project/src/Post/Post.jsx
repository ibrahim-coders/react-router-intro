import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  const { id, title } = post;
  return (
    <div>
      <h4>Post of Id: {id}</h4>
      <p>{title}</p>
      <Link to={`/post/${id}`}>Show more</Link>
      <Link to={`/post/${id}`}>click me</Link>
    </div>
  );
};

export default Post;
