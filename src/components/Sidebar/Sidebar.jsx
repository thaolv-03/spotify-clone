import React from "react";
import classNames from "classnames/bind";
import { IoLibrary } from "react-icons/io5";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import styles from "./Sidebar.module.scss";
import Playlist from "../Playlists/Playlists";

const cx = classNames.bind(styles);

export default function Sidebar() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("top__links")}>
        <div className={cx("logo")}>
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
            alt="spotify"
          />
        </div>
        <ul>
          <li>
            <MdHomeFilled />
            <span>Home</span>
          </li>
          <li>
            <MdSearch />
            <span>Search</span>
          </li>
          <li>
            <IoLibrary />
            <span>Your Library</span>
          </li>
        </ul>
      </div>
      <Playlist />
    </div>
  );
}
