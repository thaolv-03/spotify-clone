import React from "react";
import classNames from "classnames/bind";
import styles from "./Spotify.module.scss";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";

const cx = classNames.bind(styles);

export default function Spotify() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("spotify__body")}>
        <Sidebar />
        <div className={cx("body")}>
          <Navbar />
          <div className={cx("body__contents")}>
            <Body />
          </div>
        </div>
      </div>
      <div className={cx("footer")}>
        <Footer />
      </div>
    </div>
  );
}
