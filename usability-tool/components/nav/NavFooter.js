// NavFooter.js - A react component for allowing navigation between lesson, quiz, and UI Builder
// NOT to be used on the actual UI Builder page.
import styles from "@/styles/Footer.module.scss";
import { Fragment } from "react";
import Link from "next/link";

export default function NavFooter({ options }) {
  return (
    <Fragment>
      {options.prev && <Button side="left" lock={false} obj={options.prev} />}

      {options.next && (
        <Button side="right" lock={options.nextLock} obj={options.next} />
      )}
    </Fragment>
  );
}

function Button({ side, lock, obj }) {
  // default class
  let className = `${styles.navContainer}`;

  // take side into account
  if (side == "left") {
    className += ` ${styles.left}`;
  } else {
    className += ` ${styles.right}`;
  }

  if (lock) {
    className += ` ${styles.locked}`;
  }

  return (
    <Link href={obj.href}>
      <div className={className}>
        {side == "left" && <img src="/icons/chevron-left.svg" />}

        <div className={styles.contentTitle}>
          {obj.title} {lock && <img src="/icons/lock.svg" />}
        </div>

        {side == "right" && <img src="/icons/chevron-right.svg" />}
      </div>
    </Link>
  );
}
