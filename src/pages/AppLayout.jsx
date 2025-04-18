import React from "react";
import AppNav from "../components/AppNav";
import Sidebar from "../components/Sidebar";
import Map from "../components/map";
import styles from "./AppLayout.module.css";
export default function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar></Sidebar>
      <Map />
    </div>
  );
}
