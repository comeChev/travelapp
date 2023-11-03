import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/" className="">
        <Image
          className=""
          src="/hilink-logo.svg"
          height={29}
          width={74}
          alt="logo"
        />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          variant="btn_dark_green"
          icon="user.svg"
        />
      </div>
      <Image
        src="menu.svg"
        height={32}
        width={32}
        alt="menu"
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
