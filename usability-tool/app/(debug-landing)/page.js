import Link from "next/link";

export default function Debug() {
  return (
    <nav>
      <Link href="/ui-builder">ui builder</Link> <br />
      <Link href="/logon">logon page</Link>
      <Link href="/main">main page</Link>
    </nav>
  );
}
