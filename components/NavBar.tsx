import React, { FC } from "react";
import styles from "../styles/NavBar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  { id: 1, path: "/", title: "Home" },
  { id: 2, path: "/posts", title: "Posts" },
  { id: 3, path: "/contacts", title: "Contacts" },
];

const NavBar: FC<{}> = () => {
  const { pathname } = useRouter();
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>webDev</div>
      <div className={styles.links}>
        {navigation.map(({ id, path, title }) => (
          <Link
            className={pathname === path ? styles.active : undefined}
            key={id}
            href={path}
          >
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
