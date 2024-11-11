import Link from "next/link";

const Footer = () => {
  return (
    <footer className="h-22 flex flex-col items-center justify-between gap-y-3 bg-white py-8 shadow-md md:mx-14 md:flex-row md:items-start">
      <div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
      <div className="flex gap-x-6 text-sm text-muted-foreground">
        <Link href={"#"}>Terms</Link>
        <Link href={"#"}>Privacy Policy</Link>
        <Link href={"#"}>Cookie Policy</Link>
      </div>
    </footer>
  );
};
export default Footer;
