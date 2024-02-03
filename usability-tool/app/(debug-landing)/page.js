import Link from "next/link";

export default function Debug() {
  return (
    <nav>
      <h1>development homepage</h1>

      <h2>main stuff</h2>
      <Link href="/logon">logon page</Link><br />
      <Link href="/main">main page</Link><br />

      <h2>ui builder</h2>
      <Link href="/ui-builder/devmode">ui builder development</Link> <br />
      <Link href="/ui-builder/example">ui builder scenario example</Link><br />
      <br />

      <h2>quizzes</h2>
      <Link href="/quiz/1">quiz1</Link><br />

    </nav>
  );
}
