import Link from "next/link";
import { ModeToggle } from "./ui/mode-toggle";
import { Button, buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Navbar = function () {
  return (
    <nav className="w-full sticky inset-x-0 top-0  p-4 shadow shadow-muted/80 border-gray-200 bg-white/75 backdrop-blur-lg transition-all z-[100]">
      <div className="flex items-center justify-between px-2.5 md:px-20">
        <Link href={"/login"}>
          case
          <span className="text-primary">cobra</span>
        </Link>

        <div className="flex items-center justify-center h-full gap-x-8">
          <ModeToggle />
          <Link
            href={""}
            className={buttonVariants({
              size: "sm",
              variant: "ghost",
            })}
          >
            Login
          </Link>

          <div className="h-8 w-px bg-zinc-200 hidden sm:block"></div>
          <Button className="bg-primary hidden md:block">
            <Link href={""} className="text-xs text-white">
              Create case
              <ArrowRight className="inline-block ml-1 w-2" />
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
