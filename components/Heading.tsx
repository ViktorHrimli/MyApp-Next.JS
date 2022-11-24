import React, { FC } from "react";
import { HeadingProps } from "./types";

const Heading: FC<HeadingProps> = ({ tag, text }) => {
  const Tag = tag ? tag : "h1";
  return (
    <>
      <Tag>{text}</Tag>
    </>
  );
};

export default Heading;
