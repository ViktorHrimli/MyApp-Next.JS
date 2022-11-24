type AddressProps = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

type ContactProps = {
  name: string;
  email: string;
  address: AddressProps;
};

type HeadingProps = {
  tag?: keyof JSX.IntrinsicElements;
  text: string;
};

type UserPostProps = {
  id: string;
  title: string;
  body: string;
};

type SocialsProps = {
  id: string;
  icon: string;
  path: string;
};

type UserProps = {
  id: string;
  email: string;
  name: string;
};

export type {
  ContactProps,
  HeadingProps,
  UserPostProps,
  SocialsProps,
  UserProps,
};
