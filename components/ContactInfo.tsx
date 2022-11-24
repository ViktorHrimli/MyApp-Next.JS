import React, { FC } from "react";
import Heading from "./Heading";
import { ContactProps } from "./types";

type ContactInfoProps = {
  state: ContactProps;
};

const ContactInfo: FC<ContactInfoProps> = ({ state }) => {
  const { name, email, address } = state ?? {};
  const { street, suite, city, zipcode } = address ?? {};

  if (!state) {
    return <Heading tag="h3" text="Empty contact" />;
  }
  return (
    <>
      <Heading tag="h3" text={name} />
      <div>
        <strong>Email: </strong>
        {email}
      </div>
      <div>
        <strong>Address:</strong>
        {`${street} ${suite} ${city} ${zipcode}`}
      </div>
    </>
  );
};

export default ContactInfo;
