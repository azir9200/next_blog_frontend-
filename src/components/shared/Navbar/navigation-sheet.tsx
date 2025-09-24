
import { Menu,  } from "lucide-react";
import { Button } from "../../ui/button";
import { NavMenu } from "./nav-menu";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet" 

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        {/* <Logo />
         */}
        Logo
        <NavMenu orientation="vertical" className="mt-12" />
      </SheetContent>
    </Sheet>
  );
};
