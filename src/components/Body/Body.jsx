import React, { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Body.module.scss";
import { useStateProvider } from "../../utils/StateProvider";
import axios from "axios";
import { AiFillClockCircle } from "react-icons/ai";
import { reducerCases } from "../../utils/Constants";

const cx = classNames.bind(styles);

export default function Body() {
  const [{ token, selectedPlaylistId, selectedPlaylist }, dispatch] =
    useStateProvider();
  useEffect(() => {
    const getInitialPlaylist = async () => {
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const selectedPlaylist = {
        id: response.data.id,
        name: response.data.name,
        description: response.data.description.startsWith("<a")
          ? ""
          : response.data.description,
        image: response.data.images[0].url,
        tracks: response.data.tracks.items.map(({ track }) => ({
          id: track.id,
          name: track.name,
          artists: track.artists.map((artist) => artist.name),
          image: track.album.images[2].url,
          duration: track.duration_ms,
          album: track.album.name,
          context_uri: track.album.uri,
          track_number: track.track_number,
        })),
      };
      dispatch({ type: reducerCases.SET_PLAYLIST, selectedPlaylist });
      console.log(response);
    };
    getInitialPlaylist();
  }, [token, dispatch, selectedPlaylistId]);

  return (
    <div className={cx("wrapper")}>
      {selectedPlaylist && (
        <>
          <div className={cx("playlist")}>
            <div className={cx("playlist__image")}>
              <img src={selectedPlaylist.image} alt="selectedplaylist" />
            </div>
            <div className={cx("playlist__details")}>
              <span className={cx("type")}>PLAYLIST</span>
              <h1 className={cx("title")}>{selectedPlaylist.name}</h1>
              <p className={cx("description")}>
                {selectedPlaylist.description}
              </p>
            </div>
          </div>
          <div className={cx("list")}>
            <div className={cx("header_row")}>
              <div className={cx("col")}>
                <span>#</span>
              </div>
              <div className={cx("col")}>
                <span>TITLE</span>
              </div>
              <div className={cx("col")}>
                <span>ALBUM</span>
              </div>
              <div className={cx("col")}>
                <span>
                  <AiFillClockCircle />
                </span>
              </div>
            </div>
          </div>
          <div className={cx("tracks")}>
            {selectedPlaylist.tracks.map(
              (
                {
                  id,
                  name,
                  artists,
                  image,
                  duration,
                  album,
                  context_uri,
                  track_number,
                },
                index
              ) => {
                return (
                  <div className={cx("row")} key={id}>
                    <div className={cx("col")}>
                      <span>{index + 1}</span>
                    </div>
                    <div className={cx("col")}>
                      <div className={cx("image")}>
                        <img src={image} alt="track" />
                      </div>
                      <div className={cx("info")}>
                        <span className={cx("name")}>{name}</span>
                        <span>{artists}</span>
                      </div>
                    </div>
                    <div className={cx("col")}>
                      <span>{album}</span>
                    </div>
                    <div className={cx("col")}>
                      <span>{duration}</span>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </>
      )}
    </div>
  );
}
