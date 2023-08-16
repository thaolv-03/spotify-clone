import React from "react";
import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import styled from 'styled-components'
import { useStateProvider } from "../../utils/StateProvider";

const cx = classNames.bind(styles);

export default function Navbar({ navBackground }) {
  const [{ userInfo }] = useStateProvider();

  return (
    <Container className={cx("wrapper")} navBackground={navBackground}>
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
    </Container>
  );
}

const Container = styled.div`
    background-color: ${({ navBackground }) =>
    navBackground ? "rgba(0, 0, 0, 0.7)" : "none"};
`
