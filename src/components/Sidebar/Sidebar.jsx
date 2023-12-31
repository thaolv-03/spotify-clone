import React from "react";
import classNames from "classnames/bind";
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
            <svg
              role="img"
              height="24"
              width="24"
              aria-hidden="true"
              className={cx("sidebar__icon")}
              viewBox="0 0 24 24"
              data-encore-id="icon"
            >
              <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"></path>
            </svg>
            <span>Home</span>
          </li>
          <li>
            <svg
              role="img"
              height="24"
              width="24"
              aria-hidden="true"
              className={cx("sidebar__icon")}
              viewBox="0 0 24 24"
              data-encore-id="icon"
            >
              <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path>
            </svg>
            <span>Search</span>
          </li>
        </ul>
      </div>
      <Playlist />
    </div>
  );
}
