import React, { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Playlists.module.scss";
import axios from "axios";
import { useStateProvider } from "../../utils/StateProvider";
import { reducerCases } from "../../utils/Constants";

const cx = classNames.bind(styles);

export default function Playlists() {
  const [{ token, playlists }, dispatch] = useStateProvider();
  useEffect(() => {
    const getPlaylistData = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/playlists",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const { items } = response.data;
      const playlists = items.map(({ name, id, images, owner }) => {
        return { name, id, images, owner };
      });
      // console.log("Res: ", response);
      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
    };
    getPlaylistData();
  }, [token, dispatch]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("playlist-title")}>
        <svg
          role="img"
          height="24"
          width="24"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-encore-id="icon"
          className={cx("playlist-title__icon")}
        >
          <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
        </svg>
        <span>Your Library</span>
      </div>
      <ul>
        {playlists.map(({ name, id, images, owner }) => {
          return (
            <li key={id}>
              <div className={cx("playlist-item")}>
                <img src={images[0].url} alt="item-img" />
                <div className={cx("item-details")}>
                  <div className={cx("item-details__name")}>{name}</div>
                  <div className={cx("item-details__owner")}>
                    {owner.display_name}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
