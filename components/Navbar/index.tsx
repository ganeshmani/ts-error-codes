import Link from "next/link";
import Image from "next/image";
const Navbar: React.FC = () => {
  return (
    <div className="flex w-full justify-between px-6">
      {" "}
      <Link href="/">
        <a className="no-underline font-semibold text-xl invisible sm:visible my-auto ml-4">
          <h1 className="h-full">Typescript Codes</h1>
        </a>
      </Link>
      <Link href={"https://github.com/ganeshmani/ts-error-codes"}>
        <a className="my-auto" target={"_blank"}>
          <Image
            src={"/images/github.svg"}
            width={32}
            height={32}
            alt={"Gihub"}
          />
        </a>
      </Link>
    </div>
  );
};

export default Navbar;
