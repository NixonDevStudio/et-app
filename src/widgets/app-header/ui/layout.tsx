"use server";

import { cn } from "@bem-react/classname";
import { FC, ReactNode } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/shared/ui/sheet";
import { Button } from "@/shared/ui/button";
import { Menu } from "lucide-react";

const cnAppHeader = cn("AppHeader");

type LayoutProps = {
  logo?: ReactNode;
  nav?: ReactNode;
  actions?: ReactNode;
  profile?: ReactNode;
};

// TODO: MenuIcon взять из макета Яны

export const Layout: FC<LayoutProps> = async ({
  logo,
  nav,
  actions,
  profile,
}) => (
  <header
    className={cnAppHeader(null, [
      "sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]",
    ])}
  >
    <div className="container flex h-14 items-center">
      <div className="md:hidden mr-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader className="border-b pb-5 mb-5">{logo}</SheetHeader>
            {nav}
          </SheetContent>
        </Sheet>
      </div>
      <div className="mr-4 hidden md:flex mr-4">{logo}</div>
      <div className="flex flex-1 items-center">
        <div className="hidden md:flex">{nav}</div>
        <div className="flex flex-1 items-center justify-end space-x-3">
          {actions}
          {profile}
        </div>
      </div>
    </div>
  </header>
);
