import React from "react";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import styled from 'styled-components'
import CurrentTrack from "../CurrentTrack/CurrentTrack";
import PlayerControls from "../PlayerControls/PlayerControls";

const cx = classNames.bind(styles);

export default function Footer() {
  return <Container className={cx("wrapper")}>
    <CurrentTrack />
    <PlayerControls />
  </Container>;
}

const Container = styled.div`
    
`
