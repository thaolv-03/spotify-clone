import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Spotify.module.scss";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import { useStateProvider } from "../../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../../utils/Constants";

const cx = classNames.bind(styles);

export default function Spotify() {
  const [{ token }, dispatch] = useStateProvider();
  const bodyRef = useRef();
  const [navBackground, setNavBackground] = useState(false)
  const [headerBackground, setHeaderBackground] = useState(false)
  const bodyScrolled = () => {
    bodyRef.current.scrollTop >= 30
      ? setNavBackground(true)
      : setNavBackground(false)
    bodyRef.current.scrollTop >= 268
      ? setHeaderBackground(true)
      : setHeaderBackground(false)
  }

  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      // console.log({ data });
      const userInfo = {
        userId: data.id,
        userName: data.display_name,
        userImg: data.images[0].url,
      };

      dispatch({ type: reducerCases.SET_USER, userInfo });
    };
    getUserInfo();
  }, [dispatch, token]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("spotify__body")}>
        <Sidebar />
        <div className={cx("body")} ref={bodyRef} onScroll={bodyScrolled}>
          <Navbar navBackground={navBackground} />
          <div className={cx("body__contents")}>
            <Body headerBackground={headerBackground} />
          </div>
        </div>
      </div>
      <div className={cx("footer")}>
        <Footer />
      </div>
    </div>
  );
}
