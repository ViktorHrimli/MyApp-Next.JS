import Link from "next/link";
import Head from "next/head";
import React, { FC } from "react";
import { GetStaticProps } from "next";
import { UserPostProps } from "../../components/types";

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
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
type typePropsPost = {
  posts: [UserPostProps];
};
const Posts: FC<typePropsPost> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Post</title>
      </Head>
      <ul>
        {posts &&
          posts.map(({ id, title, body }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Posts;
