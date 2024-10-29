import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
  const post = useLoaderData();
  const { id, title, body } = post;
  return (
    <div>
      <h2>post details now</h2>
      <p>{id}</p>
      <h2>{body}</h2>
    </div>
  );
};

export default PostDetails;
