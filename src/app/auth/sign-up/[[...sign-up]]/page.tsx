import React from "react";
import { SignUp as ClerkSignIn } from "@clerk/nextjs";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SignUpPage = (props: Props) => {
  return <ClerkSignIn />;
};

export default SignUpPage;
