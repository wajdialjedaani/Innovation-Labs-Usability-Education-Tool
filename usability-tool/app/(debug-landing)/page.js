import Link from "next/link";

export default function Debug(){
  return (
    <nav>
      <h1>ui builder</h1>
      <Link href="/ui-builder/devmode">ui builder development</Link> <br />
      <Link href="/ui-builder/example">ui builder scenario example</Link><br />
      <br />
      <Link href="/logon">logon page</Link>
    </nav>
  )
}