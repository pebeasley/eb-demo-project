import React from "react";
import Link from "next/link";

import styles from "./header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <h1 className={styles.brand}>Puppy Finder</h1>
        </a>
      </Link>
    </header>
  );
}

export default Header;
