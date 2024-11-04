import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white flex flex-col gap-y-3 md:flex-row justify-between items-center md:items-start shadow-md md:mx-14 h-22 py-8">
      <div>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
      <div className="text-muted-foreground text-sm flex gap-x-6">
        <Link href={"#"}>Terms</Link>
        <Link href={"#"}>Privacy Policy</Link>
        <Link href={"#"}>Cookie Policy</Link>
      </div>
    </footer>
  );
};
export default Footer;
