import Link from "next/link";

export default function Debug() {
  return (
    <nav>
      <h1>main stuff</h1>
      <Link href="/logon">logon page</Link><br />
      <Link href="/main">main page</Link><br />

      <h1>ui builder</h1>
      <Link href="/ui-builder/devmode">ui builder development</Link> <br />
      <Link href="/ui-builder/example">ui builder scenario example</Link><br />
      <br />

      <h1>quizzes</h1>
      <Link href="/quiz/1">quiz1</Link><br />

    </nav>
  );
}
