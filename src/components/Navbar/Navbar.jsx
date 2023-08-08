import React from "react";
import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useStateProvider } from "../../utils/StateProvider";

const cx = classNames.bind(styles);

export default function Navbar() {
  const [{ userInfo }] = useStateProvider();

  return (
    <div className={cx("wrapper")}>
      <div className={cx("search__bar")}>
        <FaSearch />
        <input type="text" placeholder="Artists, songs or podcasts" />
      </div>
      <div className={cx("avatar")}>
        <a href="#">
          <img src={userInfo?.userImg} alt="avatar" />
          <span>{userInfo?.userName}</span>
        </a>
      </div>
    </div>
  );
}
