"use client";

import { FC, PropsWithChildren } from "react";

const AuthLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className="w-full mt-52 flex items-center justify-center">
    {children}
  </div>
);

export default AuthLayout;
