import Likes from "./like";
import Comment from "./comment";

export default function Post() {
  return (
    <div>
      <Likes />
      <br />
      <Comment />
    </div>
  );
}