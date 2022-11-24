import Heading from "../components/Heading";
import Socials from "../components/Socials";
import styles from "../styles/Home.module.scss";
import React, { FC } from "react";
import { GetStaticProps } from "next";
import { SocialsProps } from "../components/types";

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/socials`);
    const data = await response.json();

    if (!data) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        socials: data,
      },
    };
  } catch {
    return {
      props: {
        socials: null,
      },
    };
  }
};

type typeHomeProps = {
  socials: [SocialsProps];
};
const Home: FC<typeHomeProps> = ({ socials }) => {
  return (
    <div className={styles.wrapper}>
      <Heading tag="h1" text="App by next js" />
      <Socials socials={socials} />
    </div>
  );
};

export default Home;
