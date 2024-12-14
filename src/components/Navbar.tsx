import Link from "next/link";
import { ModeToggle } from "./ui/mode-toggle";
import { Button, buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async function () {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const isAdmin = user?.email === process?.env.ADMIN_EMAIL;

  return (
    <nav className="sticky inset-x-0 top-0 z-[100] w-full border-gray-200 bg-white/75 p-4 shadow shadow-muted/80 backdrop-blur-lg transition-all">
      <div className="flex items-center justify-between px-2.5 md:px-20">
        <Link href="/" className="z-40 flex font-semibold">
          case<span className="text-green-600">cobra</span>
        </Link>

        <div className="flex h-full items-center justify-center gap-x-4">
          <ModeToggle />
          {user ? (
            <>
              <Link
                href={"api/auth/logout"}
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                Sign Out
              </Link>
              {isAdmin ? (
                <Link
                  href="/dashboard"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Dashboard ✨
                </Link>
              ) : null}
              <Button className="hidden bg-primary md:block">
                <Link href={"/configure/upload"} className="text-xs text-white">
                  Create case
                  <ArrowRight className="ml-1 inline-block w-2" />
                </Link>
              </Button>
            </>
          ) : (
            <>
              <Link
                href={"api/auth/register"}
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                Sign in
              </Link>
              <Link
                href={"api/auth/login"}
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                Login
              </Link>
              <div className="hidden h-8 w-px bg-zinc-200 sm:block" />

              <Button className="hidden bg-primary md:block">
                <Link href={"/configure/upload"} className="text-xs text-white">
                  Create case
                  <ArrowRight className="ml-1 inline-block w-2" />
                </Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
