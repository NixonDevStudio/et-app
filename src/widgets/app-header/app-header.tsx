import { FC } from "react";
import { cn } from "@bem-react/classname";
import { Sheet, SheetTrigger } from "@/shared/ui/sheet";
import { Button } from "@/shared/ui/button";
import { Menu } from "lucide-react";

const cnAppHeader = cn("App-Header");

export const AppHeader: FC = () => (
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
              <Menu />
            </Button>
          </SheetTrigger>
        </Sheet>
      </div>
    </div>
  </header>
);
