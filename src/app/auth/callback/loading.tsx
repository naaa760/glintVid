import { Spinner } from "@/components/global/loader/spinner";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AuthLoading = (props: Props) => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Spinner />
    </div>
  );
};

export default AuthLoading;
