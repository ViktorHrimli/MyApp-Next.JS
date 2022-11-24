import Head from "next/head";
import UserPosts from "../../components/UsersPosts";
import { UserPostProps } from "../../components/types";
import React, { FC } from "react";

export const getStaticPaths: any = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  const paths = data.map(({ id }) => ({
    params: {
      id: String(id),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      posts: data,
    },
  };
};

type typeUserPostProps = {
  posts: UserPostProps;
};

const PostInfo: FC<typeUserPostProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div>
        <UserPosts post={posts} />
      </div>
    </>
  );
};

export default PostInfo;
