import Heading from "../components/Heading";
import { useEffect } from "react";
import { useRouter } from "next/router";
import React from "react";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      console.log(router);
      router.push("/");
      console.log(router);
    }, 3000);
  }, [router]);
  return (
    <div>
      <Heading text="404" />
      <Heading tag="h2" text="Somthing is wrong ..." />
    </div>
  );
};

export default Error;
