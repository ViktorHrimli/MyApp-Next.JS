import Link from "next/link";
import { UserProps } from "../../components/types";
import React, { FC } from "react";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      state: data,
    },
  };
};

type userTypeProps = {
  state: [UserProps];
};

const UserList: FC<userTypeProps> = ({ state }) => {
  return (
    <>
      <h1>UserList contacts</h1>
      <ul>
        {state &&
          state.map(({ id, email, name }) => (
            <li key={id}>
              <Link href={`/contacts/${id}`}>{name}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default UserList;
