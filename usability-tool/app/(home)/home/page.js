import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to Usability Education Tool</h1>
      <Link href="/signin">Sign In</Link>
      <Link href="/register">Register</Link>
    </main>
  );
}
