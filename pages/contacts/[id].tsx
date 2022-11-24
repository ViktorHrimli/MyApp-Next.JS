import ContactInfo from "../../components/ContactInfo";
import Head from "next/head";
import React, { FC } from "react";
import { GetServerSideProps } from "next";
import { ContactProps } from "../../components/types";

type contactTypeProps = {
  contact: ContactProps;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      contact: data,
    },
  };
};

const User: FC<contactTypeProps> = ({ contact }) => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div>
        <ContactInfo state={contact} />
      </div>
    </>
  );
};

export default User;
