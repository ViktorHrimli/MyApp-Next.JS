import Heading from "./Heading";
import React, { FC } from "react";
import { UserPostProps } from "./types";

type infoTypeProps = {
  post: UserPostProps;
};

const UserPosts: FC<infoTypeProps> = ({ post }) => {
  const { title, body } = post || {};
  if (!post) {
    return <Heading tag="h3" text="Empty contact" />;
  }
  return (
    <>
      <Heading tag="h3" text="User Posts" />
      <div>
        <strong>{title}</strong>
        <p>{body}</p>
      </div>
    </>
  );
};

export default UserPosts;
