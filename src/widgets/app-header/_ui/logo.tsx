"use server";

import { FC } from "react";
import Link from "next/link";
import { LogoIcon } from "@/shared/ui/logo-icon";
import { cn } from "@bem-react/classname";

const cnLogo = cn("Logo");

export const Logo: FC = async () => (
  <Link className={cnLogo(null, ["flex items-center space-x-2"])} href="/">
    <LogoIcon className="h-6 w-6" />
    <span className="font-bold inline-block">Экскурсии по Крыму</span>
  </Link>
);
