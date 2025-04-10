import React from "react";
import styles from "./Sidebar.module.css";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";
import Logo from "./Logo";
import Footer from "./Footer";
export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <Footer className={styles.footer}></Footer>
    </div>
  );
}
