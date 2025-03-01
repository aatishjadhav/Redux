import { useSelector, useDispatch } from "react-redux";
import { likeButtonPressed, fetchPosts } from "./postSlice";
import { useEffect } from "react";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  console.log(posts);
  
  return (
    <div>
      {status === "loading" && <p>Loading...</p>}
      {error && <p>{error} </p>}
      {posts.posts.map((post) => (
        <div key={post.postId}>
          <p>{post.caption}</p>
          <button onClick={() => dispatch(likeButtonPressed(post.postId))}>
            {post.likes} likes
          </button>
        </div>
      ))}
    </div>
  );
};

export default Posts;
