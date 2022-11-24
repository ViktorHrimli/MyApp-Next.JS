import Heading from "./Heading";
import React, { FC } from "react";
import { SocialsProps } from "./types";
import Head from "next/head";

type socialTypeProps = {
  socials: [SocialsProps];
};

const Socials: FC<socialTypeProps> = ({ socials }) => {
  if (!socials) {
    return <Heading tag="h3" text="Empty contact" />;
  }

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css"
        />
      </Head>
      <Heading tag="h3" text="social" />
      <ul>
        {socials.map(({ id, icon, path }) => {
          return (
            <li key={id}>
              <a href={path} target="_blank" rel="noopener noreferrer">
                <i className={`fab fa-${icon}`} aria-hidden="true" />
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Socials;
