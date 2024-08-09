import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/images/logo.png"
        alt="EVENTO logo"
        width={93}
        height={12}
      />
    </Link>
  );
}
