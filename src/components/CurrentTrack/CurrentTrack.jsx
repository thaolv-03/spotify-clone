import React, { useEffect } from 'react'
import classNames from "classnames/bind";
import styles from "./CurrentTrack.module.scss";
import axios from "axios";
import { useStateProvider } from "../../utils/StateProvider";
import { reducerCases } from "../../utils/Constants";

const cx = classNames.bind(styles);

export default function CurrentTrack() {
    const [{ token, currentlyPlaying }, dispatch] = useStateProvider();

    useEffect(() => {
        const getCurrentTrack = async () => {
            const response = await axios.get(
                "https://api.spotify.com/v1/me/player/currently-playing",
                {
                    headers: {
                        Authorization: "Bearer " + token,
                        "Content-Type": "application/json",
                    },
                }
            );
            // console.log("Res CurrentTrack: ", response);
            if (response.data !== "") {
                const { item } = response.data
                const currentlyPlaying = {
                    id: item.id,
                    name: item.name,
                    artists: item.artists.map((artist) => artist.name),
                    image: item.album.images[2].url,
                };
                dispatch({ type: reducerCases.SET_PLAYLING, currentlyPlaying });
            }
        };
        getCurrentTrack()
    }, [token, dispatch]);

    return (
        <div className={cx('wrapper')}>
            {currentlyPlaying && (
                <div className={cx('track')}>
                    <div className={cx("track__image")}>
                        <img src={currentlyPlaying.image} alt="currentlyPlaying" />
                    </div>
                    <div className={cx("track__info")}>
                        <h4>{currentlyPlaying.name}</h4>
                        <h5>{currentlyPlaying.artists.join(", ")}</h5>
                    </div>
                </div>
            )}
        </div>
    )
}
