/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { SignIn as ClerkSignIn } from "@clerk/nextjs";

type Props = {};

const SignInPage = (props: Props) => {
  return <ClerkSignIn />;
};

export default SignInPage;
