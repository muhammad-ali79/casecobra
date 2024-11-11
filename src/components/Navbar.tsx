import Link from "next/link";
import { ModeToggle } from "./ui/mode-toggle";
import { Button, buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Navbar = function () {
  return (
    <nav className="sticky inset-x-0 top-0 z-[100] w-full border-gray-200 bg-white/75 p-4 shadow shadow-muted/80 backdrop-blur-lg transition-all">
      <div className="flex items-center justify-between px-2.5 md:px-20">
        <Link href={"/login"}>
          case
          <span className="text-primary">cobra</span>
        </Link>

        <div className="flex h-full items-center justify-center gap-x-8">
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

          <div className="hidden h-8 w-px bg-zinc-200 sm:block"></div>
          <Button className="hidden bg-primary md:block">
            <Link href={"/configure/upload"} className="text-xs text-white">
              Create case
              <ArrowRight className="ml-1 inline-block w-2" />
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
