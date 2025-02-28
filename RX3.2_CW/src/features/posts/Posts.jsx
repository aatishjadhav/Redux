import { useSelector, useDispatch } from "react-redux";
import { likeButtonPressed } from "./postSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => {
    console.log(state.posts);
    return state.posts;
  });
  return (
    <div>
      {posts.posts.map((post) => (
        <div key={post.postId}>
          <p>{post.caption}</p>
          <button onClick={() => dispatch(likeButtonPressed(post.postId))}>{post.likes} likes</button>
        </div>
      ))}
    </div>
  );
};

export default Posts;
