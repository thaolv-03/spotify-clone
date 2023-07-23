import React, { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Playlists.module.scss";
import { useStateProvider } from "../../utils/StateProvider";
import axios from "axios";
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
      console.log(playlists);
      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
    };
    getPlaylistData();
  }, [token, dispatch]);

  return (
    <div className={cx("wrapper")}>
      <ul>
        {playlists.map(({ name, id, images, owner }) => {
          return (
            <li key={id}>
              <div className={cx("playlist-item")}>
                <img src={images[2].url} alt="item-img" />
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
