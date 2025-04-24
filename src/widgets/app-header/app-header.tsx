"use server";

import { FC } from "react";

import { Layout } from "@/widgets/app-header/ui/layout";
import { Logo } from "@/widgets/app-header/ui/logo";
import { MainNav } from "@/widgets/app-header/ui/main-nav";
import { Profile } from "@/widgets/app-header/ui/profile";

export const AppHeader: FC = async () => (
  <Layout logo={<Logo />} nav={<MainNav />} profile={<Profile />} />
);
