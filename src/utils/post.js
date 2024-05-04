import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { posts } from "@/profile";
import Image from "next/image";
const Post = () => {
  const router = useRouter();

  const currentPost = posts.filter(
    (post) => post.title === router.query.title
  )[0];

  if (!currentPost) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  } 

  return (
    <Layout title={router.query.title} footer={false}>
      <div className="text-center">
        <Image width={300} height={300}
          src={currentPost.imageURL}
          alt=""
        />
        <p className="p-4">{currentPost.content}</p>
      </div>
    </Layout>
  );
};

export default Post;