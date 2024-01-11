import { FiImage } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaRegComment } from "react-icons/fa";
import PostForm from "components/PostForm";
import PostBox from "components/PostBox";

export interface PostProps {
  id: string;
  email: string;
  content: string;
  createdAt: string;
  uid: string;
  profileUrl?: string;
  likes?: string[];
  likeCount?: number;
  comments?: any;
}

const posts: PostProps[] = [
  {
    id: "1",
    email: "test@test.com",
    content: "content",
    createdAt: "2023-08-03",
    uid: "123123",
  },
  {
    id: "2",
    email: "test@test.com",
    content: "content",
    createdAt: "2023-08-03",
    uid: "123123",
  },
  {
    id: "3",
    email: "test@test.com",
    content: "content",
    createdAt: "2023-08-03",
    uid: "123123",
  },
  {
    id: "4",
    email: "test@test.com",
    content: "content",
    createdAt: "2023-08-03",
    uid: "123123",
  },
  {
    id: "5",
    email: "test@test.com",
    content: "content",
    createdAt: "2023-08-03",
    uid: "123123",
  },
];

export default function HomePage() {
  return (
    <div className="home">
      <div className="home__title"></div>
      <div className="home__tabs">
        <div className="home__tab home__tab--active">For You</div>
        <div className="home__tab">Following</div>
      </div>
      {/* Post Form */}
      <PostForm />
      {/* Tweet Post */}
      <div className="post">
        {posts?.map((post) => (
          <PostBox post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}
